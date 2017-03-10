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

// http://www.ssbbartgroup.com/blog/how-the-w3c-text-alternative-computation-works/
var getName = function(el, noRecurse, noContent) {
	var ret = '';

	if (!noRecurse && el.matches('[aria-labelledby]')) {
		var id = el.getAttribute('aria-labelledby');
		var label = document.getElementById(id);
		ret = getName(label, true);
	} else if (el.matches('[aria-label]')) {
		ret = el.getAttribute('aria-label');
	} else if (el.label && el.labels.length > 0) {
		ret = getName(el.labels[0]);
	} else if (el.placeholder) {
		ret = el.placeholder;
	// figcaption
	} else if (el.alt) {
		ret = el.alt;
	// caption
	// table
	} else if (!noContent && el.textContent) {
		// FIXME: should be recursive
		ret = el.textContent;
	} else if (el.title) {
		ret = el.title;
	} else if (el.value) {
		ret = el.value;
	}

	return ret.trim().replace(/\s+/g, ' ');
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
			return a;
		});

		dialog.appendChild(createList(links));
		dialog.showModal();
	}
});
