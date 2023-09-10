# The DOM

## DOM

It's a representation of the structure of a document **in memory** that let us
connect to web pages (the HTML to Javascript). The browser creates the DOM when
they are rendering a page.

## DOM API

A list of functions, properties available under different objects that a
browser is exposing to us so we can manipulate that structure in memory from an
scripting language like Javascript.

Every time we change a property, or add an
element to that structure in memory, that will trigger an update in the
rendering HTML that you see on the screen. So actually we are not changing the
HTML, we are changing the DOM, but the browser is representing that change in
the UI and it looks like we are changing the HTML file itself.

The DOM API is available on many objects:

- `window` global object
- `document` object
- One object per HTML element and other nodes in your document

Each element is represented by an object of `HTMLElement` interface or other
interface that inherits it.

They have instance properties and methods.

Changes in properties or children will trigger updates in the user interface
**when you release the thread**.

We can listen to events happening in that element and react in consequence.
