var constants = require('./constants.js');
var query = require('./query.js');

var getPseudoContent = function(node, selector) {
	var styles = window.getComputedStyle(node, selector);
	var ret = styles.getPropertyValue('content');
	if (ret === 'none' || ret.substr(0, 4) === '-moz') {
		return '';
	} else {
		return ret;
	}
};

var getContent = function(root) {
	var ret = getPseudoContent(root, ':before');
	var node = root.firstChild;
	while (node) {
		if (node.nodeType === node.TEXT_NODE) {
			ret += node.textContent;
		} else if (node.nodeType === node.ELEMENT_NODE) {
			ret += getName(node, true);
		}
		node = node.nextSibling;
	}
	ret += getPseudoContent(root, ':after');
	return ret;
};

var allowNameFromContent = function(el) {
	var role = query.getRole(el);
	return !role || constants.nameFromContents.indexOf(role) != -1;
};

// http://www.ssbbartgroup.com/blog/how-the-w3c-text-alternative-computation-works/
// https://www.w3.org/TR/accname-aam-1.1/#h-mapping_additional_nd_te
var getName = function(el, noRecurse, directReference) {
	var ret;

	if (!directReference && query.matches(el, ':hidden')) {
		return '';
	}
	if (query.matches(el, 'presentation')) {
		return getContent(el);
	}
	if (!noRecurse && el.matches('[aria-labelledby]')) {
		var ids = el.getAttribute('aria-labelledby').split(/\s+/);
		var strings = ids.map(function(id) {
			var label = document.getElementById(id);
			return getName(label, true, true);
		});
		ret = strings.join(' ');
	}
	if (!ret && el.matches('[aria-label]')) {
		ret = el.getAttribute('aria-label');
	}
	if (!ret && el.labels && el.labels.length > 0) {
		ret = getName(el.labels[0], noRecurse);
	}
	if (!ret) {
		ret = el.getAttribute('placeholder');
	}
	// figcaption
	if (!ret && !query.matches(el, 'presentation')) {
		ret = el.getAttribute('alt');
	}
	// caption
	// table
	if (!ret && (noRecurse || allowNameFromContent(el))) {
		ret = getContent(el);
	}
	if (!ret) {
		ret = el.getAttribute('title');
	}
	if (!ret) {
		ret = el.value;
	}

	return (ret || '').trim().replace(/\s+/g, ' ');
};

var getDescription = function(el) {
	var ret = '';

	if (el.matches('[aria-describedby]')) {
		var ids = el.getAttribute('aria-describedby').split(/\s+/);
		var strings = ids.map(function(id) {
			var label = document.getElementById(id);
			return getName(label, true, true);
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
