const attrs = require('./attrs.js');
const atree = require('./atree.js');


const matches = function(el, selector) {
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
};

const _querySelector = function(all) {
	return function(root, role) {
		const results = [];
		try {
			atree.walk(root, node => {
				if (node.nodeType === node.ELEMENT_NODE) {
					// FIXME: skip hidden elements
					if (matches(node, role)) {
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
};

const closest = function(el, selector) {
	return atree.searchUp(el, candidate => {
		if (candidate.nodeType === candidate.ELEMENT_NODE) {
			return matches(candidate, selector);
		}
	});
};

module.exports = {
	getRole: el => attrs.getRole(el),
	getAttribute: attrs.getAttribute,
	matches: matches,
	querySelector: _querySelector(),
	querySelectorAll: _querySelector(true),
	closest: closest,
};
