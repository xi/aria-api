var accnameTest = require('accname-test/dist/accname-test');

describe('getName / getDescription', function() {
	Object.keys(accnameTest.files).forEach(function(name) {
		var html = accnameTest.files[name];
		var testbed;
		testbed = document.createElement('div');
		testbed.innerHTML = html;

		describe(name, function() {
			before(function() {
				document.body.appendChild(testbed);
			});

			after(function() {
				document.body.removeChild(testbed);
			});

			accnameTest.getTests(testbed).forEach(function(test) {
				it(test.comment || name, function() {
					if (test.name !== null) {
						expect(aria.getName(test.element), test.name)
					}
					if (test.description !== null) {
						expect(aria.getDescription(test.element), test.description)
					}
				});
			});
		});
	});
});
