(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.aria = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var query = require('./lib/query.js');
var name = require('./lib/name.js');
var atree = require('./lib/atree.js');

module.exports = {
	getRole: query.getRole,
	getAttribute: query.getAttribute,
	getName: name.getName,
	getDescription: name.getDescription,

	matches: query.matches,
	querySelector: query.querySelector,
	querySelectorAll: query.querySelectorAll,
	closest: query.closest,

	getParentNode: atree.getParentNode,
	getChildNodes: atree.getChildNodes,
};

},{"./lib/atree.js":2,"./lib/name.js":5,"./lib/query.js":6}],2:[function(require,module,exports){
var attrs = require('./attrs');

var _getOwner = function(node, owners) {
	if (node.nodeType === node.ELEMENT_NODE && node.id) {
		var selector = '[aria-owns~="' + CSS.escape(node.id) + '"]';
		if (owners) {
			for (var owner of owners) {
				if (owner.matches(selector)) {
					return owner;
				}
			}
		} else {
			return document.querySelector(selector);
		}
	}
};

var _getParentNode = function(node, owners) {
	return _getOwner(node, owners) || node.parentNode;
};

var detectLoop = function(node, owners) {
	var seen = [node];
	while ((node = _getParentNode(node, owners))) {
		if (seen.includes(node)) {
			return true;
		}
		seen.push(node);
	}
};

var getOwner = function(node, owners) {
	var owner = _getOwner(node, owners);
	if (owner && !detectLoop(node, owners)) {
		return owner;
	}
};

var getParentNode = function(node, owners) {
	return getOwner(node, owners) || node.parentNode;
};

var isHidden = function(node) {
	return node.nodeType === node.ELEMENT_NODE && attrs.getAttribute(node, 'hidden');
};

var getChildNodes = function(node, owners) {
	var childNodes = [];

	for (var i = 0; i < node.childNodes.length; i++) {
		var child = node.childNodes[i];
		if (!getOwner(child, owners) && !isHidden(child)) {
			childNodes.push(child);
		}
	}

	if (node.nodeType === node.ELEMENT_NODE) {
		var owns = attrs.getAttribute(node, 'owns') || [];
		for (var i = 0; i < owns.length; i++) {
			var child = document.getElementById(owns[i]);
			// double check with getOwner for consistency
			if (child && getOwner(child, owners) === node && !isHidden(child)) {
				childNodes.push(child);
			}
		}
	}

	return childNodes;
};

var walk = function(root, fn) {
	var owners = document.querySelectorAll('[aria-owns]');
	var queue = [root];
	while (queue.length) {
		var item = queue.shift();
		fn(item);
		queue = getChildNodes(item, owners).concat(queue);
	}
};

var searchUp = function(node, test) {
	var candidate = getParentNode(node);
	if (candidate) {
		if (test(candidate)) {
			return candidate;
		} else {
			return searchUp(candidate, test);
		}
	}
};

module.exports = {
	'getParentNode': getParentNode,
	'getChildNodes': getChildNodes,
	'walk': walk,
	'searchUp': searchUp,
};

},{"./attrs":3}],3:[function(require,module,exports){
var constants = require('./constants.js');

// candidates can be passed for performance optimization
var getRole = function(el, candidates) {
	if (el.hasAttribute('role')) {
		var role = el.getAttribute('role');
		if (!candidates || candidates.includes(role)) {
			return role;
		} else {
			return;
		}
	}
	var roles = candidates ? candidates : Object.keys(constants.roles);
	for (var role of roles) {
		var r = constants.roles[role];
		if (r) {
			var selector = (r.selectors || []).join(',');
			if (selector && el.matches(selector)) {
				return role;
			}
		}
	}
};

var hasRole = function(el, roles) {
	var candidates = [].concat.apply([], roles.map(role => {
		return (constants.roles[role] || {}).subRoles || [role];
	}));
	return !!getRole(el, candidates);
};

var getAttribute = function(el, key) {
	if (constants.attributeStrongMapping.hasOwnProperty(key)) {
		var value = el[constants.attributeStrongMapping[key]];
		if (value) {
			return value;
		}
	}
	if (key === 'readonly' && el.contentEditable) {
		return false;
	} else if (key === 'invalid' && el.checkValidity) {
		return !el.checkValidity();
	} else if (key === 'hidden') {
		// workaround for chromium
		if (el.matches('noscript')) {
			return true;
		}
		if (el.matches('details:not([open]) > :not(summary)')) {
			return true;
		}
		var style = window.getComputedStyle(el);
		if (style.display === 'none' || style.visibility === 'hidden') {
			return true;
		}
	}

	var type = constants.attributes[key];
	var raw = el.getAttribute('aria-' + key);

	if (raw) {
		if (type === 'bool') {
			return raw === 'true';
		} else if (type === 'tristate') {
			return raw === 'true' ? true : raw === 'false' ? false : 'mixed';
		} else if (type === 'bool-undefined') {
			return raw === 'true' ? true : raw === 'false' ? false : undefined;
		} else if (type === 'id-list') {
			return raw.split(/\s+/);
		} else if (type === 'integer') {
			return parseInt(raw, 10);
		} else if (type === 'number') {
			return parseFloat(raw);
		} else if (type === 'token-list') {
			return raw.split(/\s+/);
		} else {
			return raw;
		}
	}

	// TODO
	// autocomplete
	// contextmenu -> aria-haspopup
	// indeterminate -> aria-checked="mixed"
	// list -> aria-controls

	if (key === 'level') {
		for (var i = 1; i <= 6; i++) {
			if (el.tagName.toLowerCase() === 'h' + i) {
				return i;
			}
		}
	} else if (constants.attributeWeakMapping.hasOwnProperty(key)) {
		return el[constants.attributeWeakMapping[key]];
	}

	if (key in constants.attrsWithDefaults) {
		var role = getRole(el);
		var defaults = (constants.roles[role] || {}).defaults;
		if (defaults && defaults.hasOwnProperty(key)) {
			return defaults[key];
		}
	}

	if (type === 'bool' || type === 'tristate') {
		return false;
	}
};

module.exports = {
	getRole: getRole,
	hasRole: hasRole,
	getAttribute: getAttribute,
};

},{"./constants.js":4}],4:[function(require,module,exports){
// https://www.w3.org/TR/wai-aria/#state_prop_def
exports.attributes = {
	'activedescendant': 'id',
	'atomic': 'bool',
	'autocomplete': 'token',
	'busy': 'bool',
	'checked': 'tristate',
	'colcount': 'int',
	'colindex': 'int',
	'colspan': 'int',
	'controls': 'id-list',
	'current': 'token',
	'describedby': 'id-list',
	'details': 'id',
	'disabled': 'bool',
	'dropeffect': 'token-list',
	'errormessage': 'id',
	'expanded': 'bool-undefined',
	'flowto': 'id-list',
	'grabbed': 'bool-undefined',
	'haspopup': 'token',
	'hidden': 'bool-undefined',
	'invalid': 'token',
	'keyshortcuts': 'string',
	'label': 'string',
	'labelledby': 'id-list',
	'level': 'int',
	'live': 'token',
	'modal': 'bool',
	'multiline': 'bool',
	'multiselectable': 'bool',
	'orientation': 'token',
	'owns': 'id-list',
	'placeholder': 'string',
	'posinset': 'int',
	'pressed': 'tristate',
	'readonly': 'bool',
	'relevant': 'token-list',
	'required': 'bool',
	'roledescription': 'string',
	'rowcount': 'int',
	'rowindex': 'int',
	'rowspan': 'int',
	'selected': 'bool-undefined',
	'setsize': 'int',
	'sort': 'token',
	'valuemax': 'number',
	'valuemin': 'number',
	'valuenow': 'number',
	'valuetext': 'string',
};

exports.attributeStrongMapping = {
	'disabled': 'disabled',
	'placeholder': 'placeholder',
	'readonly': 'readOnly',
	'required': 'required',
};

exports.attributeWeakMapping = {
	'checked': 'checked',
	'colspan': 'colSpan',
	'expanded': 'open',
	'multiselectable': 'multiple',
	'rowspan': 'rowSpan',
	'selected': 'selected',
};

var scoped = [
	'main *',
	// https://www.w3.org/TR/html/dom.html#sectioning-content-2
	'article *', 'aside *', 'nav *', 'section *',
	// https://www.w3.org/TR/html/sections.html#sectioning-roots
	'blockquote *', 'details *', 'dialog *', 'fieldset *', 'figure *', 'td *',
].join(',');

// https://www.w3.org/TR/html-aam-1.0/#html-element-role-mappings
// https://www.w3.org/TR/wai-aria/roles
exports.roles = {
	alert: {
		childRoles: ['alertdialog'],
		defaults: {
			'live': 'assertive',
			'atomic': true,
		},
	},
	article: {
		selectors: ['article'],
	},
	banner: {
		selectors: ['header:not(' + scoped + ')'],
	},
	button: {
		selectors: [
			'button',
			'input[type="button"]',
			'input[type="image"]',
			'input[type="reset"]',
			'input[type="submit"]',
			'summary',
		],
		nameFromContents: true,
	},
	cell: {
		selectors: ['td'],
		childRoles: ['gridcell', 'rowheader'],
		nameFromContents: true,
	},
	checkbox: {
		selectors: ['input[type="checkbox"]'],
		childRoles: ['menuitemcheckbox', 'switch'],
		nameFromContents: true,
		defaults: {
			'checked': 'false',
		},
	},
	columnheader: {
		selectors: ['th[scope="col"]'],
		nameFromContents: true,
	},
	combobox: {
		selectors: [
		'input:not([type])[list]',
			'input[type="email"][list]',
			'input[type="search"][list]',
			'input[type="tel"][list]',
			'input[type="text"][list]',
			'input[type="url"][list]',
			'select:not([size]):not([multiple])',
			'select[size="0"]:not([multiple])',
			'select[size="1"]:not([multiple])',
		],
		defaults: {
			'expanded': false,
			'haspopup': 'listbox',
		},
	},
	command: {
		childRoles: ['button', 'link', 'menuitem'],
	},
	complementary: {
		selectors: ['aside'],
	},
	composite: {
		childRoles: ['grid', 'select', 'spinbutton', 'tablist'],
	},
	contentinfo: {
		selectors: ['footer:not(' + scoped + ')'],
	},
	definition: {
		selectors: ['dd'],
	},
	dialog: {
		selectors: ['dialog'],
		childRoles: ['alertdialog'],
	},
	'doc-backlink': {
		nameFromContents: true,
	},
	'doc-biblioref': {
		nameFromContents: true,
	},
	'doc-glossref': {
		nameFromContents: true,
	},
	'doc-noteref': {
		nameFromContents: true,
	},
	document: {
		selectors: ['body'],
		childRoles: ['article', 'graphics-document'],
	},
	figure: {
		selectors: ['figure'],
	},
	form: {
		selectors: ['form[aria-label]', 'form[aria-labelledby]', 'form[title]'],
	},
	grid: {
		childRoles: ['treegrid'],
	},
	gridcell: {
		childRoles: ['columnheader', 'rowheader'],
		nameFromContents: true,
	},
	group: {
		selectors: ['details', 'optgroup'],
		childRoles: ['row', 'select', 'toolbar', 'graphics-object'],
	},
	heading: {
		selectors: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
		nameFromContents: true,
		defaults: {
			'level': 2,
		},
	},
	img: {
		selectors: ['img:not([alt=""])', 'graphics-symbol'],
		childRoles: ['doc-cover'],
	},
	input: {
		childRoles: ['checkbox', 'option', 'radio', 'slider', 'spinbutton', 'textbox'],
	},
	landmark: {
		childRoles: [
			'banner',
			'complementary',
			'contentinfo',
			'doc-acknowledgments',
			'doc-afterword',
			'doc-appendix',
			'doc-bibliography',
			'doc-chapter',
			'doc-conclusion',
			'doc-credits',
			'doc-endnotes',
			'doc-epilogue',
			'doc-errata',
			'doc-foreword',
			'doc-glossary',
			'doc-introduction',
			'doc-part',
			'doc-preface',
			'doc-prologue',
			'form',
			'main',
			'navigation',
			'region',
			'search',
		],
	},
	link: {
		selectors: ['a[href]', 'area[href]', 'link[href]'],
		childRoles: ['doc-backlink', 'doc-biblioref', 'doc-glossref', 'doc-noteref'],
		nameFromContents: true,
	},
	list: {
		selectors: ['dl', 'ol', 'ul'],
		childRoles: ['directory', 'feed'],
	},
	listbox: {
		selectors: [
			'select[multiple]',
			'select[size]:not([size="0"]):not([size="1"])',
		],
		defaults: {
			'orientation': 'vertical',
		},
	},
	listitem: {
		selectors: ['dt', 'ul > li', 'ol > li'],
		childRoles: ['doc-biblioentry', 'doc-endnote', 'treeitem'],
	},
	log: {
		defaults: {
			'live': 'polite',
		},
	},
	main: {
		selectors: ['main'],
	},
	math: {
		selectors: ['math'],
	},
	menu: {
		selectors: ['menu[type="context"]'],
		childRoles: ['menubar'],
		defaults: {
			'orientation': 'vertical',
		},
	},
	menubar: {
		defaults: {
			'orientation': 'horizontal',
		},
	},
	menuitem: {
		selectors: ['menuitem[type="command"]'],
		childRoles: ['menuitemcheckbox'],
		nameFromContents: true,
	},
	menuitemcheckbox: {
		selectors: ['menuitem[type="checkbox"]'],
		childRoles: ['menuitemradio'],
		nameFromContents: true,
		defaults: {
			'checked': 'false',
		},
	},
	menuitemradio: {
		selectors: ['menuitem[type="radio"]'],
		nameFromContents: true,
		defaults: {
			'checked': 'false',
		},
	},
	navigation: {
		selectors: ['nav'],
		childRoles: ['doc-index', 'doc-pagelist', 'doc-toc'],
	},
	note: {
		childRoles: ['doc-notice', 'doc-tip'],
	},
	option: {
		selectors: ['option'],
		childRoles: ['treeitem'],
		nameFromContents: true,
		defaults: {
			'selected': 'false',
		},
	},
	presentation: {
		selectors: ['img[alt=""]'],
	},
	progressbar: {
		selectors: ['progress'],
	},
	radio: {
		selectors: ['input[type="radio"]'],
		childRoles: ['menuitemradio'],
		nameFromContents: true,
		defaults: {
			'checked': 'false',
		},
	},
	range: {
		childRoles: ['progressbar', 'scrollbar', 'slider', 'spinbutton'],
	},
	region: {
		selectors: ['section[aria-label]', 'section[aria-labelledby]', 'section[title]'],
	},
	roletype: {
		childRoles: ['structure', 'widget', 'window'],
	},
	row: {
		selectors: ['tr'],
		nameFromContents: true,
	},
	rowgroup: {
		selectors: ['tbody', 'thead', 'tfoot'],
		nameFromContents: true,
	},
	rowheader: {
		selectors: ['th[scope="row"]'],
		nameFromContents: true,
	},
	scrollbar: {
		defaults: {
			'orientation': 'vertical',
			'valuemin': 0,
			'valuemax': 100,
			// FIXME: halfway between actual valuemin and valuemax
			'valuenow': 50,
		},
	},
	searchbox: {
		selectors: ['input[type="search"]:not([list])'],
	},
	section: {
		childRoles: [
			'alert',
			'cell',
			'definition',
			'doc-abstract',
			'doc-colophon',
			'doc-credit',
			'doc-dedication',
			'doc-epigraph',
			'doc-example',
			'doc-footnote',
			'doc-qna',
			'figure',
			'group',
			'img',
			'landmark',
			'list',
			'listitem',
			'log',
			'marquee',
			'math',
			'note',
			'status',
			'table',
			'tabpanel',
			'term',
			'tooltip',
		],
	},
	sectionhead: {
		childRoles: [
			'columnheader',
			'doc-subtitle',
			'heading',
			'rowheader',
			'tab',
		],
		nameFromContents: true,
	},
	select: {
		childRoles: ['combobox', 'listbox', 'menu', 'radiogroup', 'tree'],
	},
	separator: {
		// assume not focussable because <hr> is not
		selectors: ['hr'],
		childRoles: ['doc-pagebreak'],
		defaults: {
			'orientation': 'horizontal',
		},
	},
	slider: {
		selectors: ['input[type="range"]'],
		defaults: {
			'orientation': 'horizontal',
			'valuemin': 0,
			'valuemax': 100,
			// FIXME: halfway between actual valuemin and valuemax
			'valuenow': 50,
		},
	},
	spinbutton: {
		selectors: ['input[type="number"]'],
		defaults: {
			// FIXME: no valuemin/valuemax
			'valuenow': 0,
		},
	},
	status: {
		selectors: ['output'],
		childRoles: ['timer'],
		defaults: {
			'live': 'polite',
			'atomic': true,
		},
	},
	structure: {
		childRoles: [
			'application',
			'document',
			'none',
			'presentation',
			'rowgroup',
			'section',
			'sectionhead',
			'separator',
		],
	},
	switch: {
		nameFromContents: true,
		defaults: {
			'checked': false,
		},
	},
	tab: {
		nameFromContents: true,
		defaults: {
			'selected': false,
		},
	},
	table: {
		selectors: ['table'],
		childRoles: ['grid'],
	},
	tablist: {
		defaults: {
			'orientation': 'horizontal',
		},
	},
	term: {
		selectors: ['dfn', 'dt'],
	},
	textbox: {
		selectors: [
			'input:not([type]):not([list])',
			'input[type="email"]:not([list])',
			'input[type="tel"]:not([list])',
			'input[type="text"]:not([list])',
			'input[type="url"]:not([list])',
			'textarea',
		],
		childRoles: ['searchbox'],
	},
	toolbar: {
		defaults: {
			'orientation': 'horizontal',
		},
	},
	tooltip: {
		nameFromContents: true,
	},
	tree: {
		childRoles: ['treegrid'],
		defaults: {
			'orientation': 'vertical',
		},
	},
	treeitem: {
		nameFromContents: true,
	},
	widget: {
		childRoles: [
			'command',
			'composite',
			'gridcell',
			'input',
			'range',
			'row',
			'tab',
		],
	},
	window: {
		childRoles: ['dialog'],
	},
};

var getSubRoles = function(role) {
	var children = (exports.roles[role] || {}).childRoles || [];
	var descendents = children.map(getSubRoles);

	var result = [role];

	descendents.forEach(list => {
		list.forEach(r => {
			if (!result.includes(r)) {
				result.push(r);
			}
		});
	});

	return result;
};

exports.attrsWithDefaults = [];

for (var role in exports.roles) {
	exports.roles[role].subRoles = getSubRoles(role);
	for (var key in exports.roles[role].defaults) {
		if (!exports.attrsWithDefaults.includes(key)) {
			exports.attrsWithDefaults.push(key);
		}
	}
}
exports.roles['none'] = exports.roles['none'] || {};
exports.roles['none'].subRoles = ['none', 'presentation'];
exports.roles['presentation'] = exports.roles['presentation'] || {};
exports.roles['presentation'].subRoles = ['presentation', 'none'];

exports.nameFromDescendant = {
	'figure': 'figcaption',
	'table': 'caption',
	'fieldset': 'legend',
};

exports.nameDefaults = {
	'input[type="submit"]': 'Submit',
	'input[type="reset"]': 'Reset',
	'summary': 'Details',
};

},{}],5:[function(require,module,exports){
var constants = require('./constants.js');
var atree = require('./atree.js');
var query = require('./query.js');

var getPseudoContent = function(node, selector) {
	var styles = window.getComputedStyle(node, selector);
	var ret = styles.getPropertyValue('content');
	var inline = styles.display.substr(0, 6) === 'inline';
	if (!ret) {
		return '';
	}
	if (ret.substr(0, 1) !== '"') {
		return '';
	} else {
		if (inline) {
			return ret.slice(1, -1);
		} else {
			return ' ' + ret.slice(1, -1) + ' ';
		}
	}
};

var getContent = function(root, visited) {
	var children = atree.getChildNodes(root);

	var ret = '';
	for (var i = 0; i < children.length; i++) {
		var node = children[i];
		if (node.nodeType === node.TEXT_NODE) {
			ret += node.textContent;
		} else if (node.nodeType === node.ELEMENT_NODE) {
			if (node.tagName.toLowerCase() === 'br') {
				ret += '\n';
			} else if (window.getComputedStyle(node).display.substr(0, 6) === 'inline' &&
					node.tagName.toLowerCase() !== 'input' &&
					node.tagName.toLowerCase() !== 'img') {  // https://github.com/w3c/accname/issues/3
				ret += getName(node, true, visited);
			} else {
				ret += ' ' + getName(node, true, visited) + ' ';
			}
		}
	}

	return ret;
};

var allowNameFromContent = function(el) {
	var role = query.getRole(el);
	return (constants.roles[role] || {}).nameFromContents;
};

var isInLabelForOtherWidget = function(el) {
	var label = el.parentElement.closest('label');
	return label && (!el.labels || !Array.prototype.includes.call(el.labels, label));
};

var getName = function(el, recursive, visited, directReference) {
	var ret = '';

	visited = visited || [];
	if (visited.includes(el)) {
		if (!directReference) {
			return '';
		}
	} else {
		visited.push(el);
	}

	// A
	// handled in atree

	// B
	if (!recursive && el.matches('[aria-labelledby]')) {
		var ids = el.getAttribute('aria-labelledby').split(/\s+/);
		var strings = ids.map(id => {
			var label = document.getElementById(id);
			return label ? getName(label, true, visited, true) : '';
		});
		ret = strings.join(' ');
	}

	// C
	if (!ret.trim() && el.matches('[aria-label]')) {
		// FIXME: may skip to 2E
		ret = el.getAttribute('aria-label');
	}

	// D
	if (!ret.trim() && !recursive && el.labels) {
		var strings = Array.prototype.map.call(el.labels, label => {
			return getName(label, true, visited);
		});
		ret = strings.join(' ');
	}
	if (!ret.trim()) {
		ret = el.placeholder || '';
	}
	if (!ret.trim()) {
		ret = el.alt || '';
	}
	if (!ret.trim() && el.matches('abbr,acronym') && el.title) {
		ret = el.title;
	}
	if (!ret.trim()) {
		for (var selector in constants.nameFromDescendant) {
			if (el.matches(selector)) {
				var descendant = el.querySelector(constants.nameFromDescendant[selector]);
				if (descendant) {
					ret = getName(descendant, true, visited);
				}
			}
		}
	}

	// E
	if (!ret.trim() && (recursive || isInLabelForOtherWidget(el) || query.matches(el, 'button'))) {
		if (query.matches(el, 'textbox,button,combobox,listbox,range')) {
			if (query.matches(el, 'textbox,button')) {
				ret = el.value || el.textContent;
			} else if (query.matches(el, 'combobox,listbox')) {
				var selected = query.querySelector(el, ':selected') || query.querySelector(el, 'option');
				if (selected) {
					ret = getName(selected, recursive, visited);
				} else {
					ret = el.value || '';
				}
			} else if (query.matches(el, 'range')) {
				ret = '' + (query.getAttribute(el, 'valuetext') || query.getAttribute(el, 'valuenow') || el.value);
			}
		}
	}

	// F
	// FIXME: menu is not mentioned in the spec
	if (!ret.trim() && (recursive || allowNameFromContent(el) || el.closest('label')) && !query.matches(el, 'menu')) {
		ret = getContent(el, visited);
	}

	if (!ret.trim()) {
		for (var selector in constants.nameDefaults) {
			if (el.matches(selector)) {
				ret = constants.nameDefaults[selector];
			}
		}
	}

	// G/H
	// handled in getContent

	// I
	// FIXME: presentation not mentioned in the spec
	if (!ret.trim() && (directReference || !query.matches(el, 'presentation'))) {
		ret = el.title || '';
	}

	// FIXME: not exactly sure about this, but it reduces the number of failing
	// WPT tests. Whitespace is hard.
	if (!ret.trim()) {
		ret = ' ';
	}

	var before = getPseudoContent(el, ':before');
	var after = getPseudoContent(el, ':after');
	return before + ret + after;
};

var getNameTrimmed = function(el) {
	return getName(el).replace(/\s+/g, ' ').trim();
};

var getDescription = function(el) {
	var ret = '';

	if (el.matches('[aria-describedby]')) {
		var ids = el.getAttribute('aria-describedby').split(/\s+/);
		var strings = ids.map(id => {
			var label = document.getElementById(id);
			return label ? getName(label, true) : '';
		});
		ret = strings.join(' ');
	} else if (el.title) {
		ret = el.title;
	} else if (el.placeholder) {
		ret = el.placeholder;
	}

	ret = (ret || '').trim().replace(/\s+/g, ' ');

	if (ret === getNameTrimmed(el)) {
		ret = '';
	}

	return ret;
};

module.exports = {
	getName: getNameTrimmed,
	getDescription: getDescription,
};

},{"./atree.js":2,"./constants.js":4,"./query.js":6}],6:[function(require,module,exports){
var attrs = require('./attrs.js');
var atree = require('./atree.js');


var matches = function(el, selector) {
	var actual;

	if (selector.substr(0, 1) === ':') {
		var attr = selector.substr(1);
		return attrs.getAttribute(el, attr);
	} else if (selector.substr(0, 1) === '[') {
		var match = /\[([a-z]+)="(.*)"\]/.exec(selector);
		actual = attrs.getAttribute(el, match[1]);
		var rawValue = match[2];
		return actual.toString() === rawValue;
	} else {
		return attrs.hasRole(el, selector.split(','));
	}
};

var _querySelector = function(all) {
	return function(root, role) {
		var results = [];
		try {
			atree.walk(root, node => {
				if (node.nodeType === node.ELEMENT_NODE) {
					// FIXME: skip hidden elements
					if (matches(node, role)) {
						results.push(node);
						if (!all) {
							throw 'StopIteration';
						}
					}
				}
			});
		} catch (e) {
			if (e !== 'StopIteration') {
				throw e;
			}
		}
		return all ? results : results[0];
	};
};

var closest = function(el, selector) {
	return atree.searchUp(el, candidate => {
		if (candidate.nodeType === candidate.ELEMENT_NODE) {
			return matches(candidate, selector);
		}
	});
};

module.exports = {
	getRole: el => attrs.getRole(el),
	getAttribute: attrs.getAttribute,
	matches: matches,
	querySelector: _querySelector(),
	querySelectorAll: _querySelector(true),
	closest: closest,
};

},{"./atree.js":2,"./attrs.js":3}]},{},[1])(1)
});
