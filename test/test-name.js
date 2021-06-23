describe('getName / getDescription', function() {
	var testbed = document.createElement('div');

	before(function() {
		document.body.appendChild(testbed);
	});

	after(function() {
		document.body.removeChild(testbed);
	});

	window.wpt.accname.forEach(function(test) {
		it(test.title, function() {
			testbed.innerHTML = test.html;
			var element = document.querySelector('#test');

			if (test.name !== null) {
				expect(aria.getName(element)).toBe(test.name);
			}
			if (test.description !== null) {
				expect(aria.getDescription(element)).toBe(test.description);
			}
		});
	});

	it('ingores <noscript>', function() {
		testbed.innerHTML = '<a id="test" href="#">test <noscript>moo</noscript></a>';
		var element = document.querySelector('#test');
		expect(aria.getName(element)).toBe('test');
	});
});
