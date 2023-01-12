var constants = require('./constants.js');

// candidates can be passed for performance optimization
var getRole = function(el, candidates) {
	if (el.hasAttribute('role')) {
		var role = el.getAttribute('role');
		if (!candidates || candidates.includes(role)) {
			return role;
		} else {
			return;
		}
	}
	var roles = candidates ? candidates : Object.keys(constants.roles);
	for (var role of roles) {
		var r = constants.roles[role];
		if (r) {
			var selector = (r.selectors || []).join(',');
			if (selector && el.matches(selector)) {
				return role;
			}
		}
	}
};

var hasRole = function(el, roles) {
	var candidates = [].concat.apply([], roles.map(role => {
		return (constants.roles[role] || {}).subRoles || [role];
	}));
	return !!getRole(el, candidates);
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
		// workaround for chromium
		if (el.matches('noscript')) {
			return true;
		}
		if (el.matches('details:not([open]) > :not(summary)')) {
			return true;
		}
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
			return parseInt(raw, 10);
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

	if (key in constants.attrsWithDefaults) {
		var role = getRole(el);
		var defaults = (constants.roles[role] || {}).defaults;
		if (defaults && defaults.hasOwnProperty(key)) {
			return defaults[key];
		}
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
