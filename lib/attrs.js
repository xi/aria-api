const constants = require('./constants.js');

var unique = function(arr) {
	return arr.filter((a, i) => arr.indexOf(a) === i);
};

var flatten = function(arr) {
	return [].concat.apply([], arr);
};

var normalizeRoles = function(roles, includeAbstract) {
	return unique(roles
		.map(r => constants.aliases[r] || r)
		.filter(r => constants.roles[r])
		.filter(r => includeAbstract || !constants.roles[r].abstract)
	);
};

// candidates can be passed for performance optimization
const getRole = function(el, candidates) {
	// TODO: filter out any invalid roles (e.g. name or context required)
	const roles = normalizeRoles(
		(el.getAttribute('role') || '').toLowerCase().split(/\s+/)
	);

	if (roles.length > 1 && candidates) {
		return [roles, candidates];
	} else if (roles.length) {
		for (const role of roles) {
			if (!candidates || candidates.includes(role)) {
				return role;
			}
		}
	} else {
		for (const role of (candidates || Object.keys(constants.roles))) {
			const r = constants.roles[role];
			if (!r.abstract && r.selectors && el.matches(r.selectors.join(','))) {
				return role;
			}
		}
	}
};

const hasRole = function(el, roles) {
	const subRoles = normalizeRoles(roles, true).map(role => {
		return constants.roles[role].subRoles || [role];
	});
	return !!getRole(el, unique(flatten(subRoles)));
};

const getAttribute = function(el, key) {
	if (constants.attributeStrongMapping.hasOwnProperty(key)) {
		const value = el[constants.attributeStrongMapping[key]];
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
		const style = window.getComputedStyle(el);
		if (style.display === 'none' || style.visibility === 'hidden') {
			return true;
		}
	}

	const type = constants.attributes[key];
	const raw = el.getAttribute('aria-' + key);

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
		for (let i = 1; i <= 6; i++) {
			if (el.tagName.toLowerCase() === 'h' + i) {
				return i;
			}
		}
	} else if (constants.attributeWeakMapping.hasOwnProperty(key)) {
		return el[constants.attributeWeakMapping[key]];
	}

	if (key in constants.attrsWithDefaults) {
		const role = getRole(el);
		const defaults = constants.roles[role].defaults;
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
