/* global describe, it, xit, before, after, expect, aria */

expect.extend({
	toBeIn(list) {
		expect.assert(list.includes(this.actual), 'expected %s to be in %s', this.actual, list);
		return this;
	},
});

describe('wpt', () => {
	var testbed = document.createElement('div');
	var known_failing = [
		// whitespace
		'Name test case 659',
		'Name test case 660',
		'span[role=button] with text/element/text nodes, no space',
		'div[role=heading] with text/element/text nodes, no space',
		'button with text/element/text nodes, no space',
		'heading with text/element/text nodes, no space',
		'link with text/element/text nodes, no space',

		// incomplete selectors for columnheader
		'el-th',

		// name required
		'fallback role w/ region with no label',
		'form without label',
		'region without label',

		// role conflicts
		'focusable heading role none with tabindex=-1',
		'focusable heading role none with tabindex=0',
		'heading role none with global attr aria-label',
		'p role none with global attr aria-label (prohibited role)',

		// required parents
		'orphan p with listitem role',
		'orphan div with listitem role',
		'orphan button with tab role',
		'orphan span with tab role',
		'orphaned treeitem outside the context of tree',
		'orphaned button with treeitem role outside tree context',
		'orphaned option outside the context of listbox',
		'orphaned button with gridcell role outside the context of row',
		'orphaned row outside the context of table',
		'orphaned rowgroup outside the context of row',
		'orphaned div with gridcell role outside the context of row',
		'orphaned rowheader outside the context of row',
		'orphaned columnheader outside the context of row',
		'orphaned menuitem outside the context of menu/menubar',
		'orphaned menuitemradio outside the context of menu/menubar',
		'orphaned menuitemcheckbox outside the context of menu/menubar',
		'orphan button with menuitem role',
		'orphan button with menuitemcheckbox role',
		'orphan button with menuitemradio role',
		'orphan div with menuitem role',
		'orphan div with menuitemcheckbox role',
		'orphan div with menuitemradio role',

		// browsers do not support attr() in content fallback
		'button name from fallback content mixing attr() and strings with ::before and ::after',
		'heading name from fallback content mixing attr() and strings with ::before and ::after',
		'link name from fallback content mixing attr() and strings with ::before and ::after',

		// visibility
		'heading with name from content, containing element that is visibility:hidden with nested content that is visibility:visible',
		'button with aria-labelledby using visibility:hidden span (with nested span)',
		'button with aria-labelledby using visibility:hidden span (with nested spans, depth 2)',
		'button with aria-labelledby using visibility:hidden hidden span (with nested sibling spans)',
		'button with aria-labelledby using visibility:collapse span (with nested span)',
		'button with aria-labelledby using visibility:collapse span (with nested spans, depth 2)',
		'button with aria-labelledby using visibility:collapse span (with nested sibling spans)',

		// weird combobox
		'checkbox label with embedded combobox (span)',
		'checkbox label with embedded combobox (div)',

		// hidden not directly referenced
		'button\'s hidden referenced name (display:none) supercedes aria-label',
		'button\'s hidden referenced name (visibility:hidden) supercedes aria-label',

		'Name from content of labelledby element',
		'Name from content',
		'Name link-mixed-content',
		'Description from content of describedby element',
		'Name from content of label',
		'Hidden button\'s label should be the empty string',
	];

	var withId = function(element, fn) {
		if (element.id) {
			fn();
		} else {
			element.id = 'subtest';
			fn();
			element.removeAttribute('id');
		}
	};

	var extractTests = function(data) {
		var tests = [];
		document.body.appendChild(testbed);
		testbed.innerHTML = data.html;
		for (var element of testbed.querySelectorAll(data.selector)) {
			withId(element, () => {
				tests.push({
					'filename': data.filename,
					'title': element.dataset.testname || data.title,
					'html': testbed.innerHTML,
					'name': element.dataset.expectedlabel,
					'description': element.dataset.expecteddescription,
					'role': element.dataset.expectedrole ?? data.role,
					'selector': `#${element.id}`,
				});
			});
		}
		testbed.remove();
		return tests;
	};

	var registerTest = function(test) {
		var _it = known_failing.includes(test.title) ? xit : it;
		_it(test.title, () => {
			testbed.innerHTML = test.html;
			expect(test.name != null || test.description != null || test.role != null).toBe(true);
			var element = testbed.querySelector(test.selector);

			if (test.name != null) {
				expect(aria.getName(element)).toBe(test.name);
			}
			if (test.description != null) {
				expect(aria.getDescription(element)).toBe(test.description);
			}
			if (test.role != null) {
				if (test.role === 'generic') {
					expect(aria.getRole(element)).toBeIn(['generic', 'none', undefined]);
				} else {
					expect(aria.getRole(element)).toBe(test.role);
				}
			}
		});
	};

	before(() => {
		document.body.appendChild(testbed);
	});

	after(() => {
		testbed.remove();
	});

	for (const key in window.wpt) {
		describe(key, () => {
			window.wpt[key].forEach(test => {
				if (test.selector.startsWith('#')) {
					registerTest(test);
				} else {
					describe(test.title, () => {
						extractTests(test).forEach(registerTest);
					});
				}
			});
		});
	}
});
