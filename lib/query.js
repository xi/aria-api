import * as attrs from './attrs.js';
import * as atree from './atree.js';

export function matches(el, selector) {
	if (selector.substr(0, 1) === ':') {
		const attr = selector.substr(1);
		return attrs.getAttribute(el, attr);
	} else if (selector.substr(0, 1) === '[') {
		const match = /\[([a-z]+)="(.*)"\]/.exec(selector);
		const actual = attrs.getAttribute(el, match[1]);
		const rawValue = match[2];
		return actual.toString() === rawValue;
	} else {
		return attrs.hasRole(el, selector.split(','));
	}
}

function _querySelector(all) {
	return function(root, selector) {
		const results = [];
		try {
			atree.walk(root, node => {
				if (node.nodeType === node.ELEMENT_NODE) {
					// FIXME: skip hidden elements
					if (matches(node, selector)) {
						results.push(node);
						if (!all) {
							throw 'StopIteration';
						}
					}
				}
			});
		} catch (e) {
			if (e !== 'StopIteration') {
				throw e;
			}
		}
		return all ? results : results[0];
	};
}

export function closest(el, selector) {
	return atree.searchUp(el, candidate => {
		if (candidate.nodeType === candidate.ELEMENT_NODE) {
			return matches(candidate, selector);
		}
	});
}

export const querySelector = _querySelector();
export const querySelectorAll = _querySelector(true);
