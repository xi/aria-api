var constants = require('./constants.js');
var query = require('./query.js');

var getContent = function(node, noRecurse) {
	if (node.nodeType === node.TEXT_NODE) {
		return node.textContent;
	} else if (node.nodeType === node.ELEMENT_NODE) {
		var before = window.getComputedStyle(node, ':before').getPropertyValue('content');
		var after = window.getComputedStyle(node, ':after').getPropertyValue('content');
		// FIXME: infinite recursion
		return before + getName(node, noRecurse) + after;
	}
};

var allowNameFromContent = function(el) {
	var role = query.getRole(el);
	return constants.nameFromContents.indexOf(role) != -1
};

// http://www.ssbbartgroup.com/blog/how-the-w3c-text-alternative-computation-works/
// https://www.w3.org/TR/accname-aam-1.1/#h-mapping_additional_nd_te
var getName = function(el, noRecurse) {
	var ret;

	if (!noRecurse && query.matches(el, ':hidden')) {
		return '';
	}
	if (!noRecurse && el.matches('[aria-labelledby]')) {
		var id = el.getAttribute('aria-labelledby');
		var label = document.getElementById(id);
		ret = getName(label, true);
	}
	if (!ret && el.matches('[aria-label]')) {
		ret = el.getAttribute('aria-label');
	}
	if (!ret && el.label && el.labels.length > 0) {
		ret = getName(el.labels[0]);
	}
	if (!ret) {
		ret = el.placeholder;
	}
	// figcaption
	if (!ret && !query.matches(el, 'presentation')) {
		ret = el.alt;
	}
	// caption
	// table
	if (!ret && (noRecurse || allowNameFromContent(el))) {
		ret = getContent(el, noRecurse);
	}
	if (!ret) {
		ret = el.title;
	}
	if (!ret) {
		ret = el.value;
	}

	return (ret || '').trim().replace(/\s+/g, ' ');
};

var getDescription = function(el) {
	var ret = '';

	if (el.matches('[aria-describedby]')) {
		var id = el.getAttribute('aria-describedby');
		var label = document.getElementById(id);
		ret = getName(label, true);
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
