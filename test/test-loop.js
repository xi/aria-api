describe('detectLoop()', () => {
	var testbed;

	beforeEach(() => {
		testbed = document.createElement('div');
		// make sure styles are actually computed
		document.body.appendChild(testbed);
	});

	afterEach(() => {
		document.body.removeChild(testbed);
	});

	it('detects loops', () => {
		testbed.innerHTML = '<span id="a"><a id="test" href="#" aria-owns="b">test</a><a href="#" aria-owns="a"></a></span><span id="b"><a href="#" aria-owns="a"></a></span>';
		var element = document.querySelector('#test');
		expect(aria.getName(element)).toBe('test');
	});
});
