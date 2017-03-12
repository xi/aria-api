describe('getRole', function() {
	var testbed;

	var setupTestbed = function(file) {
		return fetch('role/' + file)
		.then(response => response.text())
		.then(html => {
			testbed.innerHTML = html;
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

	describe('links', function() {
		it('link', function() {
			return setupTestbed('link.html').then(function() {
				for (var i = 0; i < testbed.children.length; i++) {
					var actual = aria.getRole(testbed.children[i]);
					expect(actual).toBe('link');
				}
			});
		});

		it('nolink', function() {
			return setupTestbed('nolink.html').then(function() {
				for (var i = 0; i < testbed.children.length; i++) {
					var actual = aria.getRole(testbed.children[i]);
					expect(actual).toNotBe('link');
				}
			});
		});
	});
});
