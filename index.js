var query = require('./lib/query.js');
var name = require('./lib/name.js');
var atree = require('./lib/atree.js');

module.exports = {
	getRole: query.getRole,
	getAttribute: query.getAttribute,
	getName: name.getName,
	getDescription: name.getDescription,

	matches: query.matches,
	querySelector: query.querySelector,
	querySelectorAll: query.querySelectorAll,
	closest: query.closest,

	getParentNode: atree.getParentNode,
	getChildNodes: atree.getChildNodes,
};
