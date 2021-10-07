# DOM and DOM Manipulation

```
DOM !== JAVASCRIPT
```

## DOM(Document Object Model):

- DOM: Structured representation of html documents.
- Allows **_JavaScript to access html elements and style to manipulate them_**.

## DOM Manipulation:

- **_Properties or methods_** that are used for **_manipulates_** tha DOM such as `document.querySelector()`

- JavaScript is actually just a **_dialect of the ECMAScript specification_**. and all the
  **_DOM related stuff_** is simply **_not in there_**.
- The **_DOM and DOM methods_** are actually part of somethings called the **_web APIs(Application Programming Interface)_**.
- So the **_web API_** are like **_libraries_** that **_browsers implement_** and that we can **_access_**
  from our **_JAVASCRIPT code_**.

```
- There is actually an official DOM specification that browsers implement which is the reason
  why DOM manipulation works the same in all browsers.
- So all this happens behind the scenes, we don't have to import or do anything :).
```

## Selecting and Manipulating Elements:

```
Similar as CSS selector
```

**First need to select the element where to manipulate**.

- **_By Id name_** : '#myElement'
- **_By class name_**: ".myElement"
- **_By Html tag_**: 'myElement';

  ***

**Setting Value: textContent and value**

- document.querySelector("myElement").textContent = 'value';
- document.querySelector("myElement").value = value;

  ***

**Getting Value: textContent and value**

- document.querySelector("myElement").textContent;
- document.querySelector("myElement").value;

## Handling Click Events:

```js
// Example:
document.querySelector(".myElement").addEventListener("click", function () {
  console.log(document.querySelector(".myElement").value);
});
```

- First need to **_select the element_** where the **_event should happen_**. (document.querySelector(".myElement"))
- Add **_event handler_** (addEventListener()) to the **_selected element_**.
- In addEventListener() method **_we passes arguments_**.

As a **first arguments**:

- **_name of event_** that we're **_listening for_** (here, that is 'click'),

  ***

And then as a **second arguments**:

- **_function value_**, simply **_contains_** the code that we want to **_executed whenever the event happens_**.

## Keyboard Events:

- Keyboard events are so-called global events because they do not happen on one specific element.
- There are actually three types of events for the keyboard.

1. **keydown**: fired as soon as we just press down the key.

2. **keypress**: fired continuously as we keep out finger on a certain key

3. **keyup**: only happens when we lift or finger off the keyboard basically Or off the key

## Manipulating CSS:

- We need to start by **_selecting the element_** that we want **_to manipulate_**.
- Then **_style method (.style)_** to the selected element.
- so we **_access_** the **_style property_** of this element and then **_the name of the property that we want to change_**.

**_Whenever we manipulating a Style, we always need to specify a string_**.

```js
// Single property
Example: document.querySelector("myElement").style.backgroundColor = "red";

// Multiple properties

document.querySelector("myElement").style.cssText =
  "display: block; position: absolute";

document.querySelector("myElement").style.cssText = `
background-color : red;
color: 'green';
`;
```

## Some IMP DOM Manipulation:

**document.getElementById('myElement')**: select the element by id only.

**document.querySelector('myElement')**:

**document.querySelectorAll('myElement')**:

- Select the all element and **_return NodeList Array_**; For **_retrieve_** its value we have **_loop the NodeList array_**.

---

**_document.querySelector('myElement').classList_**:

- This **_classList_** property itself **_has a couple of methods_**, for doing **_operations in classes_**.
- **_Here className is without dot(.)_**.

- Example

  ```js
  // Single class
  document.querySelector("myElement").classList.remove("className");

  // Multiple classes
  document
    .querySelector("myElement")
    .classList.remove("className1", "className2", "className3");

  //  it removes that class form the selected element.
  ```

- **document.querySelector('myElement').classList.add(className):** it **_adds_** that **_class_** form the selected element.
- **document.querySelector('myElement').classList.contains('className')**: **_Check_** if selected **_element has that class or not_**.
- **document.querySelector('myElement').classList.toggle('className')**: If element has that className than **_remove_** it else **_add_** that className.

---

**document.querySelector('myElement').src='mySourcePath'**: **_set source path of image_**.

---

**document.body.append(document.createElement('textarea'));**

---

**document.body.append(document.createElement('button'));**

---

**document.querySelectorAll('myElement').innerHTML = '':** similar to **_textContent_** where textContext **_returns text_** itself where **_innerHTML_** returns **_everything, including the HTML_**.

---

**document.querySelectorAll('myElement').blur()**; this will make it so that this **_filed (input filed) loses its focus_**.

---

**document.querySelectorAll('myElement').focus();** this will make it **_focused_**

---

**document.querySelectorAll('myElement').insertAdjacentText('beforeend', msg)**; it does same thing as **_insertAdjacentHTML_** but simply with **_text_**, so it **_doesn't create any html element._**

---

**document.createRange().createContextualFragment(newMarkup);** This method **_converted string into real DOM node objects (Virtual DOM)._**

---

**Images, Notes and Documents are Referenced from**:

- **_Copyright (c) [Jonas Schmedtman](https://twitter.com/jonasschmedtman)_**.
