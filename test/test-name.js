var FOCUSABLE_ROLE_LINK = '<div id="lblId" role="link" tabindex="0">\n' +
	'<!-- Comment text -->\n' +
	'<span aria-hidden="true"><i> Hello, </i></span>\n' +
	'<span>My</span> name is\n' +
	'<div>\n' +
	'<img src="file.jpg" title="Bryan" alt="" role="presentation">\n' +
	'</div>\n' +
	'<span role="presentation" aria-label="Eli"><span aria-label="Garaventa">Zambino</span></span>\n' +
	'<span>the weird.</span>\n' +
	'(<span>Q</span><span>E</span><span>D</span>)\n' +
	'<span style="display: none"><i><b>and don\'t you forget it.</b></i></span>\n' +
	'<table><tbody><tr>\n' +
	'<td>\n' +
	'Where\n' +
	'</td>\n' +
	'<td style="visibility:hidden;">\n' +
	'<div>\n' +
	'in\n' +
	'</div>\n' +
	'</td>\n' +
	'<td>\n' +
	'<div style="display:none;">\n' +
	'the world\n' +
	'</div>\n' +
	'</td>\n' +
	'<td>\n' +
	'are my marbles?\n' +
	'</td>\n' +
	'</tr></tbody></table>\n' +
	'</div>';

FORM_FIELD_WITH_ARIA_LABELLEDBY = '<input id="focusableElId" type="text" aria-labelledby="lblId">\n' +
	'\n' +
	'<div id="lblId">\n' +
	'<!-- Comment text -->\n' +
	'<span aria-hidden="true"><i> Hello, </i></span>\n' +
	'<span>My</span> name is\n' +
	'<div>\n' +
	'<img src="file.jpg" title="Bryan" alt="" role="presentation">\n' +
	'</div>\n' +
	'<span role="presentation" aria-label="Eli"><span aria-label="Garaventa">Zambino</span></span>\n' +
	'<span>the weird.</span>\n' +
	'(<span>Q</span><span>E</span><span>D</span>)\n' +
	'<span style="display: none"><i><b>and don\'t you forget it.</b></i></span>\n' +
	'<table><tbody><tr>\n' +
	'<td>\n' +
	'Where\n' +
	'</td>\n' +
	'<td style="visibility:hidden;">\n' +
	'<div>\n' +
	'in\n' +
	'</div>\n' +
	'</td>\n' +
	'<td>\n' +
	'<div style="display:none;">\n' +
	'the world\n' +
	'</div>\n' +
	'</td>\n' +
	'<td>\n' +
	'are my marbles?\n' +
	'</td>\n' +
	'</tr></tbody></table>\n' +
	'</div>';

var FORM_FIELD_WITH_LABEL_ELEMENT = '<input type="text" id="formId">\n' +
	'\n' +
	'<label for="formId">\n' +
	'<!-- Comment text -->\n' +
	'<span aria-hidden="true"><i> Hello, </i></span>\n' +
	'<span>My</span> name is\n' +
	'<div>\n' +
	'<img src="file.jpg" title="Bryan" alt="" role="presentation">\n' +
	'</div>\n' +
	'<span role="presentation" aria-label="Eli"><span aria-label="Garaventa">Zambino</span></span>\n' +
	'<span>the weird.</span>\n' +
	'(<span>Q</span><span>E</span><span>D</span>)\n' +
	'<span style="display: none"><i><b>and don\'t you forget it.</b></i></span>\n' +
	'<table><tbody><tr>\n' +
	'<td>\n' +
	'Where\n' +
	'</td>\n' +
	'<td style="visibility:hidden;">\n' +
	'<div>\n' +
	'in\n' +
	'</div>\n' +
	'</td>\n' +
	'<td>\n' +
	'<div style="display:none;">\n' +
	'the world\n' +
	'</div>\n' +
	'</td>\n' +
	'<td>\n' +
	'are my marbles?\n' +
	'</td>\n' +
	'</tr></tbody></table>\n' +
	'</label>';

var FORM_FIELD_WITH_ARIA_DESCRIBEDBY = '<input id="focusableElId" type="text" aria-label="Important stuff" aria-describedby="descId">\n' +
	'\n' +
	'<div>\n' +
	'<div id="descId">\n' +
	'<!-- Comment text -->\n' +
	'<span aria-hidden="true"><i> Hello, </i></span>\n' +
	'<span>My</span> name is\n' +
	'<div>\n' +
	'<img src="file.jpg" title="Bryan" alt="" role="presentation">\n' +
	'</div>\n' +
	'<span role="presentation" aria-label="Eli"><span aria-label="Garaventa">Zambino</span></span>\n' +
	'<span>the weird.</span>\n' +
	'(<span>Q</span><span>E</span><span>D</span>)\n' +
	'<span style="display: none"><i><b>and don\'t you forget it.</b></i></span>\n' +
	'<table><tbody><tr>\n' +
	'<td>\n' +
	'Where\n' +
	'</td>\n' +
	'<td style="visibility:hidden;">\n' +
	'<div>\n' +
	'in\n' +
	'</div>\n' +
	'</td>\n' +
	'<td>\n' +
	'<div style="display:none;">\n' +
	'the world\n' +
	'</div>\n' +
	'</td>\n' +
	'<td>\n' +
	'are my marbles?\n' +
	'</td>\n' +
	'</tr></tbody></table>\n' +
	'</div>\n' +
	'</div>';

var FORM_FIELD_WITH_ARIA_DESCRIBEDBY_HIDDEN = '<input id="focusableElId" type="text" aria-labelledby="lbl1 lbl2" aria-describedby="descId">\n' +
	'<span>\n' +
	'<span aria-hidden="true" id="lbl1">Important</span>\n' +
	'<span style="display: none">\n' +
	'<span aria-hidden="true" id="lbl2">stuff</span>\n' +
	'</span>\n' +
	'</span>\n' +
	'</div>\n' +
	'\n' +
	'<div style="display: none">\n' +
	'<div id="descId">\n' +
	'<!-- Comment text -->\n' +
	'<span aria-hidden="true"><i> Hello, </i></span>\n' +
	'<span>My</span> name is\n' +
	'<div>\n' +
	'<img src="file.jpg" title="Bryan" alt="" role="presentation">\n' +
	'</div>\n' +
	'<span role="presentation" aria-label="Eli"><span aria-label="Garaventa">Zambino</span></span>\n' +
	'<span>the weird.</span>\n' +
	'(<span>Q</span><span>E</span><span>D</span>)\n' +
	'<span style="display: none"><i><b>and don\'t you forget it.</b></i></span>\n' +
	'<table><tbody><tr>\n' +
	'<td>\n' +
	'Where\n' +
	'</td>\n' +
	'<td style="visibility:hidden;">\n' +
	'<div>\n' +
	'in\n' +
	'</div>\n' +
	'</td>\n' +
	'<td>\n' +
	'<div style="display:none;">\n' +
	'the world\n' +
	'</div>\n' +
	'</td>\n' +
	'<td>\n' +
	'are my marbles?\n' +
	'</td>\n' +
	'</tr></tbody></table>\n' +
	'</div>';


describe('getName / getDescription', function() {
	var testbed;

	beforeEach(function() {
		testbed = document.createElement('div');
		// make sure styles are actually computed
		document.body.appendChild(testbed);
	});

	afterEach(function() {
		document.body.removeChild(testbed);
	});

	// https://github.com/accdc/w3c-alternative-text-computation
	describe('w3c-alternative-text-computation', function() {
		it('focusable role=link', function() {
			testbed.innerHTML = FOCUSABLE_ROLE_LINK;
			expect(aria.getName(testbed.firstChild)).toBe('My name is Garaventa the weird. (QED) Where are my marbles?');
			expect(aria.getDescription(testbed.firstChild)).toBe('');
		});

		it('form field with aria-labelledby', function() {
			testbed.innerHTML = FORM_FIELD_WITH_ARIA_LABELLEDBY;
			expect(aria.getName(testbed.firstChild)).toBe('My name is Garaventa the weird. (QED) Where are my marbles?');
			expect(aria.getDescription(testbed.firstChild)).toBe('');
		});

		it('form field with label element', function() {
			testbed.innerHTML = FORM_FIELD_WITH_LABEL_ELEMENT;
			expect(aria.getName(testbed.firstChild)).toBe('My name is Garaventa the weird. (QED) Where are my marbles?');
			expect(aria.getDescription(testbed.firstChild)).toBe('');
		});

		it('form field with aria-describedby', function() {
			testbed.innerHTML = FORM_FIELD_WITH_ARIA_DESCRIBEDBY;
			expect(aria.getName(testbed.firstChild)).toBe('Important stuff');
			expect(aria.getDescription(testbed.firstChild)).toBe('My name is Garaventa the weird. (QED) Where are my marbles?');
		});

		it('form field with aria-describedby + hidden', function() {
			testbed.innerHTML = FORM_FIELD_WITH_ARIA_DESCRIBEDBY_HIDDEN;
			expect(aria.getName(testbed.firstChild)).toBe('Important stuff');
			expect(aria.getDescription(testbed.firstChild)).toBe('My name is Garaventa the weird. (QED) Where are my marbles?');
		});
	});

	describe('pseudo content', function() {
		it('includes pseudo content', function() {
			testbed.innerHTML = '<div class="test">bar</div>' +
				'<style>.test::before { content: "foo" }</style>';
			expect(aria.getName(testbed)).toBe('foobar');
		});
	});
});
