var attrs = require('./attrs');

var _getOwner = function(node, owners) {
	if (node.nodeType === node.ELEMENT_NODE && node.id) {
		var selector = '[aria-owns~="' + CSS.escape(node.id) + '"]';
		if (owners) {
			for (var owner of owners) {
				if (owner.matches(selector)) {
					return owner;
				}
			}
		} else {
			return document.querySelector(selector);
		}
	}
};

var _getParentNode = function(node, owners) {
	return _getOwner(node, owners) || node.parentNode;
};

var detectLoop = function(node, owners) {
	var seen = [node];
	while ((node = _getParentNode(node, owners))) {
		if (seen.includes(node)) {
			return true;
		}
		seen.push(node);
	}
};

var getOwner = function(node, owners) {
	var owner = _getOwner(node, owners);
	if (owner && !detectLoop(node, owners)) {
		return owner;
	}
};

var getParentNode = function(node, owners) {
	return getOwner(node, owners) || node.parentNode;
};

var isHidden = function(node) {
	return node.nodeType === node.ELEMENT_NODE && attrs.getAttribute(node, 'hidden');
};

var getChildNodes = function(node, owners) {
	var childNodes = [];

	for (var i = 0; i < node.childNodes.length; i++) {
		var child = node.childNodes[i];
		if (!getOwner(child, owners) && !isHidden(child)) {
			childNodes.push(child);
		}
	}

	if (node.nodeType === node.ELEMENT_NODE) {
		var owns = attrs.getAttribute(node, 'owns') || [];
		for (var i = 0; i < owns.length; i++) {
			var child = document.getElementById(owns[i]);
			// double check with getOwner for consistency
			if (child && getOwner(child, owners) === node && !isHidden(child)) {
				childNodes.push(child);
			}
		}
	}

	return childNodes;
};

var walk = function(root, fn) {
	var owners = document.querySelectorAll('[aria-owns]');
	var queue = [root];
	while (queue.length) {
		var item = queue.shift();
		fn(item);
		queue = getChildNodes(item, owners).concat(queue);
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
