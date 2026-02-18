0.9.1 (2026-02-18)
------------------

-	fix shadow DOM support for `getName()`


0.9.0 (2026-02-18)
------------------

-	restore cjs entry point
-	add basic support for shadow DOM


0.8.0 (2024-11-01)
------------------

-	Convert the source code to ES modules. `dist/aria.js` is still an UMD bundle.
-	The internal re-exports `query.getRole()` and `query.getAttribute()` have
	been removed. Use the corresponding exports from `attrs` instead.
-	fix: support `xlink:href` on `<area>` elements
-	fix: consider `text-transform` in `getName()` and `getDescription()`


0.7.0 (2024-06-22)
------------------

-	add support for SVG-AAM
-	add support for WAI-ARIA 1.3
-	fix: when deciding if an element is hidden, treat `visibility: collapsed` the
	same as `visibility: hidden`
-	getName
	-	do not trim non-breaking spaces
	-	add support for `open-quote`, `close-quote`, `attr(…)` and fallback values
		in pseudo content
	-	treat `placeholder` as tooltip
	-	only add whitespace for online elements, not for inline-block
	-	fallback to tooltip for any element
	-	only ignore `aria-labelledby` when recursion was caused by
		`aria-labelledby` or `aria-describedby`


0.6.0 (2024-02-04)
------------------

-	getRole
	-	use Web Platform Tests
	-	fix rowheader selectors
	-	fix listitem selectors
	-	fix: directory is an alias for list
	-	never return invalid, abstract, or alias roles
	-	fall back to implicit role if all explicit roles are invalid
-	getName
	-	increase priority of embedded input element


0.5.0 (2023-06-07)
------------------

-	add support for WAI-ARIA 1.2
-	add support for Digital Publishing WAI-ARIA Module 1.1
-	add support for `aria-description`
-	add incomplete support for SVG Accessibility API Mappings
-	update HTML Accessibility API Mappings to the latest working draft
-	fix parsing of the `role` attribute if it contains more than one entry
-	do not consider `placeholder` for description


0.4.7 (2023-01-12)
------------------

-	internal refactoring and performance improvements


0.4.6 (2023-01-08)
------------------

-	fix: `img[alt=""]` has role presentation
-	fix handling of whitespace in some places (but still not perfect)
-	only treat direct children of `<details>` as hidden. This is consistent with
	how `display: none` is treated.


0.4.5 (2022-10-10)
------------------

-	fix a typo in the previous release


0.4.4 (2022-10-10)
------------------

-	use labels property as indicator that element is labelable
-	fix issue with non-labelable elements inside label elements


0.4.3 (2022-10-04)
------------------

-	treat children of `<details>` as hidden
-	avoid infinite loops with `aria-owns` (thanks to Jon Ribbens)


0.4.2 (2022-01-25)
------------------

-	assume separator is not focussable (i.e. structure, not widget)
-	fix nameFromContents for cell
-	fix: treat aria-hidden as bool-undefined
-	fix: escape ids before inserting them into selectors


0.4.1 (2021-06-23)
------------------

-	always ignore `<noscript>` elements


0.4.0 (2020-09-10)
------------------

-	use browser API `HTMLInputElement.labels` instead of own implementation
-	expose previously internal functions `getParentNode()` and `getChildNodes()`


0.3.0 (2019-05-23)
------------------

-	new module atree for walking the accessibility tree. The tree is takes
	`aria-owns` into account. Elements with `aria-hidden` are skipped.
-	new module attrs contains some functions that were previously part of query.
-	there is no longer a minified dist file.

-	attrs: `aria.getAttribute(el, 'hidden')` no longer checks the ancestor
	elements, only the element itself
-	attrs: support implicit attribute values for roles
-	attrs: a form element now also gets the role "form" if it has a `title`
	attribute
-	attrs: the `hidden` attribute is no longer considered to imply `aria-hidden`.
	Instead, the implication is indirect via `display`. See
	<https://github.com/w3c/html-aam/issues/178>.
-	attrs: elements like header or footer only get implicit roles if they are not
	scoped. The scoping detection has been fixed to include not only sectioning
	content but also sectioning roots (e.g. blockquote).
-	name: the code to detect recursion has been changed, hopefully for the
	better.


0.2.7 (2019-03-26)
------------------

-	name: fix some bugs in handeling of `aria-owns`
-	name: various improvements
-	update README to be more specific about the supported specs


0.2.6 (2018-07-07)
------------------

-	name: return empty description if same as name
-	query: add support for term role
-	query: consider conflicts (see
	https://www.w3.org/TR/core-aam-1.1/#mapping_conflicts)


0.2.5 (2018-05-01)
------------------

-	support graphics-aria
-	name: various improvements


0.2.4 (2018-03-01)
------------------

-	I forgot to update the dist files


0.2.3 (2018-03-01)
------------------

-	name: add additional whitespace around `<input>` and `<img>` elements
-	name: treat menus like comboboxes
-	name: fix some cases where pseudo content was omitted
-	name: ignore whitespace-only names in the computations
-	name: ignore any non-string pseudo content (some dynamic cases like `attr()`
	or `conter()` are not handled correctly yet)
-	sections only get the implicit landmark role if they have an explicit label
	(same as forms)


0.2.2 (2018-02-14)
------------------

-	name: further improve support for embedded controls
-	name: use title attribute as alternative text for `<abbr>` and `<acronym>`
-	name: correctly handle multiple labels
-	name: add whitespace for `<br>` and around non non-inline elements
-	add some missing implicit role mappings (e.g. select)


0.2.1 (2018-02-03)
------------------

-	extend tests for name/description calculation and fix some bugs
-	case insensitive tagName matching
-	treat roles "presentation" and "none" as aliases for each other


0.2.0 (2017-12-29)
------------------

-	update role hierarchy to ARIA 1.1
-	add dpub-aria role support
-	fix readonly calculation


0.1.1 (2017-08-03)
------------------

-	forms only get the implicity form role if they have an explicity label
-	fixes to the calculation of the "hidden" property


0.1.0 (2017-07-12)
------------------

-	some performance optimizations
-	add `closest()`
-	allow comma separated roles in selectors


0.0.2 (2017-04-22)
------------------

-	name: fix syntax error in a selector


0.0.1 (2017-04-22)
------------------

-	role: fix implicit role detection for header and footer
-	name: strip quotes when including pseudo content
-	name: ignore label and alt on elements with role "presentational"


0.0.0 (2017-03-12)
------------------

initial version
