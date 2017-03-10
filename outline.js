var roles = {
	abstract: [
		'command',
		'composite',
		'input',
		'landmark',
		'range',
		'roletype',
		'section',
		'sectionhead',
		'select',
		'structure',
		'widget',
		'window',
	],
	widget: {
		standalone: [
			'alert',
			'alertdialog',
			'button',
			'checkbox',
			'dialog',
			'gridcell',
			'link',
			'log',
			'marquee',
			'menuitem',
			'menuitemcheckbox',
			'menuitemradio',
			'option',
			'progressbar',
			'radio',
			'scrollbar',
			'slider',
			'spinbutton',
			'status',
			'tab',
			'tabpanel',
			'textbox',
			'timer',
			'tooltip',
			'treeitem',
		],
		composite: [
			'combobox',
			'grid',
			'listbox',
			'menu',
			'menubar',
			'radiogroup',
			'tablist',
			'tree',
			'treegrid',
		],
	},
	structure: [
		'article',
		'columnheader',
		'definition',
		'directory',
		'document',
		'group',
		'heading',
		'img',
		'list',
		'listitem',
		'math',
		'note',
		'presentation',
		'region',
		'row',
		'rowgroup',
		'rowheader',
		'separator',
		'toolbar',
	],
	landmark: [
		'application',
		'banner',
		'complementary',
		'contentinfo',
		'form',
		'main',
		'navigation',
		'search',
	],
};

var attributes = {
	// widget
	'autocomplete': 'token',
	'checked': 'tristate',
	'disabled': 'bool',
	'expanded': 'bool-undefined',
	'haspopup': 'bool',
	'hidden': 'bool',  // !
	'invalid': 'token',
	'label': 'string',
	'level': 'int',
	'multiline': 'bool',
	'multiselectable': 'bool',
	'orientation': 'token',
	'pressed': 'tristate',
	'readonly': 'bool',
	'required': 'bool',
	'selected': 'bool-undefined',
	'sort': 'token',
	'valuemax': 'number',
	'valuemin': 'number',
	'valuenow': 'number',
	'valuetext': 'string',

	// live
	'atomic': 'bool',
	'busy': 'bool',
	'live': 'token',
	'relevant': 'token-list',

	// dragndrop
	'dropeffect': 'token-list',
	'grabbed': 'bool-undefined',

	// relationship
	'activedescendant': 'id',
	'controls': 'id-list',
	'describedby': 'id-list',
	'flowto': 'id-list',
	'labelledby': 'id-list',
	'owns': 'id-list',
	'posinset': 'int',
	'setsize': 'int',
};

// https://www.w3.org/TR/html-aria/#docconformance
var extraSelectors = {
	article: ['article'],
	button: [
		'button',
		'input[type="button"]',
		'input[type="image"]',
		'input[type="reset"]',
		'input[type="submit"]',
		'summary',
	],
	cell: ['td'],
	checkbox: ['input[type="checkbox"]'],
	combobox: [
		'input[type="email"][list]',
		'input[type="search"][list]',
		'input[type="tel"][list]',
		'input[type="text"][list]',
		'input[type="url"][list]',
	],
	complementary: ['aside'],
	definition: ['dd'],
	dialog: ['dialog'],
	document: ['body'],
	figure: ['figure'],
	form: ['form'],
	group: ['details', 'optgroup'],
	heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
	img: ['img:not([alt=""])'],
	link: ['a[href]', 'area[href]', 'link[href]'],
	listbox: ['datalist', 'select'],
	list: ['dl', 'ol', 'ul'],
	listitem: ['ul > li', 'ol > li'],
	main: ['main'],
	math: ['math'],
	menuitemcheckbox: ['menuitem[type="checkbox"]'],
	menuitem: ['menuitem[type="command"]'],
	menuitemradio: ['menuitem[type="radio"]'],
	menu: ['menu[type="context"]'],
	navigation: ['nav'],
	option: ['option'],
	progressbar: ['progress'],
	radio: ['input[type="radio"]'],
	region: ['section'],
	rowgroup: ['tbody', 'thead', 'tfoot'],
	row: ['tr'],
	searchbox: ['input[type="search"]:not([list])'],
	separator: ['hr'],
	slider: ['input[type="range"]'],
	spinbutton: ['input[type="number"]'],
	status: ['output'],
	table: ['table'],
	textbox: [
		'input[type="email"]:not([list])',
		'input[type="tel"]:not([list])',
		'input[type="text"]:not([list])',
		'input[type="url"]:not([list])',
		'textarea',
	],

	// `body >` is not correct
	banner: ['body > header'],
	contentinfo: ['body > footer'],

	// if scope is missing, it is calculated automatically
	rowheader: ['th[scope="row"]'],
	columnheader: ['th[scope="col"]'],
};

// https://www.w3.org/TR/wai-aria/roles
var subRoles = {
	command: ['button', 'link', 'menuitem'],
	composite: ['grid', 'select', 'tablist'],
	input: ['checkbox', 'option', 'select', 'spinbutton', 'textbox'],
	landmark: [
		'application',
		'banner',
		'complementary',
		'contentinfo',
		'form',
		'main',
		'navigation',
		'search',
	],
	range: ['progressbar', 'spinbutton'],
	roletype: ['structure', 'widget', 'window'],
	section: [
		'definition',
		'gridcell',
		'group',
		'img',
		'listitem',
		'marquee',
		'math',
		'note',
		'region',
		'tooltip',
	],
	sectionhead: ['columnheader', 'heading', 'rowheader', 'tab'],
	select: ['combobox', 'listbox', 'menu', 'radiogroup', 'tree'],
	structure: [
		'document',
		'presentation',
		'section',
		'sectionhead',
		'separator',
	],
	widget: [
		'columnheader',
		'command',
		'composite',
		'gridcell',
		'input',
		'range',
		'row',
		'rowheader',
		'tab',
	],
	window: ['dialog'],
	alert: ['alertdialog'],
	checkbox: ['menuitemcheckbox'],
	dialog: ['alertdialog'],
	gridcell: ['columnheader', 'rowheader'],
	menuitem: ['menuitemcheckbox'],
	menuitemcheckbox: ['menuitemradio'],
	option: ['treeitem'],
	radio: ['menuitemradio'],
	status: ['timer'],
	grid: ['treegrid'],
	menu: ['menubar'],
	tree: ['treegrid'],
	directory: ['tablist'],
	document: ['article'],
	group: ['row', 'rowgroup', 'select', 'toolbar'],
	list: ['directory', 'listbox', 'menu'],
	listitem: ['treeitem'],
	region: [
		'alert',
		'article',
		'grid',
		'landmark',
		'list',
		'log',
		'status',
		'tabpanel',
	],
};

var nameFromContents = [
	'button',
	'checkbox',
	'columnheader',
	'directory',
	'gridcell',
	'heading',
	'link',
	'listitem',
	'menuitem',
	'menuitemcheckbox',
	'menuitemradio',
	'option',
	'radio',
	'row',
	'rowgroup',
	'rowheader',
	'section',
	'sectionhead',
	'tab',
	'tooltip',
	'treeitem',
];

var getSubRoles = function(role) {
	var children = subRoles[role] || [];
	var descendents = children.map(getSubRoles);

	var result = [role];

	children.forEach(function(r) {
		if (result.indexOf(r) == -1) {
			result.push(r);
		}
	});
	descendents.forEach(function(list) {
		list.forEach(function(r) {
			if (result.indexOf(r) == -1) {
				result.push(r);
			}
		});
	});

	return result;
};

var getRole = function(el) {
	if (el.hasAttribute('role')) {
		return el.getAttribute('role');
	}
	for (var role in extraSelectors) {
		var selector = extraSelectors[role].join(',');
		if (el.matches(selector)) {
			return role;
		}
	}
	// FIXME: handle special cases;
};

var getAttribute = function(el, key) {
	var type = attributes[key];
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

	if (key === 'level') {
		for (var i = 1; i <= 6; i++) {
			if (el.tagName === 'H' + i) {
				return i;
			}
		}
	} else if (key === 'disabled') {
		return el.disabled;
	} else if (key === 'placeholder') {
		return el.placeholder;
	} else if (key === 'required') {
		return el.required;
	} else if (key === 'readonly') {
		return el.readonly;
	} else if (key === 'hidden') {
		var style = window.getComputedStyle(el);
		return el.hidden || style.display === 'none' || style.visibility === 'hidden';
	} else if (key === 'invalid' && el.checkValidity) {
		return el.checkValidity();
	}

	if (type === 'bool' || type === 'tristate') {
		return false;
	}
};

var walkDOM = function(root, fn) {
	if (fn(root) === false) {
		return false;
	}
	var node = root.firstChild;
	while (node) {
		if (walkDOM(node, fn) === false) {
			return false;
		}
		node = node.nextSibling;
	}
};

var matches = function(el, role) {
	var actual = getRole(el);
	var candidates = getSubRoles(role);
	return candidates.indexOf(actual) != -1;
};

var _querySelector = function(all) {
	return function(root, role) {
		var results = [];
		walkDOM(root, function(node) {
			if (node.nodeType === node.ELEMENT_NODE) {
				// FIXME: skip hidden elements
				if (matches(node, role)) {
					results.push(node);
					if (!all) {
						return false;
					}
				}
			}
		});
		return all ? results : results[0];
	};
};

var querySelector = _querySelector();
var querySelectorAll = _querySelector(true);

var getContent = function(node, noRecurse) {
	if (node.nodeType === node.TEXT_NODE) {
		return node.textContent;
	} else if (node.nodeType === node.ELEMENT_NODE) {
		var before = window.getComputedStyle($0, ':before').getPropertyValue('content');
		var after = window.getComputedStyle($0, ':after').getPropertyValue('content');
		return before + getName(node, noRecurse) + after;
	}
};

// http://www.ssbbartgroup.com/blog/how-the-w3c-text-alternative-computation-works/
// https://www.w3.org/TR/accname-aam-1.1/#h-mapping_additional_nd_te
var getName = function(el, noRecurse) {
	var ret;

	if (!noRecurse && matches(el, ':hidden')) {
		return '';
	}
	if (!noRecurse && el.matches('[aria-labelledby]')) {
		var id = el.getAttribute('aria-labelledby');
		var label = document.getElementById(id);
		ret = getName(label, true);
	}
	if (!ret && el.matches('[aria-label]')) {
		ret = el.getAttribute('aria-label');
	}
	if (!ret && el.label && el.labels.length > 0) {
		ret = getName(el.labels[0]);
	}
	if (!ret) {
		ret = el.placeholder;
	}
	// figcaption
	if (!ret && !matches(el, 'presentation')) {
		ret = el.alt;
	}
	// caption
	// table
	if (!ret && (noRecurse || nameFromContents.indexOf(getRole(el)) != -1)) {
		ret = getContent(el, noRecurse);
	}
	if (!ret) {
		ret = el.title;
	}
	if (!ret) {
		ret = el.value;
	}

	return (ret || '').trim().replace(/\s+/g, ' ');
};

var getDescription = function(el) {
	var ret = '';

	if (el.matches('[aria-describedby]')) {
		var id = el.getAttribute('aria-describedby');
		var label = document.getElementById(id);
		ret = getName(label, true);
	} else if (el.title) {
		ret = el.title;
	} else if (el.placeholder) {
		ret = el.placeholder;
	}

	return ret;
};

var createDialog = function() {
	var dialog = document.createElement('dialog');
	dialog.addEventListener('close', function() {
		dialog.parentNode.removeChild(dialog);
	});
	document.body.appendChild(dialog);
	return dialog;
};

var createList = function(items) {
	var ul = document.createElement('ul');
	Array.prototype.forEach.call(items, function(item) {
		var li = document.createElement('li');
		li.appendChild(item);
		ul.appendChild(li);
	});
	return ul;
};

var truncate = function(s, length) {
	if (s.length > length) {
		return s.substr(0, length - 1) + '…';
	} else {
		return s;
	}
}

document.addEventListener('keyup', function(event) {
	if (event.ctrlKey && !event.altKey && event.key == 'm') {
		var dialog = createDialog();

		var landmarks = querySelectorAll(document, 'landmark');
		var links = Array.prototype.map.call(landmarks, function(el) {
			var a = document.createElement('a');
			a.href = '#';
			a.addEventListener('click', function(event) {
				event.preventDefault();
				dialog.close();
				el.tabIndex = -1;
				el.focus();
			});
			a.textContent = getRole(el);

			var name = getName(el, null, true);
			var description = getDescription(el);
			if (name) {
				a.textContent += ' (' + truncate(name, 10) + ')';
			}
			if (description && description != name) {
				a.title = description;
			}
			return a;
		});

		dialog.appendChild(createList(links));
		dialog.showModal();
	}
});
