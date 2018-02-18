var constants = require('./constants.js');
var query = require('./query.js');
var util = require('./util.js');

var getPseudoContent = function(node, selector) {
	var styles = window.getComputedStyle(node, selector);
	var ret = styles.getPropertyValue('content');
	if (!ret) {
		return ''
	}
	if (ret.substr(0, 1) !== '"') {
		return '';
	} else {
		return ret.slice(1, -1);
	}
};

var getContent = function(root, referenced) {
	var ret = getPseudoContent(root, ':before');
	var node = root.firstChild;
	while (node) {
		if (node.nodeType === node.TEXT_NODE) {
			ret += node.textContent;
		} else if (node.nodeType === node.ELEMENT_NODE) {
			if (node.tagName.toLowerCase() === 'br') {
				ret += '\n';
			} else if (window.getComputedStyle(node).display.substr(0, 6) === 'inline') {
				ret += getName(node, true, referenced);
			} else {
				ret += ' ' + getName(node, true, referenced) + ' ';
			}
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
	if (!ret.trim() && el.matches('[aria-label]')) {
		ret = el.getAttribute('aria-label');
	}
	if (!query.matches(el, 'presentation')) {
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
		// figcaption
		// caption
		// table
	}
	// FIXME only if this is embedded in a label
	if (!ret.trim() && query.matches(el, 'textbox,button,combobox,range')) {
		if (query.matches(el, 'textbox,button')) {
			ret = el.value || el.textContent;
		} else if (query.matches(el, 'combobox')) {
			var selected = query.querySelector(el, ':selected') || query.querySelector(el, 'option');
			if (selected) {
				ret = getName(selected, recursive, referenced);
			}
		} else if (query.matches(el, 'range')) {
			ret = '' + (query.getAttribute(el, 'valuetext') || query.getAttribute(el, 'valuenow') || el.value);
		}
	}
	if (!ret.trim() && (recursive || allowNameFromContent(el))) {
		ret = getContent(el, referenced);
	}
	if (!ret.trim()) {
		ret = el.title || '';
	}

	return ret || '';
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

	return (ret || '').trim().replace(/\s+/g, ' ');
};

module.exports = {
	getName: function(el) {
		return getName(el).replace(/\s+/g, ' ').trim();
	},
	getDescription: getDescription,
};
