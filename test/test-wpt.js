/* global describe, it, xit, before, after, expect, aria */

describe('wpt', () => {
	var testbed = document.createElement('div');
	var known_failing = [
		// whitespace
		'Name test case 660',
		'Name test case 659',

		'el-form',  // <form> should always have the role form, but only be exposed as a landmark if it also has a name
		'el-th',  // incomplete selectors for columnheader

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
		'orphaned columnheader outside the context of row',
		'orphaned rowheader outside the context of row',
		'orphaned gridcell outside the context of row',
		'orphaned option outside the context of listbox',

		// complicated generic selectors
		'el-aside-in-section-without-name',
		'el-footer',
		'el-header',

		// ARIA 1.3
		'image role == computedrole image',
		'synonym img role == computedrole image',
		'el-img',
		'el-mark',
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
				expect(aria.getRole(element)).toBe(test.role);
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
