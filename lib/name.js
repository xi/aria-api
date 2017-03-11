var constants = require('./constants.js');
var query = require('./query.js');

var getContent = function(root, noRecurse) {
	var s = window.getComputedStyle(root, ':before').getPropertyValue('content');
	var node = root.firstChild;
	while (node) {
		if (node.nodeType === node.TEXT_NODE) {
			s += node.textContent;
		} else if (node.nodeType === node.ELEMENT_NODE) {
			s += getName(node, noRecurse);
		}
		node = node.nextSibling;
	}
	s += window.getComputedStyle(root, ':after').getPropertyValue('content');
	return s;
};

var allowNameFromContent = function(el) {
	var role = query.getRole(el);
	return !role || constants.nameFromContents.indexOf(role) != -1;
};

// http://www.ssbbartgroup.com/blog/how-the-w3c-text-alternative-computation-works/
// https://www.w3.org/TR/accname-aam-1.1/#h-mapping_additional_nd_te
var getName = function(el, noRecurse) {
	var ret;

	if (!noRecurse && query.matches(el, ':hidden')) {
		return '';
	}
	if (query.matches(el, 'presentation')) {
		return getContent(el, noRecurse);
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
		ret = el.getAttribute('placeholder');
	}
	// figcaption
	if (!ret && !query.matches(el, 'presentation')) {
		ret = el.getAttribute('alt');
	}
	// caption
	// table
	if (!ret && (noRecurse || allowNameFromContent(el))) {
		ret = getContent(el, noRecurse);
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
