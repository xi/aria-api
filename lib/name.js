import * as constants from './constants.js';
import * as atree from './atree.js';
import * as attrs from './attrs.js';
import * as query from './query.js';

const addSpaces = function(text, el, pseudoSelector) {
	// https://github.com/w3c/accname/issues/3
	const styles = window.getComputedStyle(el, pseudoSelector);
	const inline = styles.display === 'inline';
	return inline ? text : ` ${text} `;
};

const getPseudoContent = function(el, pseudoSelector) {
	const styles = window.getComputedStyle(el, pseudoSelector);
	let tail = styles.getPropertyValue('content').trim();
	let ret = [];

	let match;
	while (tail.length) {
		if ((match = tail.match(/^"([^"]*)"/))) {
			ret.push(match[1]);
		} else if ((match = tail.match(/^([a-z-]+)\(([^)]*)\)/))) {
			if (match[1] === 'attr') {
				ret.push(el.getAttribute(match[2]) || '');
			}
		} else if ((match = tail.match(/^([a-z-]+)/))) {
			if (match[1] === 'open-quote' || match[1] === 'close-quote') {
				ret.push('"');
			}
		} else if ((match = tail.match(/^\//))) {
			ret = [];
		} else {
			// invalid content, ignore
			return '';
		}
		tail = tail.slice(match[0].length).trim();
	}

	return addSpaces(ret.join(''), el, pseudoSelector);
};

const getContent = function(root, ongoingLabelledBy, visited) {
	const children = atree.getChildNodes(root);

	let ret = '';
	for (let i = 0; i < children.length; i++) {
		const node = children[i];
		if (node.nodeType === node.TEXT_NODE) {
			const styles = window.getComputedStyle(node.parentElement);
			if (styles.textTransform === 'uppercase') {
				ret += node.textContent.toUpperCase();
			} else if (styles.textTransform === 'lowercase') {
				ret += node.textContent.toLowerCase();
			} else if (styles.textTransform === 'capitalize') {
				ret += node.textContent.replace(/\b\w/g, c => c.toUpperCase());
			} else {
				ret += node.textContent;
			}
		} else if (node.nodeType === node.ELEMENT_NODE) {
			if (node.tagName.toLowerCase() === 'br') {
				ret += '\n';
			} else {
				ret += getNameRaw(node, true, ongoingLabelledBy, visited);
			}
		}
	}

	return ret;
};

const allowNameFromContent = function(el) {
	const role = attrs.getRole(el);
	if (role) {
		return constants.roles[role].nameFromContents;
	}
};

const getNameRaw = function(el, recursive, ongoingLabelledBy, visited, directReference) {
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
	if (!ongoingLabelledBy && el.matches('[aria-labelledby]')) {
		const ids = el.getAttribute('aria-labelledby').split(/\s+/);
		const strings = ids.map(id => {
			const label = el.getRootNode().getElementById(id);
			return label ? getNameRaw(label, true, true, visited, true) : '';
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
				ret = getNameRaw(selected, recursive, ongoingLabelledBy, visited);
			} else {
				ret = el.value || '';
			}
		} else if (query.matches(el, 'range')) {
			ret = '' + (attrs.getAttribute(el, 'valuetext') || attrs.getAttribute(el, 'valuenow') || el.value);
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
			return getNameRaw(label, true, ongoingLabelledBy, visited);
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
					ret = getNameRaw(descendant, true, ongoingLabelledBy, visited);
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
		ret = getContent(el, ongoingLabelledBy, visited);
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
	if (!ret.trim()) {
		ret = el.title || el.placeholder || '';
	}

	// FIXME: not exactly sure about this, but it reduces the number of failing
	// WPT tests. Whitespace is hard.
	if (!ret.trim()) {
		ret = ' ';
	}

	const before = getPseudoContent(el, ':before');
	const after = getPseudoContent(el, ':after');
	return addSpaces(before + ret + after, el);
};

export const getName = function(el) {
	return getNameRaw(el)
		.replace(/[ \n\r\t\f]+/g, ' ')
		.replace(/^ /, '')
		.replace(/ $/, '');
};

export const getDescription = function(el) {
	let ret = '';

	if (el.matches('[aria-describedby]')) {
		const ids = el.getAttribute('aria-describedby').split(/\s+/);
		const strings = ids.map(id => {
			const label = el.getRootNode().getElementById(id);
			return label ? getNameRaw(label, true, true) : '';
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

	if (ret === getName(el)) {
		ret = '';
	}

	return ret;
};
