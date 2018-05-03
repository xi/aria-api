// https://www.w3.org/TR/core-aam-1.1/#mapping_conflicts<Paste>
// https://w3c.github.io/html-aria/#docconformance

describe('getAttribute()', function() {
	var testbed;

	beforeEach(function() {
		testbed = document.createElement('div');
		// make sure styles are actually computed
		document.body.appendChild(testbed);
	});

	afterEach(function() {
		document.body.removeChild(testbed);
	});

	['disabled', 'required', 'readonly', 'hidden'].forEach(function(key) {
		it('should ignore aria-' + key + ' on conflict with ' + key, function() {
			testbed.innerHTML = '<input class="test" ' + key + ' aria-' + key + '="false" />';
			var el = testbed.querySelector('.test');
			expect(aria.getAttribute(el, key)).toBe(true);
		});
	});

	it('should ignore aria-placeholder on conflict with placeholder', function() {
		testbed.innerHTML = '<input class="test" placeholder="native" aria-placeholder="aria" />';
		var el = testbed.querySelector('.test');
		expect(aria.getAttribute(el, 'placeholder')).toBe('native');
	});

	it('should ignore aria-readonly on conflict with contenteditable', function() {
		testbed.innerHTML = '<input class="test" contenteditable aria-readonly="true" />';
		var el = testbed.querySelector('.test');
		expect(aria.getAttribute(el, 'readonly')).toBe(false);
	});

	it('should ignore aria-invalid on conflict', function() {
		testbed.innerHTML = '<input class="test" required aria-invalid="false" />';
		var el = testbed.querySelector('.test');
		expect(aria.getAttribute(el, 'invalid')).toBe(true);
	});
});
