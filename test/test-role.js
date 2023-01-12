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
	'  <form aria-label="some form"></form>\n' +
	'</main>\n' +
	'<aside>complementary</aside>\n' +
	'<div class="wrapper">\n' +
	'  <form>some form</form>\n' +
	'  <footer>contentinfo</footer>\n' +
	'</div>';


describe('query', () => {
	var testbed;

	beforeEach(() => {
		testbed = document.createElement('div');
		// make sure styles are actually computed
		document.body.appendChild(testbed);
	});

	afterEach(() => {
		document.body.removeChild(testbed);
	});

	describe('getRole', () => {
		describe('links', () => {
			it('link', () => {
				testbed.innerHTML = LINK;
				for (var i = 0; i < testbed.children.length; i++) {
					var actual = aria.getRole(testbed.children[i]);
					expect(actual).toBe('link');
				}
			});

			it('nolink', () => {
				testbed.innerHTML = NOLINK;
				for (var i = 0; i < testbed.children.length; i++) {
					var actual = aria.getRole(testbed.children[i]);
					expect(actual).toNotBe('link');
				}
			});
		});

		it('landmarks', () => {
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

	describe('closest', () => {
		it('landmarks', () => {
			testbed.innerHTML = LANDMARKS;
			var el = testbed.querySelector('main header');
			var actual = aria.closest(el, 'landmark');

			expect(actual).toExist();
			expect(actual.tagName.toLowerCase()).toEqual('main');
		});

		it('no match', () => {
			testbed.innerHTML = LANDMARKS;
			var el = testbed.querySelector('main header');
			var actual = aria.closest(el, 'table');

			expect(actual).toNotExist();
		});
	});

	describe('querySelectorAll', () => {
		it('comma-separated roles', () => {
			testbed.innerHTML = LANDMARKS;
			var actual1 = aria.querySelectorAll(testbed, 'banner,main');
			expect(actual1.length).toEqual(2);

			var actual2 = aria.querySelectorAll(testbed, 'banner,main,complementary');
			expect(actual2.length).toEqual(3);
		});

		it('does treat none as alias of presentation', () => {
			testbed.innerHTML = '<a role="presentation"></a><a role="none"></a>';
			var actual = aria.querySelectorAll(testbed, 'presentation');
			expect(actual.length).toEqual(2);
		});

		it('does treat presentation as alias of none', () => {
			testbed.innerHTML = '<a role="presentation"></a><a role="none"></a>';
			var actual = aria.querySelectorAll(testbed, 'none');
			expect(actual.length).toEqual(2);
		});
	});
});
