const constants = require('./constants.js');
const atree = require('./atree.js');
const query = require('./query.js');

const getPseudoContent = function(el, pseudoSelector) {
	const styles = window.getComputedStyle(el, pseudoSelector);
	const inline = styles.display.startsWith('inline');
	let tail = styles.getPropertyValue('content').trim();
	let ret = [];

	let match;
	while (tail.length) {
		if (match = tail.match(/^"([^"]*)"/)) {
			ret.push(match[1]);
		} else if (match = tail.match(/^([a-z-]+)\(([^)]*)\)/)) {
			if (match[1] === 'attr') {
				ret.push(el.getAttribute(match[2]) || '');
			}
		} else if (match = tail.match(/^([a-z-]+)/)) {
			if (match[1] === 'open-quote' || match[1] === 'close-quote') {
				ret.push('"');
			}
		} else if (match = tail.match(/^\//)) {
			ret = [];
		} else {
			// invalid content, ignore
			return '';
		}
		tail = tail.slice(match[0].length).trim();
	}

	return inline ? ret.join('') : ` ${ret.join('')} `;
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
	if (role) {
		return constants.roles[role].nameFromContents;
	}
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
		if (query.matches(el, 'textbox')) {
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
	if (!ret.trim() && el.matches('a')) {
		ret = el.getAttribute('xlink:title') || '';
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
		ret = el.title || el.placeholder || '';
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
	return getName(el)
		.replace(/[ \n\r\t\f]+/g, ' ')
		.replace(/^ /, '')
		.replace(/ $/, '');
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
	if (!ret.trim() && el.matches('a')) {
		ret = el.getAttribute('xlink:title') || '';
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
