// https://www.w3.org/TR/wai-aria/#state_prop_def
export const attributes = {
	'activedescendant': 'id',
	'atomic': 'bool',
	'autocomplete': 'token',
	'braillelabel': 'string',
	'brailleroledescription': 'string',
	'busy': 'bool',
	'checked': 'tristate',
	'colcount': 'int',
	'colindex': 'int',
	'colindextext': 'string',
	'colspan': 'int',
	'controls': 'id-list',
	'current': 'token',
	'describedby': 'id-list',
	'description': 'string',
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
	'rowindextext': 'string',
	'rowspan': 'int',
	'selected': 'bool-undefined',
	'setsize': 'int',
	'sort': 'token',
	'valuemax': 'number',
	'valuemin': 'number',
	'valuenow': 'number',
	'valuetext': 'string',
};

export const attributeStrongMapping = {
	'disabled': 'disabled',
	'placeholder': 'placeholder',
	'readonly': 'readOnly',
	'required': 'required',
};

export const attributeWeakMapping = {
	'checked': 'checked',
	'colspan': 'colSpan',
	'expanded': 'open',
	'multiselectable': 'multiple',
	'rowspan': 'rowSpan',
	'selected': 'selected',
};

// https://www.w3.org/TR/html/dom.html#sectioning-content-2
const scoped = ['article *', 'aside *', 'nav *', 'section *'].join(',');

const svgSelectors = function(selector) {
	return [
		// `${selector}:has(> title:not(:empty))`,
		// `${selector}:has(> desc:not(:empty))`,
		`${selector}[aria-label]`,
		`${selector}[aria-roledescription]`,
		`${selector}[aria-labelledby]`,
		`${selector}[aria-describedby]`,
		`${selector}[tabindex]`,
		`${selector}[role]`,
	];
};

// https://www.w3.org/TR/html-aam-1.0/#html-element-role-mappings
// https://www.w3.org/TR/wai-aria/roles
export const roles = {
	alert: {
		childRoles: ['alertdialog'],
		defaults: {
			'live': 'assertive',
			'atomic': true,
		},
	},
	alertdialog: {},
	application: {},
	article: {
		selectors: ['article'],
		childRoles: ['comment'],
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
		selectors: ['td', 'td ~ th:not([scope])'],
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
		abstract: true,
		childRoles: ['button', 'link', 'menuitem'],
	},
	comment: {
		nameFromContents: true,
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
		abstract: true,
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
	'doc-abstract': {},
	'doc-acknowledgments': {},
	'doc-afterword': {},
	'doc-appendix': {},
	'doc-backlink': {
		nameFromContents: true,
	},
	'doc-biblioentry': {},
	'doc-bibliography': {},
	'doc-biblioref': {
		nameFromContents: true,
	},
	'doc-chapter': {},
	'doc-colophon': {},
	'doc-conclusion': {},
	'doc-cover': {},
	'doc-credit': {},
	'doc-credits': {},
	'doc-dedication': {},
	'doc-endnote': {},
	'doc-endnotes': {},
	'doc-epilogue': {},
	'doc-epigraph': {},
	'doc-errata': {},
	'doc-example': {},
	'doc-footnote': {},
	'doc-foreword': {},
	'doc-glossary': {},
	'doc-glossref': {
		nameFromContents: true,
	},
	'doc-index': {},
	'doc-introduction': {},
	'doc-noteref': {
		nameFromContents: true,
	},
	'doc-notice': {},
	'doc-pagebreak': {
		nameFromContents: true,
	},
	'doc-pagefooter': {},
	'doc-pageheader': {},
	'doc-pagelist': {},
	'doc-part': {},
	'doc-preface': {},
	'doc-prologue': {},
	'doc-pullquote': {},
	'doc-qna': {},
	'doc-subtitle': {
		nameFromContents: true,
	},
	'doc-tip': {},
	'doc-toc': {},
	document: {
		selectors: ['html'],
		childRoles: ['article', 'graphics-document'],
	},
	emphasis: {
		selectors: ['em'],
	},
	feed: {},
	figure: {
		selectors: ['figure'],
		childRoles: ['doc-example'],
	},
	form: {
		selectors: ['form[aria-label]', 'form[aria-labelledby]', 'form[title]'],
	},
	generic: {
		selectors: [
			'a:not([*|href])',
			'area:not([*|href])',
			`aside:not(${scoped}):not([aria-label]):not([aria-labelledby]):not([title])`,
			'b',
			'bdi',
			'bdo',
			'body',
			'data',
			'div',
			// footer scoped
			// header scoped
			'i',
			'li:not(ul > li):not(ol > li)',
			'pre',
			'q',
			'samp',
			'section:not([aria-label]):not([aria-labelledby]):not([title])',
			'small',
			'span',
			'u',
		],
	},
	'graphics-document': {
		selectors: ['svg'],
	},
	'graphics-object': {
		selectors: [
			...svgSelectors('symbol'),
			...svgSelectors('use'),
		],
	},
	'graphics-symbol': {
		selectors: [
			...svgSelectors('circle'),
			...svgSelectors('ellipse'),
			...svgSelectors('line'),
			...svgSelectors('path'),
			...svgSelectors('polygon'),
			...svgSelectors('polyline'),
			...svgSelectors('rect'),
		],
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
			...svgSelectors('foreignObject'),
			...svgSelectors('g'),
			'text',
			...svgSelectors('textPath'),
			...svgSelectors('tspan'),
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
	image: {
		selectors: [
			'img:not([alt=""])',
			'graphics-symbol',
			...svgSelectors('image'),
			...svgSelectors('mesh'),
		],
		childRoles: ['doc-cover'],
	},
	input: {
		abstract: true,
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
		abstract: true,
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
		selectors: ['a[*|href]', 'area[*|href]'],
		childRoles: ['doc-backlink', 'doc-biblioref', 'doc-glossref', 'doc-noteref'],
		nameFromContents: true,
	},
	list: {
		selectors: ['dl', 'ol', 'ul', 'menu'],
		childRoles: ['feed'],
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
		selectors: ['ol > li', 'ul > li'],
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
	mark: {
		selectors: ['mark'],
	},
	marquee: {},
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
		childRoles: ['menuitemcheckbox', 'menuitemradio'],
		nameFromContents: true,
	},
	menuitemcheckbox: {
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
	none: {
		selectors: ['img[alt=""]'],
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
	radiogroup: {},
	range: {
		abstract: true,
		childRoles: ['meter', 'progressbar', 'scrollbar', 'slider', 'spinbutton'],
	},
	region: {
		selectors: ['section[aria-label]', 'section[aria-labelledby]', 'section[title]'],
	},
	roletype: {
		abstract: true,
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
		selectors: ['th[scope="row"]', 'th:not([scope]):not(td ~ th)'],
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
		abstract: true,
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
			'image',
			'insertion',
			'landmark',
			'list',
			'listitem',
			'log',
			'mark',
			'marquee',
			'math',
			'note',
			'paragraph',
			'status',
			'strong',
			'subscript',
			'suggestion',
			'superscript',
			'table',
			'tabpanel',
			'term',
			'time',
			'tooltip',
		],
	},
	sectionhead: {
		abstract: true,
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
		abstract: true,
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
		abstract: true,
		childRoles: [
			'application',
			'document',
			'none',
			'generic',
			'range',
			'rowgroup',
			'section',
			'sectionhead',
			'separator',
		],
	},
	suggestion: {},
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
	tabpanel: {},
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
	treegrid: {},
	treeitem: {
		nameFromContents: true,
	},
	widget: {
		abstract: true,
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
		abstract: true,
		childRoles: ['dialog'],
	},
};

const getSubRoles = function(role) {
	const children = (roles[role]).childRoles || [];
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

export const attrsWithDefaults = [];

for (const role in roles) {
	roles[role].subRoles = getSubRoles(role);
	for (const key in roles[role].defaults) {
		if (!attrsWithDefaults.includes(key)) {
			attrsWithDefaults.push(key);
		}
	}
}

export const aliases = {
	'presentation': 'none',
	'directory': 'list',
	'img': 'image',
};

export const nameFromDescendant = {
	'figure': 'figcaption',
	'table': 'caption',
	'fieldset': 'legend',
};

export const nameDefaults = {
	'input[type="submit"]': 'Submit',
	'input[type="reset"]': 'Reset',
	'summary': 'Details',
};
