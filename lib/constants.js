exports.attributes = {
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
exports.extraSelectors = {
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
	form: ['form[aria-label]', 'form[aria-labelledby]'],
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

	// if scope is missing, it is calculated automatically
	rowheader: ['th[scope="row"]'],
	columnheader: ['th[scope="col"]'],
};

exports.scoped = [
	'article *', 'aside *', 'main *', 'nav *', 'section *',
].join(',');

// https://www.w3.org/TR/wai-aria/roles
var subRoles = {
	command: ['button', 'link', 'menuitem'],
	composite: ['grid', 'select', 'tablist'],
	img: ['doc-cover'],
	input: ['checkbox', 'option', 'select', 'spinbutton', 'textbox'],
	landmark: [
		'application',
		'banner',
		'complementary',
		'contentinfo',
		'doc-acknowledgments',
		'doc-afterword',
		'doc-appendix',
		'doc-bibliography',
		'doc-chapter',
		'doc-conclusion',
		'doc-credits',
		'doc-endnotes',
		'doc-epilogue',
		'doc-errata',
		'doc-foreword',
		'doc-glossary',
		'doc-introduction',
		'doc-part',
		'doc-preface',
		'doc-prologue',
		'form',
		'main',
		'navigation',
		'search',
	],
	range: ['progressbar', 'spinbutton'],
	roletype: ['structure', 'widget', 'window'],
	section: [
		'definition',
		'doc-abstract',
		'doc-colophon',
		'doc-credit',
		'doc-dedication',
		'doc-epigraph',
		'doc-example',
		'doc-footnote',
		'doc-qna',
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
	sectionhead: [
		'columnheader',
		'doc-subtitle',
		'heading',
		'rowheader',
		'tab',
	],
	select: ['combobox', 'listbox', 'menu', 'radiogroup', 'tree'],
	separator: ['doc-pagebreak'],
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
	link: ['doc-backlink', 'doc-biblioref', 'doc-glossref', 'doc-noteref'],
	list: ['directory', 'listbox', 'menu'],
	listitem: ['doc-biblioentry', 'doc-endnote', 'treeitem'],
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
	navigation: ['doc-index', 'doc-pagelist', 'doc-toc'],
	note: ['doc-notice', 'doc-tip'],
};

var getSubRoles = function(role) {
	var children = subRoles[role] || [];
	var descendents = children.map(getSubRoles);

	var result = [role];

	descendents.forEach(function(list) {
		list.forEach(function(r) {
			if (result.indexOf(r) === -1) {
				result.push(r);
			}
		});
	});

	return result;
};

exports.subRoles = {};
for (var role in subRoles) {
	exports.subRoles[role] = getSubRoles(role);
}

exports.nameFromContents = [
	'button',
	'checkbox',
	'columnheader',
	'directory',
	'doc-backlink',
	'doc-biblioref',
	'doc-glossref',
	'doc-noteref',
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

exports.labelable = [
	'button',
	'input:not([type="hidden"])',
	'keygen',
	'meter',
	'output',
	'progress',
	'select',
	'textarea',
];
