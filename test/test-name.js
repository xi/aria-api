// https://github.com/accdc/w3c-alternative-text-computation
describe('w3c-alternative-text-computation', function() {
	var testbed;

	var testName = function(name, description, file) {
		return fetch('name/' + file)
		.then(response => response.text())
		.then(html => {
			testbed.innerHTML = html;

			expect(aria.getName(testbed.firstChild)).toBe(name);
			expect(aria.getDescription(testbed.firstChild)).toBe(description);
		});
	};

	beforeEach(function() {
		testbed = document.createElement('div');
		// make sure styles are actually computed
		document.body.appendChild(testbed);
	});

	afterEach(function() {
		document.body.removeChild(testbed);
	});

	it('focusable role=link', function() {
		return testName('My name is Garaventa the weird. (QED) Where are my marbles?', '', 'focusable-role-link.html');
	});

	it('form field with aria-labelledby', function() {
		return testName('My name is Garaventa the weird. (QED) Where are my marbles?', '', 'form-field-with-aria-labelledby.html');
	});

	it('form field with label element', function() {
		return testName('My name is Garaventa the weird. (QED) Where are my marbles?', '', 'form-field-with-label-element.html');
	});

	it('form field with aria-describedby', function() {
		return testName('Important stuff', 'My name is Garaventa the weird. (QED) Where are my marbles?', 'form-field-with-aria-describedby.html');
	});

	it('form field with aria-describedby + hidden', function() {
		return testName('Important stuff', 'My name is Garaventa the weird. (QED) Where are my marbles?', 'form-field-with-aria-describedby-hidden.html');
	});
});
