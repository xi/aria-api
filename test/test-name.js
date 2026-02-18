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

	it('processes shadow roots and slots in the correct order', () => {
		testbed.setHTMLUnsafe(`<h1 id="test">
			<host-element>
				<template shadowrootmode="open">
					Such a <slot></slot> thing!
				</template>
				<span>great</span>
			</host-element>
			</h1>
		`);
		var element = document.querySelector('#test');
		expect(aria.getName(element)).toBe('Such a great thing!');
	});
});
