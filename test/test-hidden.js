describe('getAttribute(el, "hidden")', () => {
	var testbed;

	beforeEach(() => {
		testbed = document.createElement('div');
		// make sure styles are actually computed
		document.body.appendChild(testbed);
	});

	afterEach(() => {
		document.body.removeChild(testbed);
	});

	it('is true on display: none', () => {
		testbed.innerHTML = '<div class="test" style="display: none">test</div>';
		var el = testbed.querySelector('.test');
		expect(aria.getAttribute(el, 'hidden')).toBe(true);
	});

	it('is undefined on display: none on parent', () => {
		testbed.innerHTML = '<div style="display: none"><div class="test">test</div></div>';
		var el = testbed.querySelector('.test');
		expect(aria.getAttribute(el, 'hidden')).toBe(undefined);
	});

	it('is true on visibility: hidden', () => {
		testbed.innerHTML = '<div class="test" style="visibility: hidden">test</div>';
		var el = testbed.querySelector('.test');
		expect(aria.getAttribute(el, 'hidden')).toBe(true);
	});

	it('is true on visibility: hidden on parent', () => {
		testbed.innerHTML = '<div style="visibility: hidden"><div class="test">test</div></div>';
		var el = testbed.querySelector('.test');
		expect(aria.getAttribute(el, 'hidden')).toBe(true);
	});

	it('is undefined on overwritten visibility: hidden on parent', () => {
		testbed.innerHTML = '<div style="visibility: hidden"><div class="test" style="visibility: visible">test</div></div>';
		var el = testbed.querySelector('.test');
		expect(aria.getAttribute(el, 'hidden')).toBe(undefined);
	});

	it('is true on hidden attribute', () => {
		testbed.innerHTML = '<div class="test" hidden>test</div>';
		var el = testbed.querySelector('.test');
		expect(aria.getAttribute(el, 'hidden')).toBe(true);
	});

	it('is undefined on hidden attribute on parent', () => {
		testbed.innerHTML = '<div hidden><div class="test">test</div></div>';
		var el = testbed.querySelector('.test');
		expect(aria.getAttribute(el, 'hidden')).toBe(undefined);
	});

	it('is undefined on visually overwritten hidden attribute', () => {
		testbed.innerHTML = '<div class="test" style="display: block" hidden>test</div>';
		var el = testbed.querySelector('.test');
		expect(aria.getAttribute(el, 'hidden')).toBe(undefined);
	});

	it('is true on children of <details>', () => {
		testbed.innerHTML = '<details><summary>foo</summary><div class="test">test</div></details>';
		var el = testbed.querySelector('.test');
		expect(aria.getAttribute(el, 'hidden')).toBe(true);
	});

	it('is undefined on children of <details open>', () => {
		testbed.innerHTML = '<details open><summary>foo</summary><div class="test">test</div></details>';
		var el = testbed.querySelector('.test');
		expect(aria.getAttribute(el, 'hidden')).toBe(undefined);
	});

	it('is undefined on <summary>', () => {
		testbed.innerHTML = '<details><summary class="test">foo</summary><div>test</div></details>';
		var el = testbed.querySelector('.test');
		expect(aria.getAttribute(el, 'hidden')).toBe(undefined);
	});
});
