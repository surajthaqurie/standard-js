## DOM Behind The Scenes

`The DOM is basically the interface between all JavaScript code and the browser,or more specifically HTML documents that are rendered in and by the browser.`

```
- Allows us to make JavaScript interact with the browser;

- We can write JavaScript to create, modify and delete HTML elements;
  set styles, classes and attribute; and listen and respond to events;

- DOM tree us generated from an HTML document, which we can then interact with;

- DOM is a very complex API that contains lots of methods and properties to interact with the DOM tree.
```

```
.querySelector() / .addEventListener() / .createElement() /
.innerHTML / .textContent / .children / etc ....
```

**_DOM API Organized Behind the Scenes_**:

- Every single note in the **_DOM tree_** is of the **_type, NODE_**.
- And such as everything else in JavaScript, **_each node_** is represented in JavaScript by an **_object_**. This object gets access to special node methods and properties, such as `textContent, childNodes, parentNode, cloneNode() and many others`.
- There are **_different types_** of node, and this node type has a couple of child types so to say. And these are the **_element type_**, the **_text type_**, the **_comment type_** and also the **_document type_**.

**_Text type_**:

- So whenever there is text inside any element, we already know that it gets its own node. And that node will be of the type, text.
  `<p> Paragraph</p>`

**_Comment Type_**:

- And the same actually happens for HTML comments and that's because the rule is that everything that's in the HTML has to go into the DOM as well.
  `<!--Comment-->`

**_Element type_**:

- Now for the element itself there is element type node. And this type of node gives each HTML access to a ton of useful properties, Such has:
  - .innerHTML
  - .classList
  - .children
  - .parentElement
  - .append()
  - .remove()
  - .insertAdjacentHTML()
  - .querySelector()
  - .closest()
  - .matches()
  - .scrollIntoView()
  - .setAttribute(), etc ...
- Each element will be represented internally as an object. The element type has internally an HTML element, child type
- And that element type itself has exactly one child type for each HTML element that exists in HTML (One different type of HTMLElement per HTML element....).
  - HTMLButtonElement
  - HTMLDivElement
  - so on ......
- And that's important because each of these HTML elements can have different unique properties.
- For example: an image has a source attribute in HTML which no other element has Or the anchor element for links has the HREF attribute which also no other element has.
- So the DOM needs a way of storing these different attributes and therefore different types of HTML elements we created in the DOM API.

- **_Inheritance_**:

  - Inheritance makes all of this works.
  - Well inheritance means that all the child types will also get access to the methods and properties of all their parent node types.
  - For example an HTML element will get access to everything from the element type, like innerHTML, or classList or all these other methods and properties.
  - And besides that it will also get access to everything from the node type (or addEventListener(), closest() or cloneNode() or other methods and properties) because that is also its parent type.

- The DOM API is broken up into these different types of nodes. And each of these types of nodes has access to different properties and methods and some of them even inherit more properties and methods from their ancestors in this organization.

**_Document type_**:

- Document node type, which we use all the time in DOM manipulation is in fact just another type of node.
- So it contains important methods such as
  - .querySelector()
  - .createElement()
  - .getElementById()
- And note how querySelector is available on both the document and element types.

- The DOM API actually needs a way of allowing all the node types to listen to events. And remember we usually listen for events by calling the addEventListener method on an element or the document.
- Its works because a special node type called **_EventTarget_** which is a parent of both the node type and also the **_window node_** type.
  - **_EventTarget_**:
    - .addEventListener()
    - .removeEventListener()
- **_Window Node_**:

  - Global Object, lots of methods and properties, many unrelated to DOM.

- Thanks to inheritance we can call addEventListener on every single type of node
  because all elements as well document and window even text and comment will inherit this method and therefore we will be able to use addEventListener on all of them just as if it was their own method.

- We do never manually create an eventTarget object.

---

**Selecting Elements**:

- document.documentElement: Entire HTML
- document.head: head
- document.body: body
- document.getElementsByTagName('myTagName): returns an **_HTML collection_**: is actually a so-called live collection i.e. If the DOM changes then this collection is also immediately updated automatically
- document.getElementsByClassName('myClassName'): without selector only name of class
- document.getElementById('myId'): without selector only name of id
- document.querySelector('myElement')
- document.querySelectorAll('myElement'): returns NodeList.

**Creating and Inserting Elements**:

- **_Creating_**:

  - document.createElement('myElement'): it creates html tag(open and close)
  - document.querySelector('myElement').classList.add('myClassName'): adds class name in the element
  - document.querySelector('myElement').insertAdjacentHTML('myHTML'): it insert html codes. (beforebegin, afterbegin, beforeend, afterend)
  - document.querySelector('myElement').innerHTML: '': inside that element

- **_Inserting_**:
  - document.querySelector('myElement').prepend('newElement'): Adds the newElement at the first child of selected element
  - document.querySelector('myElement').append('newElement'): Adds the newElement at the last child of selected element
  - document.querySelector('myElement').append(newElement.cloneNode(true)): the multiple copies of same elements (child elements will also be copied)
  - document.querySelector('myElement').before('newElement'): Adds this newElement after the selected newElement element
  - document.querySelector('myElement').after('newElement'): Adds this newElement before the selected element

**Deleting Elements**:

```
document.querySelector('myElement').addEventListener('click', function () {
  // message.remove();  // new method
  message.parentElement.removeChild(message); // old method

});
```

---

**Styles, Attributes and Classes**:
**_Styles_**:

- Inline style.

```
message.style.backgroundColor = '#37383d'
message.style.width = '120%';

// gets the only style that we set manually ourselves
console.log(message.style.backgroundColor);

// - Inserting ----------------------------------------
// real style as its appears on the page
// console.log(getComputedStyle(message));
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height = parseInt(getComputedStyle(message).height, 10) + 3 + 'px';

// documentElement: root
document.documentElement.style.setProperty('--color-primary', 'orangered');
```

**_Attributes_**:

- Data Attribute: special types of attribute that start with **_data-_**.

```
<img src="img/logo.png" data-version-number="3.0" />

console.log(logo.dataset.versionNumber);  // camelCase here
```

**_Classes_**:

- We can add multiple classes.
- document.querySelector('myElement').classList.add()
- document.querySelector('myElement').classList.remove()
- document.querySelector('myElement').classList.toggle()
- document.querySelector('myElement').classList.contains()
- document.querySelector('myElement').className = ' myClassName':
  - Don't use this because it will override all the existing classes.
  - And also it allows us to only put one class on any element.

---

**Smooth Scrolling**:
**Type of Events and Events Handlers**:

- An event is basically a signal that is generated by a certain dumb node and signal means that something has happened,
- For example, a click somewhere or the mouse moving, or the user triggering the full screen mode and really anything of importance, that happens on our webpage generates an event.
- The we can list and fold these events in our code using EventListeners.

```
// TYPE 1:
const h1 = document.querySelector('h1');

// Old-School
// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! you are reading the heading :D');
// }

// TYPE 2:
const alertH1 = function (e) {
  alert('addEventListener: Great! you are reading the heading :D');

  // Removing event listener
  // h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// TYPE 3:
 <!-- <h1 onclick="alert('Html ALert')"> -->

```

---

**Event Propagation: Bubbling and Capturing**

- When DOM generates a click event right away. However, this event is actually not generated at the target element.
- So at the element, where the event happened, instead the event is actually generated at the root of the document so at the very top of the dumb tree.
- The from there, the so-called **_capturing phase_** happens, where the event then travels all the way down from the document route to the target element.
- And as the event travels down the tree, it will pass through every single parent element of the target element.
- As soon as the event reaches the target, the **_target phase_** begins, where events can be handled right at the target.
- Now after reaching the target the event then actually travels all the way up to the document route again, in the so-called **_bubbling phase_**.
- So we say that events bubble up from the target to the document route.
- And just like capturing phase, the event passes through all its parent elements and really just the parents so not through any sibling elements.
- So we would have handled the exact same event multiple times once at its target, and once at one of its parent element.

- By default, events can only be handled in the target, and in the bubbling phase. However, we can set up event listeners in a way that they listen to events in the capturing phase instead.
- Also, actually not all types of events that do have a capturing and bubbling phase. Some of them are created right on the target element and so we can only handle them there.
- But really, most of events do capture and bubble. We can also say that **_events propagate_** which is really what capturing and bubbling is. It's events propagating from one place to another.

```
.addEventListener method by default only listing for events in the bubbling phase, but not in the capturing phase, because the capturing phase is usually
irrelevant for us.
```

- Now on the other hand, the bubbling phase can be very useful for something called **_event delegation_**.
- However, if we really do want to catch events during the **_capturing phase_**, we can define a third parameter in the addEventListener function.
- We can set the **_third parameter is true or false_**. If the capture parameter is set to **_true_** the event handler will **_no longer listen_** to **_bubbling events_** but instead, to **_capturing events_**.

---

**Event Delegation**:

- If **_exact same callback function_** is attached to **_multiple elements_** and that's kind of unnecessary because that is like **_copying the callback function multiple times_**.
- So that would then certainly **_impact the performance_** and it's really just **_not a clean solution_** in that case.
- And so the **_better solution_** without a doubt, is to use **_events delegation_**.
- Event delegation, we use the fact that **_events bubble up_** and we do that by **_putting_** the **_eventListener_** on a **_common parent_** of all the elements that we are **_interested in_**.
- In event delegation we basically need **_two steps_**:
- `First, we add the event listener to a common parent element of all the elements that we're interested in.`
- `Second, in that eventListener determine what element originate the event.`

---

**DOM Traversing**:

- Dom traversing is basically walking through the DOM. Which means that we can select an element based on another element.

```
const h1 = document.querySelector('h1');

// Going downwards: child : direct sibling
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upward: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

// closest parent element
h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: sibling (direct sibling : previous and next one)
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
```

---

**A Tabbed Component**:

- A tabbed component component can appear in many different ways, but they all have in common is that they have some kind of tabs: and when you clicked the tab then the specific content area will change.

---

**Passing Arguments To Event Handlers**:

- .addEventListener() expects a function, so we need to pass a function.
- But if we call the function, then all of this there will become some other value.
- JavaScript indeed expects a function in addEventListener(), and not just some other regular value which would be the result of calling the function.

```
Solution 1:
nav.addEventListener('mouseover', function (e) {
  handleHover(e, 0.5);
});

Solution 2: passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));

```

---

**The Scroll Event**:

- The scroll event is available in Window.
- This event will be fired off each time that we scroll on page.
- Scroll event is not really efficient and usually it should be avoided.

```
Example: Sticky Navigation

const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

window.addEventListener('scroll', function (e) {

  // console.log(window.scrollY);
  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});
```

---

**The Intersection Observer API**:

- This API allows our code to basically **_observe changes_** to the way that a **_certain target element intersects another element_**, or the way it **_intersects the view port_**.
- To **_use_** the intersection observer API, we need to start by **_creating a new_** intersection observer.
- And in here, we will have to pass in a callback function and an object of options.
- So now we have to use this observer to basically observe a certain target.`observer.observe(myElement);`

- **_Sticky Navigation_**

```
// This callback function here will get called each time that the observed element(target element)
// is intersecting the route element at the threshold that we defined in the function.
const obsCallback = function (entries, observer) {
  // entries : actually an array of the threshold entries
  // observer: observer object itself

  entries.forEach(entry => {
    console.log(entry);
  });
}
// dynamic height
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);
const obsOptions = {
  root: null,      // null:  entire view port // This here is the target and the route element will be the element that we want our target element to intersect.
  threshold: [0, 0.2], // this is basically the percentage of intersection at which the observe callback will be called
  rootMargin: `-${navHeight}px`,  // And this route margin here, for example 90 is a box of 90px that will be applied outside the target element
};
const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);  // target element
```

---

- **_Revealing Elements On Scroll_**:

```
const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);  // if observer finish its work than just unobserve
}
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
```

---

- **_Lazy Loading Images_**:

  - One of the most important things when building any website is performance and images have by far the biggest impact on page loading.
  - So its very important that images are optimized on any page. For that we can use a strategy called **_Lazy loading Images_**.

```js
const imgTarget = document.querySelectorAll("img[data-src]");
// console.log(imgTarget);

const loadImg = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

imgTarget.forEach((img) => imgObserver.observe(img));
```

---

**Lifecycle DOM Events**:

- When we say lifecycle that the page is first accessed, until the user leaves it.
- **_DOM content loaded_**:

  - This event is fired by the document as soon as the HTML is completely parsed, which means that the HTML has been downloaded and been converted to the DOM tree.
  - Also, all scripts must be downloaded and executed before the DOM content loaded event can happen.
  - This event does actually not wait for images and other external resources to load. So just HTML and JavaScript need to be loaded.
  - We can executed code that should only be executed after the DOM is available (we want all our code only to be executed after the DOM is ready)
  - Similar as `document.ready` of jquery.

  ```js
  document.addEventListener("DOMContentLoaded", function (e) {
    console.log(`HTML parsed and DOM tree built!`, e);
  });
  ```

- **_load_**:

  - The load event is fired by the window, as soon as not only the HTML is parsed, but also all the images and external resource like CSS files are also loaded.
  - When the complete page has finished loading is then this event gets fired.

```js
window.addEventListener("load", function (e) {
  console.log(`Page fully load`, e);
});
```

- **_hashchange_**:

  - In url everything hta comes after hash(#) that is called hash.`localhost:123/#012102121`, here 012102121 is hash value.
  - And the changing of the hash is actually an event that we can listen for.

  ```js
  window.addEventListener("hashchange", function (e) {
    console.log("hash is changed", e);
  });
  ```

// Multiple events
['hashchange', 'load'].forEach(ev => window.addEventListener(ev, showRecipe));

````

- **_beforeunload_**:

- This beforeunload event is also gets fired on window.
- And this event is created immediately before user is about ro leave a page.
- For example after clicking close button in the browser tab.
- We can basically use this events to ask users if they are 100% sure that they want to leave the page.

```js
window.addEventListener("beforeunload", function (e) {
  e.preventDefault(); // some browser required it, not chrome
  console.log(e);

  // in order to display a leaving confirmation, we need to set the return value on the event to an empty string.
  e.returnValue = ""; // this if for historical reasons.
});
````

---

**Efficient Script Loading: Defer And Async**:

- Different ways of loading JavaScript in HTML.
  - Normal: `<script src="script.js">`
  - Async: `<script async src="script.js">`
  - Defer: `<script defer src="script.js">`
- In the HTML, we can write the script tag in the document head , or usually at the end of the body.
- Important: only modern browser supports `Async` and `Defer`. They will basically ignored in old browsers.
- If you need to support all browsers, then you need to put your script tag at the end of the body and not in the head.
- That's because this is actually not a JavaScript feature but an HTML5 feature.

---

**Algorithm For DOM Conversion**:

```js
// check old html to new html : This method converted string into real DOM node objects (virtual dom)
const newDOM = document.createRange().createContextualFragment(newMarkup);
const newElements = Array.from(newDOM.querySelectorAll("*"));
const curElements = Array.from(this._parentElement.querySelectorAll("*"));

// console.log(curElements);
// console.log(newElements);

// Comparing two DOM elements (isEqualNode)
newElements.forEach((newEl, i) => {
  const curEl = curElements[i];
  // console.log(curEl, newEl.isEqualNode(curEl));

  // updates changes TEXT
  if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== "") {
    // console.log(newEl.firstChild?.nodeValue.trim());

    curEl.textContent = newEl.textContent;
  }

  // updates changes ATTRIBUTES
  if (!newEl.isEqualNode(curEl)) {
    // console.log( Array.from(newEl.attributes));
    Array.from(newEl.attributes).forEach((attr) =>
      curEl.setAttribute(attr.name, attr.value)
    );
  }
});
```
