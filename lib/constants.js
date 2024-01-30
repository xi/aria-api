// https://www.w3.org/TR/wai-aria/#state_prop_def
exports.attributes = {
	'activedescendant': 'id',
	'atomic': 'bool',
	'autocomplete': 'token',
	'busy': 'bool',
	'checked': 'tristate',
	'colcount': 'int',
	'colindex': 'int',
	'colspan': 'int',
	'controls': 'id-list',
	'current': 'token',
	'describedby': 'id-list',
	'details': 'id',
	'disabled': 'bool',
	'dropeffect': 'token-list',
	'errormessage': 'id',
	'expanded': 'bool-undefined',
	'flowto': 'id-list',
	'grabbed': 'bool-undefined',
	'haspopup': 'token',
	'hidden': 'bool-undefined',
	'invalid': 'token',
	'keyshortcuts': 'string',
	'label': 'string',
	'labelledby': 'id-list',
	'level': 'int',
	'live': 'token',
	'modal': 'bool',
	'multiline': 'bool',
	'multiselectable': 'bool',
	'orientation': 'token',
	'owns': 'id-list',
	'placeholder': 'string',
	'posinset': 'int',
	'pressed': 'tristate',
	'readonly': 'bool',
	'relevant': 'token-list',
	'required': 'bool',
	'roledescription': 'string',
	'rowcount': 'int',
	'rowindex': 'int',
	'rowspan': 'int',
	'selected': 'bool-undefined',
	'setsize': 'int',
	'sort': 'token',
	'valuemax': 'number',
	'valuemin': 'number',
	'valuenow': 'number',
	'valuetext': 'string',
};

exports.attributeStrongMapping = {
	'disabled': 'disabled',
	'placeholder': 'placeholder',
	'readonly': 'readOnly',
	'required': 'required',
};

exports.attributeWeakMapping = {
	'checked': 'checked',
	'colspan': 'colSpan',
	'expanded': 'open',
	'multiselectable': 'multiple',
	'rowspan': 'rowSpan',
	'selected': 'selected',
};

// https://www.w3.org/TR/html/dom.html#sectioning-content-2
const scoped = ['article *', 'aside *', 'nav *', 'section *'].join(',');

// https://www.w3.org/TR/html-aam-1.0/#html-element-role-mappings
// https://www.w3.org/TR/wai-aria/roles
exports.roles = {
	alert: {
		childRoles: ['alertdialog'],
		defaults: {
			'live': 'assertive',
			'atomic': true,
		},
	},
	article: {
		selectors: ['article'],
	},
	banner: {
		selectors: [`header:not(main *, ${scoped})`],
	},
	blockquote: {
		selectors: ['blockquote'],
	},
	button: {
		selectors: [
			'button',
			'input[type="button"]',
			'input[type="image"]',
			'input[type="reset"]',
			'input[type="submit"]',
			'summary',
		],
		nameFromContents: true,
	},
	caption: {
		selectors: ['caption', 'figcaption'],
	},
	cell: {
		selectors: ['td', 'th:not([scope])'],
		childRoles: ['columnheader', 'gridcell', 'rowheader'],
		nameFromContents: true,
	},
	checkbox: {
		selectors: ['input[type="checkbox"]'],
		childRoles: ['switch'],
		nameFromContents: true,
		defaults: {
			'checked': 'false',
		},
	},
	code: {
		selectors: ['code'],
	},
	columnheader: {
		selectors: ['th[scope="col"]'],
		nameFromContents: true,
	},
	combobox: {
		selectors: [
			'input:not([type])[list]',
			'input[type="email"][list]',
			'input[type="search"][list]',
			'input[type="tel"][list]',
			'input[type="text"][list]',
			'input[type="url"][list]',
			'select:not([size]):not([multiple])',
			'select[size="0"]:not([multiple])',
			'select[size="1"]:not([multiple])',
		],
		defaults: {
			'expanded': false,
			'haspopup': 'listbox',
		},
	},
	command: {
		childRoles: ['button', 'link', 'menuitem'],
	},
	complementary: {
		selectors: [
			`aside:not(${scoped})`,
			'aside[aria-label]',
			'aside[aria-labelledby]',
			'aside[title]',
		],
	},
	composite: {
		childRoles: ['grid', 'select', 'spinbutton', 'tablist'],
	},
	contentinfo: {
		selectors: [`footer:not(main *, ${scoped})`],
	},
	definition: {
		selectors: ['dd'],
	},
	deletion: {
		selectors: ['del', 's'],
	},
	dialog: {
		selectors: ['dialog'],
		childRoles: ['alertdialog'],
	},
	'doc-backlink': {
		nameFromContents: true,
	},
	'doc-biblioref': {
		nameFromContents: true,
	},
	'doc-glossref': {
		nameFromContents: true,
	},
	'doc-noteref': {
		nameFromContents: true,
	},
	'doc-pagebreak': {
		nameFromContents: true,
	},
	'doc-subtitle': {
		nameFromContents: true,
	},
	document: {
		selectors: ['html'],
		childRoles: ['article', 'graphics-document'],
	},
	emphasis: {
		selectors: ['em'],
	},
	figure: {
		selectors: ['figure'],
		childRoles: ['doc-example'],
	},
	form: {
		selectors: ['form[aria-label]', 'form[aria-labelledby]', 'form[title]'],
	},
	generic: {
		// too many selectors to list
	},
	'graphics-document': {
		selectors: ['svg'],
	},
	grid: {
		childRoles: ['treegrid'],
	},
	gridcell: {
		childRoles: ['columnheader', 'rowheader'],
		nameFromContents: true,
	},
	group: {
		selectors: [
			'address',
			'details',
			'fieldset',
			'hgroup',
			'optgroup',
			'text',
		],
		childRoles: ['row', 'select', 'toolbar', 'graphics-object'],
	},
	heading: {
		selectors: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
		nameFromContents: true,
		defaults: {
			'level': 2,
		},
	},
	img: {
		selectors: ['img:not([alt=""])', 'graphics-symbol'],
		childRoles: ['doc-cover'],
	},
	input: {
		childRoles: [
			'checkbox',
			'combobox',
			'option',
			'radio',
			'slider',
			'spinbutton',
			'textbox',
		],
	},
	insertion: {
		selectors: ['ins'],
	},
	landmark: {
		childRoles: [
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
			'region',
			'search',
		],
	},
	link: {
		selectors: ['a[href]', 'area[href]'],
		childRoles: ['doc-backlink', 'doc-biblioref', 'doc-glossref', 'doc-noteref'],
		nameFromContents: true,
	},
	list: {
		selectors: ['dl', 'ol', 'ul', 'menu'],
		childRoles: ['directory', 'feed'],
	},
	listbox: {
		selectors: [
			'datalist',
			'select[multiple]',
			'select[size]:not([size="0"]):not([size="1"])',
		],
		defaults: {
			'orientation': 'vertical',
		},
	},
	listitem: {
		selectors: ['li'],
		childRoles: ['doc-biblioentry', 'doc-endnote', 'treeitem'],
	},
	log: {
		defaults: {
			'live': 'polite',
		},
	},
	main: {
		selectors: ['main'],
	},
	math: {
		selectors: ['math'],
	},
	meter: {
		selectors: ['meter'],
		defaults: {
			'valuemin': 0,
			'valuemax': 100,
		},
	},
	menu: {
		childRoles: ['menubar'],
		defaults: {
			'orientation': 'vertical',
		},
	},
	menubar: {
		defaults: {
			'orientation': 'horizontal',
		},
	},
	menuitem: {
		childRoles: ['menuitemcheckbox'],
		nameFromContents: true,
	},
	menuitemcheckbox: {
		childRoles: ['menuitemradio'],
		nameFromContents: true,
		defaults: {
			'checked': 'false',
		},
	},
	menuitemradio: {
		nameFromContents: true,
		defaults: {
			'checked': 'false',
		},
	},
	navigation: {
		selectors: ['nav'],
		childRoles: ['doc-index', 'doc-pagelist', 'doc-toc'],
	},
	note: {
		childRoles: ['doc-notice', 'doc-tip'],
	},
	option: {
		selectors: ['option'],
		childRoles: ['treeitem'],
		nameFromContents: true,
		defaults: {
			'selected': 'false',
		},
	},
	paragraph: {
		selectors: ['p'],
	},
	presentation: {
		selectors: ['img[alt=""]'],
	},
	progressbar: {
		selectors: ['progress'],
		defaults: {
			'valuemin': 0,
			'valuemax': 100,
		},
	},
	radio: {
		selectors: ['input[type="radio"]'],
		childRoles: ['menuitemradio'],
		nameFromContents: true,
		defaults: {
			'checked': 'false',
		},
	},
	range: {
		childRoles: ['meter', 'progressbar', 'scrollbar', 'slider', 'spinbutton'],
	},
	region: {
		selectors: ['section[aria-label]', 'section[aria-labelledby]', 'section[title]'],
	},
	roletype: {
		childRoles: ['structure', 'widget', 'window'],
	},
	row: {
		selectors: ['tr'],
		nameFromContents: true,
	},
	rowgroup: {
		selectors: ['tbody', 'thead', 'tfoot'],
	},
	rowheader: {
		selectors: ['th[scope="row"]'],
		nameFromContents: true,
	},
	scrollbar: {
		defaults: {
			'orientation': 'vertical',
			'valuemin': 0,
			'valuemax': 100,
		},
	},
	search: {
		selectors: ['search'],
	},
	searchbox: {
		selectors: ['input[type="search"]:not([list])'],
	},
	section: {
		childRoles: [
			'alert',
			'blockquote',
			'caption',
			'cell',
			'code',
			'definition',
			'deletion',
			'doc-abstract',
			'doc-colophon',
			'doc-credit',
			'doc-dedication',
			'doc-epigraph',
			'doc-footnote',
			'doc-pagefooter',
			'doc-pageheader',
			'doc-pullquote',
			'doc-qna',
			'emphasis',
			'figure',
			'group',
			'img',
			'insertion',
			'landmark',
			'list',
			'listitem',
			'log',
			'marquee',
			'math',
			'note',
			'paragraph',
			'status',
			'strong',
			'subscript',
			'superscript',
			'table',
			'tabpanel',
			'term',
			'time',
			'tooltip',
		],
	},
	sectionhead: {
		childRoles: [
			'columnheader',
			'doc-subtitle',
			'heading',
			'rowheader',
			'tab',
		],
		nameFromContents: true,
	},
	select: {
		childRoles: ['listbox', 'menu', 'radiogroup', 'tree'],
	},
	separator: {
		// assume not focussable because <hr> is not
		selectors: ['hr'],
		childRoles: ['doc-pagebreak'],
		defaults: {
			'orientation': 'horizontal',
			'valuemin': 0,
			'valuemax': 100,
		},
	},
	slider: {
		selectors: ['input[type="range"]'],
		defaults: {
			'orientation': 'horizontal',
			'valuemin': 0,
			'valuemax': 100,
			// FIXME: halfway between actual valuemin and valuemax
			'valuenow': 50,
		},
	},
	spinbutton: {
		selectors: ['input[type="number"]'],
		defaults: {
			// FIXME: no valuemin/valuemax/valuenow
		},
	},
	status: {
		selectors: ['output'],
		childRoles: ['timer'],
		defaults: {
			'live': 'polite',
			'atomic': true,
		},
	},
	strong: {
		selectors: ['strong'],
	},
	structure: {
		childRoles: [
			'application',
			'document',
			'none',
			'generic',
			'presentation',
			'range',
			'rowgroup',
			'section',
			'sectionhead',
			'separator',
		],
	},
	subscript: {
		selectors: ['sub'],
	},
	superscript: {
		selectors: ['sup'],
	},
	switch: {
		nameFromContents: true,
		defaults: {
			'checked': false,
		},
	},
	tab: {
		nameFromContents: true,
		defaults: {
			'selected': false,
		},
	},
	table: {
		selectors: ['table'],
		childRoles: ['grid'],
	},
	tablist: {
		defaults: {
			'orientation': 'horizontal',
		},
	},
	term: {
		selectors: ['dfn', 'dt'],
	},
	textbox: {
		selectors: [
			'input:not([type]):not([list])',
			'input[type="email"]:not([list])',
			'input[type="tel"]:not([list])',
			'input[type="text"]:not([list])',
			'input[type="url"]:not([list])',
			'textarea',
		],
		childRoles: ['searchbox'],
	},
	time: {
		selectors: ['time'],
	},
	timer: {
		defaults: {
			'live': 'off',
		},
	},
	toolbar: {
		defaults: {
			'orientation': 'horizontal',
		},
	},
	tooltip: {
		nameFromContents: true,
	},
	tree: {
		childRoles: ['treegrid'],
		defaults: {
			'orientation': 'vertical',
		},
	},
	treeitem: {
		nameFromContents: true,
	},
	widget: {
		childRoles: [
			'command',
			'composite',
			'gridcell',
			'input',
			'progressbar',
			'row',
			'scrollbar',
			'separator',
			'tab',
		],
	},
	window: {
		childRoles: ['dialog'],
	},
};

const getSubRoles = function(role) {
	const children = (exports.roles[role] || {}).childRoles || [];
	const descendents = children.map(getSubRoles);

	const result = [role];

	descendents.forEach(list => {
		list.forEach(r => {
			if (!result.includes(r)) {
				result.push(r);
			}
		});
	});

	return result;
};

exports.attrsWithDefaults = [];

for (const role in exports.roles) {
	exports.roles[role].subRoles = getSubRoles(role);
	for (const key in exports.roles[role].defaults) {
		if (!exports.attrsWithDefaults.includes(key)) {
			exports.attrsWithDefaults.push(key);
		}
	}
}
exports.roles['none'] = exports.roles['none'] || {};
exports.roles['none'].subRoles = ['none', 'presentation'];
exports.roles['presentation'] = exports.roles['presentation'] || {};
exports.roles['presentation'].subRoles = ['presentation', 'none'];

exports.nameFromDescendant = {
	'figure': 'figcaption',
	'table': 'caption',
	'fieldset': 'legend',
};

exports.nameDefaults = {
	'input[type="submit"]': 'Submit',
	'input[type="reset"]': 'Reset',
	'summary': 'Details',
};
