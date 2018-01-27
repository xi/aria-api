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
				ret = getName(label, true, label);
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
