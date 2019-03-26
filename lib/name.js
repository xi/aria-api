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

var getContent = function(root, referenced, owned) {
	var children = [];

	for (var i = 0; i < root.childNodes.length; i++) {
		var node = root.childNodes[i];
		if (!node.id || !document.querySelector('[aria-owns~="' + node.id + '"]')) {
			children.push(node);
		}
	}

	var owns = query.getAttribute(root, 'owns') || [];
	for (var i = 0; i < owns.length; i++) {
		var child = document.getElementById(owns[i]);
		if (child && child !== root && owned.indexOf(child.id) === -1) {
			children.push(child);
			owned.push(child.id);
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
				ret += getName(node, true, referenced, owned);
			} else {
				ret += ' ' + getName(node, true, referenced, owned) + ' ';
			}
		}
	}

	return ret;
};

var allowNameFromContent = function(el) {
	var role = query.getRole(el);
	return role && constants.nameFromContents.indexOf(role) !== -1;
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

var isInLabelForOtherWidget = function(el) {
	var label = el.closest('label');
	var ownLabels = getLabelNodes(el);
	return label && ownLabels.indexOf(label) === -1;
};

// http://www.ssbbartgroup.com/blog/how-the-w3c-text-alternative-computation-works/
// https://www.w3.org/TR/accname-aam-1.1/#h-mapping_additional_nd_te
var getName = function(el, recursive, referenced, owned) {
	var ret = '';
	var owned = owned || [];

	// A
	if (query.getAttribute(el, 'hidden', referenced)) {
		return '';
	}

	// B
	if (!recursive && el.matches('[aria-labelledby]')) {
		var ids = el.getAttribute('aria-labelledby').split(/\s+/);
		var strings = ids.map(function(id) {
			var label = document.getElementById(id);
			return label ? getName(label, true, label, owned) : '';
		});
		ret = strings.join(' ');
	}

	// C
	if (!ret.trim() && el.matches('[aria-label]')) {
		ret = el.getAttribute('aria-label');
	}

	// FIXME: not mentioned in the spec
	if (!ret.trim() && query.matches(el, 'presentation')) {
		return getContent(el, referenced, owned);
	}

	// D
	if (!ret.trim() && !recursive && isLabelable(el)) {
		var strings = getLabelNodes(el).map(function(label) {
			return getName(label, true, label, owned);
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
					ret = getName(descendant, true, descendant, owned);
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
					ret = getName(selected, recursive, referenced, owned);
				}
			} else if (query.matches(el, 'range')) {
				ret = '' + (query.getAttribute(el, 'valuetext') || query.getAttribute(el, 'valuenow') || el.value);
			}
		}
	}

	// F
	// FIXME: menu is not mentioned in the spec
	if (!ret.trim() && (recursive || allowNameFromContent(el) || el.closest('label')) && !query.matches(el, 'menu')) {
		ret = getContent(el, referenced, owned);
	}

	// TODO: G
	// TODO: H

	// FIXME: not mentioned in the spec
	if (!ret.trim()) {
		for (var selector in constants.nameDefaults) {
			if (el.matches(selector)) {
				ret = constants.nameDefaults[selector];
			}
		}
	}

	// I
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
	var owned = [];

	if (el.matches('[aria-describedby]')) {
		var ids = el.getAttribute('aria-describedby').split(/\s+/);
		var strings = ids.map(function(id) {
			var label = document.getElementById(id);
			return label ? getName(label, true, label, owned) : '';
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
