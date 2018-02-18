var accnameTest = require('accname-test/dist/accname-test');

describe('getName / getDescription', function() {
	Object.keys(accnameTest.files).forEach(function(name) {
		var testbed = document.createElement('div');
		testbed.innerHTML = accnameTest.files[name];

		before(function() {
			document.body.appendChild(testbed);
		});

		after(function() {
			document.body.removeChild(testbed);
		});

		describe(name, function() {
			accnameTest.getTests(testbed).forEach(function(test) {
				it(test.comment || name, function() {
					if (test.name !== null) {
						expect(aria.getName(test.element)).toBe(test.name)
					}
					if (test.description !== null) {
						expect(aria.getDescription(test.element)).toBe(test.description)
					}
				});
			});
		});
	});
});
