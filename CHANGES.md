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
