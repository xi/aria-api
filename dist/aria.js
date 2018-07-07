(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.aria = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var query = require('./lib/query.js');
var name = require('./lib/name.js');

module.exports = {
	getRole: query.getRole,
	getAttribute: query.getAttribute,
	getName: name.getName,
	getDescription: name.getDescription,

	matches: query.matches,
	querySelector: query.querySelector,
	querySelectorAll: query.querySelectorAll,
	closest: query.closest,
};

},{"./lib/name.js":3,"./lib/query.js":4}],2:[function(require,module,exports){
exports.attributes = {
	// widget
	'autocomplete': 'token',
	'checked': 'tristate',
	'current': 'token',
	'disabled': 'bool',
	'expanded': 'bool-undefined',
	'haspopup': 'token',
	'hidden': 'bool',  // !
	'invalid': 'token',
	'keyshortcuts': 'string',
	'label': 'string',
	'level': 'int',
	'modal': 'bool',
	'multiline': 'bool',
	'multiselectable': 'bool',
	'orientation': 'token',
	'placeholder': 'string',
	'pressed': 'tristate',
	'readonly': 'bool',
	'required': 'bool',
	'roledescription': 'string',
	'selected': 'bool-undefined',
	'valuemax': 'number',
	'valuemin': 'number',
	'valuenow': 'number',
	'valuetext': 'string',

	// live
	'atomic': 'bool',
	'busy': 'bool',
	'live': 'token',
	'relevant': 'token-list',

	// dragndrop
	'dropeffect': 'token-list',
	'grabbed': 'bool-undefined',

	// relationship
	'activedescendant': 'id',
	'colcount': 'int',
	'colindex': 'int',
	'colspan': 'int',
	'controls': 'id-list',
	'describedby': 'id-list',
	'details': 'id',
	'errormessage': 'id',
	'flowto': 'id-list',
	'labelledby': 'id-list',
	'owns': 'id-list',
	'posinset': 'int',
	'rowcount': 'int',
	'rowindex': 'int',
	'rowspan': 'int',
	'setsize': 'int',
	'sort': 'token',
};

exports.attributeStrongMapping = {
	'disabled': 'disabled',
	'hidden': 'hidden',
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

// https://www.w3.org/TR/html-aria/#docconformance
exports.extraSelectors = {
	article: ['article'],
	button: [
		'button',
		'input[type="button"]',
		'input[type="image"]',
		'input[type="reset"]',
		'input[type="submit"]',
		'summary',
	],
	cell: ['td'],
	checkbox: ['input[type="checkbox"]'],
	combobox: [
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
	complementary: ['aside'],
	definition: ['dd'],
	dialog: ['dialog'],
	document: ['body'],
	figure: ['figure'],
	form: ['form[aria-label]', 'form[aria-labelledby]'],
	group: ['details', 'optgroup'],
	heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
	img: ['img:not([alt=""])', 'graphics-symbol'],
	link: ['a[href]', 'area[href]', 'link[href]'],
	list: ['dl', 'ol', 'ul'],
	listbox: [
		'select[multiple]',
		'select[size]:not([size="0"]):not([size="1"])',
	],
	listitem: ['dt', 'ul > li', 'ol > li'],
	main: ['main'],
	math: ['math'],
	menuitemcheckbox: ['menuitem[type="checkbox"]'],
	menuitem: ['menuitem[type="command"]'],
	menuitemradio: ['menuitem[type="radio"]'],
	menu: ['menu[type="context"]'],
	navigation: ['nav'],
	option: ['option'],
	progressbar: ['progress'],
	radio: ['input[type="radio"]'],
	region: ['section[aria-label]', 'section[aria-labelledby]', 'section[title]'],
	rowgroup: ['tbody', 'thead', 'tfoot'],
	row: ['tr'],
	searchbox: ['input[type="search"]:not([list])'],
	separator: ['hr'],
	slider: ['input[type="range"]'],
	spinbutton: ['input[type="number"]'],
	status: ['output'],
	table: ['table'],
	term: ['dfn', 'dt'],
	textbox: [
		'input:not([type]):not([list])',
		'input[type="email"]:not([list])',
		'input[type="tel"]:not([list])',
		'input[type="text"]:not([list])',
		'input[type="url"]:not([list])',
		'textarea',
	],

	// if scope is missing, it is calculated automatically
	rowheader: ['th[scope="row"]'],
	columnheader: ['th[scope="col"]'],
};

exports.scoped = [
	'article *', 'aside *', 'main *', 'nav *', 'section *',
].join(',');

// https://www.w3.org/TR/wai-aria/roles
var subRoles = {
	cell: ['gridcell', 'rowheader'],
	command: ['button', 'link', 'menuitem'],
	composite: ['grid', 'select', 'spinbutton', 'tablist'],
	img: ['doc-cover'],
	input: ['checkbox', 'option', 'radio', 'slider', 'spinbutton', 'textbox'],
	landmark: [
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
	range: ['progressbar', 'scrollbar', 'slider', 'spinbutton'],
	roletype: ['structure', 'widget', 'window'],
	section: [
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
	sectionhead: [
		'columnheader',
		'doc-subtitle',
		'heading',
		'rowheader',
		'tab',
	],
	select: ['combobox', 'listbox', 'menu', 'radiogroup', 'tree'],
	separator: ['doc-pagebreak'],
	structure: [
		'application',
		'document',
		'none',
		'presentation',
		'rowgroup',
		'section',
		'sectionhead',
		'separator',
	],
	table: ['grid'],
	textbox: ['searchbox'],
	widget: [
		'command',
		'composite',
		'gridcell',
		'input',
		'range',
		'row',
		'separator',
		'tab',
	],
	window: ['dialog'],
	alert: ['alertdialog'],
	checkbox: ['menuitemcheckbox', 'switch'],
	dialog: ['alertdialog'],
	gridcell: ['columnheader', 'rowheader'],
	menuitem: ['menuitemcheckbox'],
	menuitemcheckbox: ['menuitemradio'],
	option: ['treeitem'],
	radio: ['menuitemradio'],
	status: ['timer'],
	grid: ['treegrid'],
	menu: ['menubar'],
	tree: ['treegrid'],
	document: ['article', 'graphics-document'],
	group: ['row', 'select', 'toolbar', 'graphics-object'],
	link: ['doc-backlink', 'doc-biblioref', 'doc-glossref', 'doc-noteref'],
	list: ['directory', 'feed'],
	listitem: ['doc-biblioentry', 'doc-endnote', 'treeitem'],
	navigation: ['doc-index', 'doc-pagelist', 'doc-toc'],
	note: ['doc-notice', 'doc-tip'],
};

var getSubRoles = function(role) {
	var children = subRoles[role] || [];
	var descendents = children.map(getSubRoles);

	var result = [role];

	descendents.forEach(function(list) {
		list.forEach(function(r) {
			if (result.indexOf(r) === -1) {
				result.push(r);
			}
		});
	});

	return result;
};

exports.subRoles = {};
for (var role in subRoles) {
	exports.subRoles[role] = getSubRoles(role);
}
exports.subRoles['none'] = ['none', 'presentation'];
exports.subRoles['presentation'] = ['presentation', 'none'];

exports.nameFromContents = [
	'button',
	'checkbox',
	'columnheader',
	'doc-backlink',
	'doc-biblioref',
	'doc-glossref',
	'doc-noteref',
	'gridcell',
	'heading',
	'link',
	'menuitem',
	'menuitemcheckbox',
	'menuitemradio',
	'option',
	'radio',
	'row',
	'rowgroup',
	'rowheader',
	'sectionhead',
	'tab',
	'tooltip',
	'treeitem',
	'switch',
];

exports.nameFromDescendant = {
	'figure': 'figcaption',
	'table': 'caption',
	'fieldset': 'legend',
};

exports.nameDefaults = {
	'[type="submit"]': 'Submit',
	'[type="reset"]': 'Reset',
	'summary': 'Details',
};

exports.labelable = [
	'button',
	'input:not([type="hidden"])',
	'keygen',
	'meter',
	'output',
	'progress',
	'select',
	'textarea',
];

},{}],3:[function(require,module,exports){
var constants = require('./constants.js');
var query = require('./query.js');
var util = require('./util.js');

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

var getContent = function(root, referenced) {
	var children = [];

	for (var i = 0; i < root.childNodes.length; i++) {
		children.push(root.childNodes[i]);
	}

	var owns = query.getAttribute(root, 'owns') || [];
	for (var i = 0; i < owns.length; i++) {
		var owned = document.getElementById(owns[i]);
		if (owned) {
			children.push(owned);
		}
	}

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
				ret += getName(node, true, referenced);
			} else {
				ret += ' ' + getName(node, true, referenced) + ' ';
			}
		}
	}

	return ret;
};

var allowNameFromContent = function(el) {
	var role = query.getRole(el);
	return !role || constants.nameFromContents.indexOf(role) !== -1;
};

var isLabelable = function(el) {
	var selector = constants.labelable.join(',');
	return el.matches(selector);
};

// Control.labels is part of the standard, but not supported in most browsers
var getLabelNodes = function(element) {
	var labels = [];
	var labelable = constants.labelable.join(',');
	util.walkDOM(document.body, function(node) {
		if (node.tagName && node.tagName.toLowerCase() === 'label') {
			if (node.getAttribute('for')) {
				if (element.id && node.getAttribute('for') === element.id) {
					labels.push(node);
				}
			} else if (node.querySelector(labelable) === element) {
				labels.push(node);
			}
		}
	});
	return labels;
};

// http://www.ssbbartgroup.com/blog/how-the-w3c-text-alternative-computation-works/
// https://www.w3.org/TR/accname-aam-1.1/#h-mapping_additional_nd_te
var getName = function(el, recursive, referenced) {
	var ret = '';

	if (query.getAttribute(el, 'hidden', referenced)) {
		return '';
	}
	if (!recursive && el.matches('[aria-labelledby]')) {
		var ids = el.getAttribute('aria-labelledby').split(/\s+/);
		var strings = ids.map(function(id) {
			var label = document.getElementById(id);
			return label ? getName(label, true, label) : '';
		});
		ret = strings.join(' ');
	}
	if (!ret.trim() && el.matches('[aria-label]')) {
		ret = el.getAttribute('aria-label');
	}
	if (!ret.trim() && query.matches(el, 'presentation')) {
		return getContent(el, referenced);
	}
	if (!ret && !recursive && isLabelable(el)) {
		var strings = getLabelNodes(el).map(function(label) {
			return getName(label, true, label);
		});
		ret = strings.join(' ');
	}
	if (!ret.trim()) {
		ret = el.getAttribute('placeholder') || '';
	}
	if (!ret.trim()) {
		ret = el.getAttribute('alt') || '';
	}
	if (!ret.trim() && el.matches('abbr,acronym') && el.title) {
		ret = el.title;
	}
	if (!ret.trim()) {
		for (var selector in constants.nameFromDescendant) {
			if (el.matches(selector)) {
				var descendant = el.querySelector(constants.nameFromDescendant[selector]);
				if (descendant) {
					ret = getName(descendant, true, descendant);
				}
			}
		}
	}
	if (el.closest('label') || recursive || query.matches(el, 'button')) {
		if (!ret.trim() && query.matches(el, 'textbox,button,combobox,listbox,range')) {
			if (query.matches(el, 'textbox,button')) {
				ret = el.value || el.textContent;
			} else if (query.matches(el, 'combobox,listbox')) {
				var selected = query.querySelector(el, ':selected') || query.querySelector(el, 'option');
				if (selected) {
					ret = getName(selected, recursive, referenced);
				}
			} else if (query.matches(el, 'range')) {
				ret = '' + (query.getAttribute(el, 'valuetext') || query.getAttribute(el, 'valuenow') || el.value);
			}
		}
	}
	if (!ret.trim() && (recursive || allowNameFromContent(el)) && !query.matches(el, 'menu')) {
		ret = getContent(el, referenced);
	}
	if (!ret.trim()) {
		for (var selector in constants.nameDefaults) {
			if (el.matches(selector)) {
				ret = constants.nameDefaults[selector];
			}
		}
	}
	if (!ret.trim()) {
		ret = el.title || '';
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
		var strings = ids.map(function(id) {
			var label = document.getElementById(id);
			return label ? getName(label, true, label) : '';
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

},{"./constants.js":2,"./query.js":4,"./util.js":5}],4:[function(require,module,exports){
var constants = require('./constants.js');
var util = require('./util.js');

var getSubRoles = function(roles) {
	return [].concat.apply([], roles.map(function(role) {
		return constants.subRoles[role] || [role];
	}));
};

// candidates can be passed for performance optimization
var _getRole = function(el, candidates) {
	if (el.hasAttribute('role')) {
		return el.getAttribute('role');
	}
	for (var role in constants.extraSelectors) {
		var selector = constants.extraSelectors[role].join(',');
		if ((!candidates || candidates.indexOf(role) !== -1) && el.matches(selector)) {
			return role;
		}
	}

	if (!candidates ||
			candidates.indexOf('banner') !== -1 ||
			candidates.indexOf('contentinfo') !== -1) {
		var scoped = el.matches(constants.scoped);

		if (el.matches('header') && !scoped) {
			return 'banner';
		}
		if (el.matches('footer') && !scoped) {
			return 'contentinfo';
		}
	}
};

var getAttribute = function(el, key, _hiddenRoot) {
	if (key === 'hidden' && el === _hiddenRoot) {  // used for name calculation
		return false;
	}

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
			return parseInt(raw);
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
	} else if (key === 'hidden') {
		if (el.clientHeight === 0) {  // rough check for performance
			return el.parentNode && getAttribute(el.parentNode, 'hidden', _hiddenRoot);
		}
	} else if (constants.attributeWeakMapping.hasOwnProperty(key)) {
		return el[constants.attributeWeakMapping[key]];
	}

	if (type === 'bool' || type === 'tristate') {
		return false;
	}
};

var matches = function(el, selector) {
	var actual;

	if (selector.substr(0, 1) === ':') {
		var attr = selector.substr(1);
		return getAttribute(el, attr);
	} else if (selector.substr(0, 1) === '[') {
		var match = /\[([a-z]+)="(.*)"\]/.exec(selector);
		actual = getAttribute(el, match[1]);
		var rawValue = match[2];
		return actual.toString() == rawValue;
	} else {
		var candidates = getSubRoles(selector.split(','));
		actual = _getRole(el, candidates);
		return candidates.indexOf(actual) !== -1;
	}
};

var _querySelector = function(all) {
	return function(root, role) {
		var results = [];
		util.walkDOM(root, function(node) {
			if (node.nodeType === node.ELEMENT_NODE) {
				// FIXME: skip hidden elements
				if (matches(node, role)) {
					results.push(node);
					if (!all) {
						return false;
					}
				}
			}
		});
		return all ? results : results[0];
	};
};

var closest = function(el, selector) {
	return util.searchUp(el, function(candidate) {
		return matches(candidate, selector);
	});
};

module.exports = {
	getRole: function(el) {
		return _getRole(el);
	},
	getAttribute: getAttribute,
	matches: matches,
	querySelector: _querySelector(),
	querySelectorAll: _querySelector(true),
	closest: closest,
};

},{"./constants.js":2,"./util.js":5}],5:[function(require,module,exports){
var walkDOM = function(root, fn) {
	if (fn(root) === false) {
		return false;
	}
	var node = root.firstChild;
	while (node) {
		if (walkDOM(node, fn) === false) {
			return false;
		}
		node = node.nextSibling;
	}
};

var searchUp = function(el, test) {
	var candidate = el.parentElement;
	if (candidate) {
		if (test(candidate)) {
			return candidate;
		} else {
			return searchUp(candidate, test);
		}
	}
};

module.exports = {
	walkDOM: walkDOM,
	searchUp: searchUp,
};

},{}]},{},[1])(1)
});