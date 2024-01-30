const constants = require('./constants.js');
const atree = require('./atree.js');
const query = require('./query.js');

const getPseudoContent = function(node, selector) {
	const styles = window.getComputedStyle(node, selector);
	const ret = styles.getPropertyValue('content');
	const inline = styles.display.substr(0, 6) === 'inline';
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

const getContent = function(root, visited) {
	const children = atree.getChildNodes(root);

	let ret = '';
	for (let i = 0; i < children.length; i++) {
		const node = children[i];
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

const allowNameFromContent = function(el) {
	const role = query.getRole(el);
	return (constants.roles[role] || {}).nameFromContents;
};

const getName = function(el, recursive, visited, directReference) {
	let ret = '';

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
		const ids = el.getAttribute('aria-labelledby').split(/\s+/);
		const strings = ids.map(id => {
			const label = document.getElementById(id);
			return label ? getName(label, true, visited, true) : '';
		});
		ret = strings.join(' ');
	}

	// E (the current draft has this at this high priority)
	if (!ret.trim() && recursive) {
		if (query.matches(el, 'textbox,button')) {
			ret = el.value || el.textContent;
		} else if (query.matches(el, 'combobox,listbox')) {
			const selected = query.querySelector(el, ':selected') || query.querySelector(el, 'option');
			if (selected) {
				ret = getName(selected, recursive, visited);
			} else {
				ret = el.value || '';
			}
		} else if (query.matches(el, 'range')) {
			ret = '' + (query.getAttribute(el, 'valuetext') || query.getAttribute(el, 'valuenow') || el.value);
		}
	}

	// C
	if (!ret.trim() && el.matches('[aria-label]')) {
		// FIXME: may skip to 2E
		ret = el.getAttribute('aria-label');
	}

	// D
	if (!ret.trim() && !recursive && el.labels) {
		const strings = Array.prototype.map.call(el.labels, label => {
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
		for (const selector in constants.nameFromDescendant) {
			if (el.matches(selector)) {
				const descendant = el.querySelector(constants.nameFromDescendant[selector]);
				if (descendant) {
					ret = getName(descendant, true, visited);
				}
			}
		}
	}
	if (!ret.trim() && el.matches('svg *')) {
		const svgTitle = el.querySelector('title');
		if (svgTitle && svgTitle.parentElement === el) {
			ret = svgTitle.textContent;
		}
	}

	// F
	// FIXME: menu is not mentioned in the spec
	if (!ret.trim() && (recursive || allowNameFromContent(el) || el.closest('label')) && !query.matches(el, 'menu')) {
		ret = getContent(el, visited);
	}

	if (!ret.trim() && query.matches(el, 'button')) {
		ret = el.value || '';
	}

	if (!ret.trim()) {
		for (const selector in constants.nameDefaults) {
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

	const before = getPseudoContent(el, ':before');
	const after = getPseudoContent(el, ':after');
	return before + ret + after;
};

const getNameTrimmed = function(el) {
	return getName(el).replace(/\s+/g, ' ').trim();
};

const getDescription = function(el) {
	let ret = '';

	if (el.matches('[aria-describedby]')) {
		const ids = el.getAttribute('aria-describedby').split(/\s+/);
		const strings = ids.map(id => {
			const label = document.getElementById(id);
			return label ? getName(label, true) : '';
		});
		ret = strings.join(' ');
	} else if (el.matches('[aria-description]')) {
		ret = el.getAttribute('aria-description');
	} else if (el.matches('svg *')) {
		const svgDesc = el.querySelector('desc');
		if (svgDesc && svgDesc.parentElement === el) {
			ret = svgDesc.textContent;
		}
	} else if (el.title) {
		ret = el.title;
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
