describe('getName / getDescription', () => {
	var testbed = document.createElement('div');
	var known_failing = [
		'Name test case 660',
		'Name test case 659',
	];

	before(() => {
		document.body.appendChild(testbed);
	});

	after(() => {
		document.body.removeChild(testbed);
	});

	window.wpt.accname.forEach(test => {
		var _it = known_failing.includes(test.title) ? xit : it;
		_it(test.title, () => {
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

	it('ingores <noscript>', () => {
		testbed.innerHTML = '<a id="test" href="#">test <noscript>moo</noscript></a>';
		var element = document.querySelector('#test');
		expect(aria.getName(element)).toBe('test');
	});

	it('ignores <img alt="">', () => {
		testbed.innerHTML = '<img id="test" alt="" title="title">'
		var element = document.querySelector('#test');
		expect(aria.getName(element)).toBe('');
	});
});
