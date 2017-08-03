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
	'disabled': 'bool',
	'expanded': 'bool-undefined',
	'haspopup': 'bool',
	'hidden': 'bool',  // !
	'invalid': 'token',
	'label': 'string',
	'level': 'int',
	'multiline': 'bool',
	'multiselectable': 'bool',
	'orientation': 'token',
	'pressed': 'tristate',
	'readonly': 'bool',
	'required': 'bool',
	'selected': 'bool-undefined',
	'sort': 'token',
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
	'controls': 'id-list',
	'describedby': 'id-list',
	'flowto': 'id-list',
	'labelledby': 'id-list',
	'owns': 'id-list',
	'posinset': 'int',
	'setsize': 'int',
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
		'input[type="email"][list]',
		'input[type="search"][list]',
		'input[type="tel"][list]',
		'input[type="text"][list]',
		'input[type="url"][list]',
	],
	complementary: ['aside'],
	definition: ['dd'],
	dialog: ['dialog'],
	document: ['body'],
	figure: ['figure'],
	form: ['form[aria-label]', 'form[aria-labelledby]'],
	group: ['details', 'optgroup'],
	heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
	img: ['img:not([alt=""])'],
	link: ['a[href]', 'area[href]', 'link[href]'],
	listbox: ['datalist', 'select'],
	list: ['dl', 'ol', 'ul'],
	listitem: ['ul > li', 'ol > li'],
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
	region: ['section'],
	rowgroup: ['tbody', 'thead', 'tfoot'],
	row: ['tr'],
	searchbox: ['input[type="search"]:not([list])'],
	separator: ['hr'],
	slider: ['input[type="range"]'],
	spinbutton: ['input[type="number"]'],
	status: ['output'],
	table: ['table'],
	textbox: [
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
	command: ['button', 'link', 'menuitem'],
	composite: ['grid', 'select', 'tablist'],
	input: ['checkbox', 'option', 'select', 'spinbutton', 'textbox'],
	landmark: [
		'application',
		'banner',
		'complementary',
		'contentinfo',
		'form',
		'main',
		'navigation',
		'search',
	],
	range: ['progressbar', 'spinbutton'],
	roletype: ['structure', 'widget', 'window'],
	section: [
		'definition',
		'gridcell',
		'group',
		'img',
		'listitem',
		'marquee',
		'math',
		'note',
		'region',
		'tooltip',
	],
	sectionhead: ['columnheader', 'heading', 'rowheader', 'tab'],
	select: ['combobox', 'listbox', 'menu', 'radiogroup', 'tree'],
	structure: [
		'document',
		'presentation',
		'section',
		'sectionhead',
		'separator',
	],
	widget: [
		'columnheader',
		'command',
		'composite',
		'gridcell',
		'input',
		'range',
		'row',
		'rowheader',
		'tab',
	],
	window: ['dialog'],
	alert: ['alertdialog'],
	checkbox: ['menuitemcheckbox'],
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
	directory: ['tablist'],
	document: ['article'],
	group: ['row', 'rowgroup', 'select', 'toolbar'],
	list: ['directory', 'listbox', 'menu'],
	listitem: ['treeitem'],
	region: [
		'alert',
		'article',
		'grid',
		'landmark',
		'list',
		'log',
		'status',
		'tabpanel',
	],
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

exports.nameFromContents = [
	'button',
	'checkbox',
	'columnheader',
	'directory',
	'gridcell',
	'heading',
	'link',
	'listitem',
	'menuitem',
	'menuitemcheckbox',
	'menuitemradio',
	'option',
	'radio',
	'row',
	'rowgroup',
	'rowheader',
	'section',
	'sectionhead',
	'tab',
	'tooltip',
	'treeitem',
];

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

var getPseudoContent = function(node, selector) {
	var styles = window.getComputedStyle(node, selector);
	var ret = styles.getPropertyValue('content');
	if (ret === 'none' || ret.substr(0, 4) === '-moz') {
		return '';
	} else {
		return ret
			.replace(/^["']/, '')
			.replace(/["']$/, '');
	}
};

var getContent = function(root, referenced) {
	var ret = getPseudoContent(root, ':before');
	var node = root.firstChild;
	while (node) {
		if (node.nodeType === node.TEXT_NODE) {
			ret += node.textContent;
		} else if (node.nodeType === node.ELEMENT_NODE) {
			ret += getName(node, true, referenced);
		}
		node = node.nextSibling;
	}
	ret += getPseudoContent(root, ':after');
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
var getLabelNode = function(node) {
	if (node.id) {
		var selector = 'label[for="' + node.id + '"]';
		var label = document.querySelector(selector);
		if (label) {
			return label;
		}
	}

	var p = node.parentNode;
	while (p) {
		if (p.tagName === 'LABEL') {
			return p;
		}
		p = p.parentNode;
	}
};

// http://www.ssbbartgroup.com/blog/how-the-w3c-text-alternative-computation-works/
// https://www.w3.org/TR/accname-aam-1.1/#h-mapping_additional_nd_te
var getName = function(el, recursive, referenced) {
	var ret;

	if (query.getAttribute(el, 'hidden', referenced)) {
		return '';
	}
	if (query.matches(el, 'presentation')) {
		return getContent(el, referenced);
	}
	if (!recursive && el.matches('[aria-labelledby]')) {
		var ids = el.getAttribute('aria-labelledby').split(/\s+/);
		var strings = ids.map(function(id) {
			var label = document.getElementById(id);
			return getName(label, true, label);
		});
		ret = strings.join(' ');
	}
	if (!ret && el.matches('[aria-label]')) {
		ret = el.getAttribute('aria-label');
	}
	if (!query.matches(el, 'presentation')) {
		if (!ret && isLabelable(el)) {
			var label = getLabelNode(el);
			if (label) {
				ret = getName(label, recursive, label);
			}
		}
		if (!ret) {
			ret = el.getAttribute('placeholder');
		}
		// figcaption
		if (!ret) {
			ret = el.getAttribute('alt');
		}
		// caption
		// table
	}
	if (!ret) {
		// FIXME: distinguish different input types
		ret = el.value;
	}
	if (!ret && (recursive || allowNameFromContent(el))) {
		ret = getContent(el, referenced);
	}
	if (!ret) {
		ret = el.getAttribute('title');
	}

	return (ret || '').trim().replace(/\s+/g, ' ');
};

var getDescription = function(el) {
	var ret = '';

	if (el.matches('[aria-describedby]')) {
		var ids = el.getAttribute('aria-describedby').split(/\s+/);
		var strings = ids.map(function(id) {
			var label = document.getElementById(id);
			return getName(label, true, label);
		});
		ret = strings.join(' ');
	} else if (el.title) {
		ret = el.title;
	} else if (el.placeholder) {
		ret = el.placeholder;
	}

	return ret;
};

module.exports = {
	getName: getName,
	getDescription: getDescription,
};

},{"./constants.js":2,"./query.js":4}],4:[function(require,module,exports){
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

	if (key === 'level') {
		for (var i = 1; i <= 6; i++) {
			if (el.tagName === 'H' + i) {
				return i;
			}
		}
	} else if (key === 'disabled') {
		return el.disabled;
	} else if (key === 'placeholder') {
		return el.placeholder;
	} else if (key === 'required') {
		return el.required;
	} else if (key === 'readonly') {
		return el.readonly;
	} else if (key === 'hidden') {
		var style = window.getComputedStyle(el);
		if (el.hidden || style.display === 'none' || style.visibility === 'hidden') {
			return true;
		} else if (el.clientHeight === 0) {  // rough check for performance
			return el.parentNode && getAttribute(el.parentNode, 'hidden', _hiddenRoot);
		}
	} else if (key === 'invalid' && el.checkValidity) {
		return el.checkValidity();
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
		return candidates.indexOf(actual) != -1;
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