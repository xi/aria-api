describe('getName / getDescription', function() {
	var testbed = document.createElement('div');
	var known_failing = [
		'Name test case 660',
		'Name test case 659',
	];

	before(function() {
		document.body.appendChild(testbed);
	});

	after(function() {
		document.body.removeChild(testbed);
	});

	window.wpt.accname.forEach(function(test) {
		var _it = known_failing.includes(test.title) ? xit : it;
		_it(test.title, function() {
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

	it('ignores <img alt="">', function() {
		testbed.innerHTML = '<img id="test" alt="" title="title">'
		var element = document.querySelector('#test');
		expect(aria.getName(element)).toBe('');
	});
});
