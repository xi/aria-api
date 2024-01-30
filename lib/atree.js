const attrs = require('./attrs');

const _getOwner = function(node, owners) {
	if (node.nodeType === node.ELEMENT_NODE && node.id) {
		const selector = '[aria-owns~="' + CSS.escape(node.id) + '"]';
		if (owners) {
			for (const owner of owners) {
				if (owner.matches(selector)) {
					return owner;
				}
			}
		} else {
			return document.querySelector(selector);
		}
	}
};

const _getParentNode = function(node, owners) {
	return _getOwner(node, owners) || node.parentNode;
};

const detectLoop = function(node, owners) {
	const seen = [node];
	while ((node = _getParentNode(node, owners))) {
		if (seen.includes(node)) {
			return true;
		}
		seen.push(node);
	}
};

const getOwner = function(node, owners) {
	const owner = _getOwner(node, owners);
	if (owner && !detectLoop(node, owners)) {
		return owner;
	}
};

const getParentNode = function(node, owners) {
	return getOwner(node, owners) || node.parentNode;
};

const isHidden = function(node) {
	return node.nodeType === node.ELEMENT_NODE && attrs.getAttribute(node, 'hidden');
};

const getChildNodes = function(node, owners) {
	const childNodes = [];

	for (let i = 0; i < node.childNodes.length; i++) {
		const child = node.childNodes[i];
		if (!getOwner(child, owners) && !isHidden(child)) {
			childNodes.push(child);
		}
	}

	if (node.nodeType === node.ELEMENT_NODE) {
		const owns = attrs.getAttribute(node, 'owns') || [];
		for (let i = 0; i < owns.length; i++) {
			const child = document.getElementById(owns[i]);
			// double check with getOwner for consistency
			if (child && getOwner(child, owners) === node && !isHidden(child)) {
				childNodes.push(child);
			}
		}
	}

	return childNodes;
};

const walk = function(root, fn) {
	const owners = document.querySelectorAll('[aria-owns]');
	let queue = [root];
	while (queue.length) {
		const item = queue.shift();
		fn(item);
		queue = getChildNodes(item, owners).concat(queue);
	}
};

const searchUp = function(node, test) {
	const candidate = getParentNode(node);
	if (candidate) {
		if (test(candidate)) {
			return candidate;
		} else {
			return searchUp(candidate, test);
		}
	}
};

module.exports = {
	'getParentNode': getParentNode,
	'getChildNodes': getChildNodes,
	'walk': walk,
	'searchUp': searchUp,
};
