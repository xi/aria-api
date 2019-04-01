var constants = require('./constants.js');

// candidates can be passed for performance optimization
var getRole = function(el, candidates) {
	if (el.hasAttribute('role')) {
		return el.getAttribute('role');
	}
	for (var role in constants.extraSelectors) {
		var selector = constants.extraSelectors[role].join(',');
		if ((!candidates || candidates.indexOf(role) !== -1) && el.matches(selector)) {
			return role;
		}
	}

	if (!candidates ||
			candidates.indexOf('banner') !== -1 ||
			candidates.indexOf('contentinfo') !== -1) {
		var scoped = el.matches(constants.scoped);

		if (el.matches('header') && !scoped) {
			return 'banner';
		}
		if (el.matches('footer') && !scoped) {
			return 'contentinfo';
		}
	}
};

var hasRole = function(el, roles) {
	var candidates = [].concat.apply([], roles.map(function(role) {
		return constants.subRoles[role] || [role];
	}));
	actual = getRole(el, candidates);
	return candidates.indexOf(actual) !== -1;
};

var getAttribute = function(el, key) {
	if (constants.attributeStrongMapping.hasOwnProperty(key)) {
		var value = el[constants.attributeStrongMapping[key]];
		if (value) {
			return value;
		}
	}
	if (key === 'readonly' && el.contentEditable) {
		return false;
	} else if (key === 'invalid' && el.checkValidity) {
		return !el.checkValidity();
	} else if (key === 'hidden') {
		var style = window.getComputedStyle(el);
		if (style.display === 'none' || style.visibility === 'hidden') {
			return true;
		}
	}

	var type = constants.attributes[key];
	var raw = el.getAttribute('aria-' + key);

	if (raw) {
		if (type === 'bool') {
			return raw === 'true';
		} else if (type === 'tristate') {
			return raw === 'true' ? true : raw === 'false' ? false : 'mixed';
		} else if (type === 'bool-undefined') {
			return raw === 'true' ? true : raw === 'false' ? false : undefined;
		} else if (type === 'id-list') {
			return raw.split(/\s+/);
		} else if (type === 'integer') {
			return parseInt(raw);
		} else if (type === 'number') {
			return parseFloat(raw);
		} else if (type === 'token-list') {
			return raw.split(/\s+/);
		} else {
			return raw;
		}
	}

	// TODO
	// autocomplete
	// contextmenu -> aria-haspopup
	// indeterminate -> aria-checked="mixed"
	// list -> aria-controls

	if (key === 'level') {
		for (var i = 1; i <= 6; i++) {
			if (el.tagName.toLowerCase() === 'h' + i) {
				return i;
			}
		}
	} else if (constants.attributeWeakMapping.hasOwnProperty(key)) {
		return el[constants.attributeWeakMapping[key]];
	}

	if (type === 'bool' || type === 'tristate') {
		return false;
	}
};

module.exports = {
	getRole: getRole,
	hasRole: hasRole,
	getAttribute: getAttribute,
};
