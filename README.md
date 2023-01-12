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

    aria.querySelector('landmark').forEach(landmark => {
        if (!aria.matches(landmark, ':hidden')) {
            var role = aria.getRole(landmark);
            var name = aria.getName(landmark);
            console.log(role, name);
        }
    });

## getRole(element)

Calculate an element's role.

Note that this will return only the most specific role. If you want to know
whether an element *has* a role, use `matches()` instead.

## getAttribute(element, attribute)

Calculate the value of an element's attribute (state or property). The
"aria-" prefix is not included in the attribute name.

## getName(element)

Calculate an element's name according to the [Accessible Name and Description
Computation](https://www.w3.org/TR/accname-aam-1.1/#mapping_additional_nd_te).

## getDescription(element)

Calculate an element's description according to the [Accessible Name and
Description Computation](https://www.w3.org/TR/accname-aam-1.1/#mapping_additional_nd_te).

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
`link:hidden`, `:not(:hidden)`).  The single exception to this rule are
comma-separated lists of roles, e.g. `link,button`.

## querySelector(element, selector)

Similar to [Element.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector).
See `matches()` for details.

## querySelectorAll(element, selector)

Similar to [Element.querySelectorAll()](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll).
See `matches()` for details.

## closest(element, selector)

Similar to [Element.closest()](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest).
See `matches()` for details.

## getParentNode(node)

Similar to [Node.parentNode](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode),
but takes `aria-owns` into account.

## getChildNodes(node)

Similar to [Node.childNodes](https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes),
but takes `aria-owns` into account.

# What is this for?

First of all, I thought that something like this should exist. I currently use
it for [a11y-outline](https://github.com/xi/a11y-outline/), a web extension
that generates outlines based on WAI-ARIA roles.

That said, this is what I think it could also be used for:

-   Providing features based on the additional information provided by ARIA,
    e.g. landmark navigation.
-   Tools helping developers with improving accessibility.

# Implemented standards

-   [Accessible Rich Internet Applications 1.1](https://www.w3.org/TR/wai-aria-1.1/)
-   [Core Accessibility API Mappings 1.1](https://www.w3.org/TR/core-aam-1.1/)
-   [HTML Accessibility API Mappings 1.0](https://www.w3.org/TR/html-aam-1.0/)
-   [WAI-ARIA Graphics Module 1.0](https://www.w3.org/TR/graphics-aria-1.0/)
-   [Digital Publishing WAI-ARIA Module 1.0](https://www.w3.org/TR/dpub-aria-1.0/)
-   [Accessible Name and Description Computation 1.1](https://www.w3.org/TR/accname-1.1/)

I try to update the code whenever a new version of these specs becomes a
recommendation.

# Notes

-   This is a pet project. I do not have the time to do extensive testing and
    may skip some details now and then. I am happy to receive bug reports and
    pull requests though.
-   The standards are still in a very rough state. Many things are
    unclear/undecided and therefore no browser really implements them. So
    naturally, this library cannot really implement the standards either.
-   This library does not do any validity checks. Invalid attributes or roles
    will not produce any warnings.
-   In order to calculate the "hidden" attribute,
    [Window.getComputedStyle()](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle)
    is called. This only seems to return reliable values if the element is
    attached to `document`.
-   Due to security restrictions it is not generally possible to inspect the
    content of iframes, so they are ignored.

# Related projects

-   [Visual ARIA Bookmarklet](http://whatsock.com/training/matrices/visual-aria.htm):
    Displays role, name, and description in any website. Maintained by one of
    the editors of the [accname]() spec.
-   [axe-core](https://github.com/dequelabs/axe-core/) and
    [Accessibility Developer Tools](https://github.com/GoogleChrome/accessibility-developer-tools):
    These are libraries for accessibility testing. They solve many of the same
    issues as this library internally.
-   [ARIA Query](https://github.com/A11yance/aria-query):
    Information from the ARIA spec as JavaScript structures.
-   [Accessibility Object Model](https://wicg.github.io/aom/):
    Draft spec for exposing the accessibility tree to JavaScript.
-   [chrome.automation](https://developer.chrome.com/extensions/automation):
    A propriatary API that exposes the accessibility tree to JavaScript.
-   [babelacc](https://xi.github.io/babelacc/):
    A tool to compare the output of different libraries.
