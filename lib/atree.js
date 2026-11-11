import * as attrs from './attrs.js';

function _getOwner(node) {
	if (node.nodeType === node.ELEMENT_NODE && node.id) {
		const selector = `[aria-owns~="${CSS.escape(node.id)}"]`;
		return node.getRootNode().querySelector(selector);
	}
}

function _getParentNode(node) {
	return _getOwner(node) || node.parentNode || node.host;
}

function detectLoop(node) {
	const seen = [node];
	while ((node = _getParentNode(node))) {
		if (seen.includes(node)) {
			return true;
		}
		seen.push(node);
	}
}

function getOwner(node) {
	const owner = _getOwner(node);
	if (owner && !detectLoop(node)) {
		return owner;
	}
}

export function getParentNode(node) {
	return getOwner(node) || node.parentNode || node.host;
}

function isHidden(node) {
	return node.nodeType === node.ELEMENT_NODE && attrs.getAttribute(node, 'hidden');
}

export function getChildNodes(node) {
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
}

export function walk(root, fn) {
	let queue = [root];
	while (queue.length) {
		const item = queue.shift();
		fn(item);
		queue = getChildNodes(item).concat(queue);
	}
}

export function searchUp(node, test) {
	const candidate = getParentNode(node);
	if (candidate) {
		if (test(candidate)) {
			return candidate;
		} else {
			return searchUp(candidate, test);
		}
	}
}
