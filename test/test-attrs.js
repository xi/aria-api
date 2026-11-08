// https://www.w3.org/TR/core-aam-1.1/#mapping_conflicts
// https://w3c.github.io/html-aria/#docconformance

describe('getAttribute()', () => {
	var testbed;

	beforeEach(() => {
		testbed = document.createElement('div');
		// make sure styles are actually computed
		document.body.appendChild(testbed);
	});

	afterEach(() => {
		document.body.removeChild(testbed);
	});

	describe('conflicts', () => {
		['disabled', 'required', 'readonly', 'hidden'].forEach(key => {
			it('should ignore aria-' + key + ' on conflict with ' + key, () => {
				testbed.innerHTML = '<input class="test" ' + key + ' aria-' + key + '="false" />';
				var el = testbed.querySelector('.test');
				expect(aria.getAttribute(el, key)).toBe(true);
			});
		});

		it('should ignore aria-placeholder on conflict with placeholder', () => {
			testbed.innerHTML = '<input class="test" placeholder="native" aria-placeholder="aria" />';
			var el = testbed.querySelector('.test');
			expect(aria.getAttribute(el, 'placeholder')).toBe('native');
		});

		it('should ignore aria-readonly on conflict with contenteditable', () => {
			testbed.innerHTML = '<input class="test" contenteditable aria-readonly="true" />';
			var el = testbed.querySelector('.test');
			expect(aria.getAttribute(el, 'readonly')).toBe(false);
		});

		it('should ignore aria-invalid on conflict', () => {
			testbed.innerHTML = '<input class="test" required aria-invalid="false" />';
			var el = testbed.querySelector('.test');
			expect(aria.getAttribute(el, 'invalid')).toBe(true);
		});
	});

	describe('defaults', () => {
		it('meter valuemin and valuemax', () => {
			testbed.innerHTML = '<meter class="test"></meter>';
			var el = testbed.querySelector('.test');
			expect(aria.getAttribute(el, 'valuemin')).toBe(0);
			expect(aria.getAttribute(el, 'valuemax')).toBe(100);
		});

		it('combobox haspopup', () => {
			testbed.innerHTML = '<div class="test" role="combobox"></div>';
			var el = testbed.querySelector('.test');
			expect(aria.getAttribute(el, 'haspopup')).toBe('listbox');
		});

		it('explicit aria- value overrides the default', () => {
			testbed.innerHTML = '<div class="test" role="combobox" aria-haspopup="dialog"></div>';
			var el = testbed.querySelector('.test');
			expect(aria.getAttribute(el, 'haspopup')).toBe('dialog');
		});
	});
});
