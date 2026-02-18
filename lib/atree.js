import * as attrs from './attrs';

const _getOwner = function(node) {
	if (node.nodeType === node.ELEMENT_NODE && node.id) {
		const selector = `[aria-owns~="${CSS.escape(node.id)}"]`;
		return node.getRootNode().querySelector(selector);
	}
};

const _getParentNode = function(node) {
	return _getOwner(node) || node.parentNode || node.host;
};

const detectLoop = function(node) {
	const seen = [node];
	while ((node = _getParentNode(node))) {
		if (seen.includes(node)) {
			return true;
		}
		seen.push(node);
	}
};

const getOwner = function(node) {
	const owner = _getOwner(node);
	if (owner && !detectLoop(node)) {
		return owner;
	}
};

export const getParentNode = function(node) {
	return getOwner(node) || node.parentNode || node.host;
};

const isHidden = function(node) {
	return node.nodeType === node.ELEMENT_NODE && attrs.getAttribute(node, 'hidden');
};

export const getChildNodes = function(node) {
	const childNodes = [];
	let rawChildNodes = [];

	if (node.shadowRoot) {
		rawChildNodes = node.shadowRoot.childNodes;
	} else if (node.assignedNodes) {
		rawChildNodes = node.assignedNodes();
	} else {
		rawChildNodes = node.childNodes;
	}

	for (let i = 0; i < rawChildNodes.length; i++) {
		const child = rawChildNodes[i];
		if (!getOwner(child) && !isHidden(child)) {
			childNodes.push(child);
		}
	}

	if (node.nodeType === node.ELEMENT_NODE) {
		const owns = attrs.getAttribute(node, 'owns') || [];
		for (let i = 0; i < owns.length; i++) {
			const child = node.getRootNode().getElementById(owns[i]);
			// double check with getOwner for consistency
			if (child && getOwner(child) === node && !isHidden(child)) {
				childNodes.push(child);
			}
		}
	}

	return childNodes;
};

export const walk = function(root, fn) {
	let queue = [root];
	while (queue.length) {
		const item = queue.shift();
		fn(item);
		queue = getChildNodes(item).concat(queue);
	}
};

export const searchUp = function(node, test) {
	const candidate = getParentNode(node);
	if (candidate) {
		if (test(candidate)) {
			return candidate;
		} else {
			return searchUp(candidate, test);
		}
	}
};
