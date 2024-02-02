describe('wpt', () => {
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
			for (var element of document.querySelectorAll(test.selector)) {
				var name = element.dataset.expectedlabel ?? test.name;
				var description = element.dataset.expecteddescription ?? test.description;
				expect(name ?? description).toNotBe(null);

				if (name !== null) {
					expect(aria.getName(element)).toBe(name);
				}
				if (description !== null) {
					expect(aria.getDescription(element)).toBe(description);
				}
			}
		});
	});
});
