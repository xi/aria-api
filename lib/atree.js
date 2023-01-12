var attrs = require('./attrs');

var _getOwner = function(node) {
	if (node.nodeType === node.ELEMENT_NODE && node.id) {
		var owner = document.querySelector('[aria-owns~="' + CSS.escape(node.id) + '"]');
		if (owner) {
			return owner;
		}
	}
};

var _getParentNode = function(node) {
	return _getOwner(node) || node.parentNode;
};

var detectLoop = function(node) {
	var seen = [node]
	while ((node = _getParentNode(node))) {
		if (seen.includes(node)) {
			return true;
		}
		seen.push(node)
	}
};

var getOwner = function(node) {
	var owner = _getOwner(node);
	if (owner && !detectLoop(node)) {
		return owner;
	}
};

var getParentNode = function(node) {
	return getOwner(node) || node.parentNode;
};

var isHidden = function(node) {
	return node.nodeType === node.ELEMENT_NODE && attrs.getAttribute(node, 'hidden');
};

var getChildNodes = function(node) {
	var childNodes = [];

	for (var i = 0; i < node.childNodes.length; i++) {
		var child = node.childNodes[i];
		if (!getOwner(child) && !isHidden(child)) {
			childNodes.push(child);
		}
	}

	if (node.nodeType === node.ELEMENT_NODE) {
		var owns = attrs.getAttribute(node, 'owns') || [];
		for (var i = 0; i < owns.length; i++) {
			var child = document.getElementById(owns[i]);
			// double check with getOwner for consistency
			if (child && getOwner(child) === node && !isHidden(child)) {
				childNodes.push(child);
			}
		}
	}

	return childNodes;
};

var walk = function(root, fn) {
	var queue = [root];
	while (queue.length) {
		var item = queue.shift();
		fn(item);
		queue = getChildNodes(item).concat(queue);
	}
};

var searchUp = function(node, test) {
	var candidate = getParentNode(node);
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
