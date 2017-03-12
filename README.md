# aria-api

[WAI-ARIA](https://www.w3.org/TR/wai-aria/) allows websites to provide
additional semantics to assistive technologies. Roles and attributes can be set
either explicitly (e.g. `<span role="link">click me</span>`) or implicitly
(`<a href="//example.com">click me</a>` implicitly has the role "link").

While the implicit mappings make authoring accessible websites simpler, it
makes the task of calculating an element's role and attributes more
complicated. This library takes care of exactly that.

## Install

    npm install aria-api

This installation method works best if you use tools like webpack or
browserify. There is also an UMD build included as `dist/aria.js`.

# Usage

    var aria = require('aria-api'):

    aria.querySelector('landmark').forEach(function(landmark) {
        if (!aria.matches(landmark, ':hidden')) {
            var role = aria.getRole(landmark);
            var name = aria.getName(landmark);
            console.log(role, name);
        }
    });

## getRole(element)

Calculate an element's role.

## getAttribute(element, attribute)

Calculate the value of an element's attribute (state or property). The
"aria-" prefix is not included in the attribute name.

## getName(element)

Calculate an element's name according to the [Text Alternative
Computation](https://www.w3.org/TR/accname-aam-1.1/#h-mapping_additional_nd_te).

## getDescription(element)

Calculate an element's description according to the [Text Alternative
Computation](https://www.w3.org/TR/accname-aam-1.1/#h-mapping_additional_nd_te).

## matches(element, selector)

Similar to [Element.matches()](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches),
this allows to check whether an element matches a selector. A selector can be
any of the following:

-   `role`: Matches if the element has the specified role. This also works for
    hierarchical roles such as "landmark".
-   `:attribute`: Matches if the attribute is truthy. The "aria-" prefix is not
    included in the attribute name.
-   `[attribute="value"]`: Matches if the value of the attribute converted to
    string equals the specified value.

Note that combinations of selectors are **not supported** (e.g. `main link`,
`link:hidden`, `:not(:hidden)`).

## querySelector(element, selector)

Similar to [Element.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector).
See `matches()` for details.

## querySelectorAll(element, selector)

Similar to [Element.querySelectorAll()](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll).
See `matches()` for details.

# What is this for?

First of all, I thought that something like this should exist. I have not yet
figured out where to use it, but I am sure there are valid use cases.

That said, this is what I think it could be used for:

-   Providing features based on the additional information provided by ARIA,
    e.g. landmark navigation.
-   Tools helping developers with improving accessibility.

# Notes

-   This is a pet project. I do not have the time to do extensive testing and
    may skip some details now and then. I am happy to receive bug reports and
    pull requests though.
-   This library does not do any validity checks. Invalid attributes or roles
    will not produce any warnings.
-   In order to calculate the "hidden" attribute,
    [Window.getComputedStyle()](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle)
    is called. This only seems to return reliable values if the element is
    attached to `document`.

# Related projects

-   [axe-core](https://github.com/dequelabs/axe-core/):
    Accessibility Engine for automated testing.
-   [Visual ARIA Bookmarklet](http://whatsock.com/training/matrices/visual-aria.htm):
    Displays role, name, and description in any website.
-   [ARIA Query](https://github.com/A11yance/aria-query):
    Information from the ARIA spec as JavaScript structures.
-   [Landmarks Browser Plugin](https://github.com/matatk/landmarks/blob/master/src/assemble/content.head.js):
    Provides landmark navigation in Firefox and Chrome.
-   [Accessibility Object Model](https://wicg.github.io/aom/spec/):
    Draft spec for exposing the accessibility tree to JavaScript.
-   [chrome.automation](https://developer.chrome.com/extensions/automation):
    A propriatary API that exposes the accessibility to JavaScript.
