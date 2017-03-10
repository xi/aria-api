var query = require('./lib/query.js');
var name = require('./lib/name.js');

module.exports = {
	getRole: query.getRole,
	getAttribute: query.getAttribute,
	matches: query.matches,
	querySelector: query.querySelector,
	querySelectorAll: query.querySelectorAll,
	getName: name.getName,
	getDescription: name.getDescription,
}
