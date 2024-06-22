describe('getName / getDescription', () => {
	var testbed = document.createElement('div');

	before(() => {
		document.body.appendChild(testbed);
	});

	after(() => {
		document.body.removeChild(testbed);
	});

	it('ignores <noscript>', () => {
		testbed.innerHTML = '<a id="test" href="#">test <noscript>moo</noscript></a>';
		var element = document.querySelector('#test');
		expect(aria.getName(element)).toBe('test');
	});
});
