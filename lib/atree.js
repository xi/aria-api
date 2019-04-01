var attrs = require('./attrs');

var _getOwner = function(node) {
	if (node.nodeType === node.ELEMENT_NODE && node.id) {
		var owner = document.querySelector('[aria-owns~="' + node.id + '"]');
		if (owner) {
			return owner;
		}
	}
};

var _getParentNode = function(node) {
	return _getOwner(node) || node.parentNode;
};

var detectLoop = function(node) {
	var tmp = _getParentNode(node);
	while (tmp) {
		if (tmp === node) {
			return true;
		}
		tmp = _getParentNode(tmp);
	}
};

var getOwner = function(node) {
	if (node.nodeType === node.ELEMENT_NODE && node.id) {
		var owner = document.querySelector('[aria-owns~="' + node.id + '"]');
		if (owner && !detectLoop(node)) {
			return owner;
		}
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

	var owns = attrs.getAttribute(node, 'owns') || [];
	for (var i = 0; i < owns.length; i++) {
		var child = document.getElementById(owns[i]);
		// double check with getOwner for consistency
		if (child && getOwner(child) === node && !isHidden(child)) {
			childNodes.push(child);
		}
	}

	return childNodes;
};

module.exports = {
	'getParentNode': getParentNode,
	'getChildNodes': getChildNodes,
};
