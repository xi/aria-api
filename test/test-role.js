var LINK = '<a href="//example.com">click me</a>\n' +
	'<span role="link">click me</span>';

var NOLINK = '<a>click me not</a>\n' +
	'<a href="//example.com" role="button">click me not</a>';

var LANDMARKS = '<header>banner</header>\n' +
	'<main>\n' +
	'  <article>\n' +
	'    <header>article header</header>\n' +
	'    article\n' +
	'  </article>\n' +
	'  <form>some form</form>\n' +
	'</main>\n' +
	'<aside>complementary</aside>\n' +
	'<div class="wrapper">\n' +
	'  <footer>contentinfo</footer>\n' +
	'</div>';


describe('query', function() {
	var testbed;

	var setupTestbed = function(file) {
		return fetch('role/' + file)
		.then(function(response) {
			return response.text();
		}).then(function(html) {
			testbed.innerHTML = html;
		});
	};

	beforeEach(function() {
		testbed = document.createElement('div');
		// make sure styles are actually computed
		document.body.appendChild(testbed);
	});

	afterEach(function() {
		testbed.remove();
	});

	describe('getRole', function() {
		describe('links', function() {
			it('link', function() {
				testbed.innerHTML = LINK;
				for (var i = 0; i < testbed.children.length; i++) {
					var actual = aria.getRole(testbed.children[i]);
					expect(actual).toBe('link');
				}
			});

			it('nolink', function() {
				testbed.innerHTML = NOLINK;
				for (var i = 0; i < testbed.children.length; i++) {
					var actual = aria.getRole(testbed.children[i]);
					expect(actual).toNotBe('link');
				}
			});
		});

		it('landmarks', function() {
			testbed.innerHTML = LANDMARKS;
			var actual = aria.querySelectorAll(testbed, 'landmark').map(aria.getRole);
			expect(actual).toEqual([
				'banner',
				'main',
				'form',
				'complementary',
				'contentinfo',
			]);
		});
	});
});
