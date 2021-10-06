## DOM and DOM Manipulation

**DOM(Document Object Model)**:

- DOM: Structured representation of html documents.
- Allows `JavaScript to access html elements and style to manipulate them`.

**DOM Manipulation**:

- Properties or methods that are used for manipulates tha DOM such as `document.querySelector()`

```
DOM !== JAVASCRIPT

- JavaScript is actually just a dialect of the ECMAScript specification. and all the
DOM related stuff is simply not in there.

- The DOM and DOM methods are actually part of somethings called the web APIs(Application Programming Interface).
- So the web API are like libraries that browsers implement and that we can access
from our JAVASCRIPT code.

- There is actually an official DOM specification that browsers implement which is the reason
why DOM manipulation works the same in all browsers.

- So all this happens behind the scenes, we don't have to import or do anything :).

```

**Selecting and Manipulating Elements**

- First need to select the element where to manipulate.
  - By Id name : '#myElement'
  - By class name: ".myElement"
  - By Html tag : 'myElement';
    `Similar as CSS selector`
- **_Setting Value: textContent and value_**
  - document.querySelector("myElement").textContent = 'Value';
  - document.querySelector("myElement").value = value;
- **_Getting Value: textContent and value_**

  - document.querySelector("myElement").textContent;
  - document.querySelector("myElement").value;

**Handling Click Events**:

```
Example:

document.querySelector('.myElement').addEventListener('click', function () {
    console.log(document.querySelector('.myElement').value);
});

```

- First need to select the element where the event should happen.(Here, `document.querySelector('myElement')`)
- Add event handler (**_addEventListener()_**) to the selected element.
- In addEventListener() method we passes arguments.
- As a first arguments: name of event that we're listening for (here, that is 'click'),
- And then as a second arguments: function value. And this function simply contains the code that we want to executed whenever the event happens.

**Keyboard Events**:

- Keyboard events are so-called global events because they do not happen on one specific element.
- There are actually three types of events for the keyboard.
  - keydown: fired as soon as we just press down the key.
  - keypress: fired continuously as we keep out finger on a certain key
  - keyup: only happens when we lift or finger off the keyboard basically Or off the key

**Manipulating CSS**:

- We need to start by selecting the element that we want to manipulate.
- Then style method(style) to the selected element.
- so we access the style property of this element and then the name of the property that we want to change.
- Whenever we manipulating a Style, we always need to specify a string.

```
Example:
// Single property
document.querySelector('myElement').style.backgroundColor = 'red';

// Multiple properties

document.querySelector("myElement").style.cssText = "display: block; position: absolute";

document.querySelector('myElement').style.cssText = `
background-color : red;
color: 'green';
`;

```

**Some IMP DOM Manipulation**:

- document.getElementById('myElement'): select the element by id only.
- document.querySelector('myElement'):
- document.querySelectorAll('myElement'):
  - Select the all element and return NodeList Array; For retrieve its value we have loop the NodeList array.
- document.querySelector('myElement').classList:

  - This classList property itself has a couple of methods, for doing operations in classes.

  ```
  // Single class
  document.querySelector('myElement').classList.remove('className');

  // Multiple classes
  document.querySelector('myElement').classList.remove('className1','className2','className3');

    Here className is without dot(.): it removes that class form the selected element.
  ```

  - document.querySelector('myElement').classList.add(className): it adds that class form the selected element.
  - document.querySelector('myElement').classList.contains('className'): Check if selected element has that class or not.
  - document.querySelector('myElement').classList.toggle('className'): If element has that className than remove it else add that className.

- document.querySelector('myElement').src='mySourcePath': set source path of image.
- document.body.append(document.createElement('textarea'));
- document.body.append(document.createElement('button'));
- document.querySelectorAll('myElement').innerHTML = '': similar to textContent where textContext returns text itself where innerHTML returns everything, including the HTML.
- document.querySelectorAll('myElement').blur(); this will make it so that this filed (input filed) loses its focus.
- document.querySelectorAll('myElement').focus(); this will make it focused
- document.querySelectorAll('myElement').insertAdjacentText('beforeend', msg); it does same thing as insertAdjacentHTML but simply with text, so it doesn't create any html element.
- document.createRange().createContextualFragment(newMarkup); This method converted string into real DOM node objects (Virtual DOM).
