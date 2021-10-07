### Structuring Our Code With Modules:

- Important aspect of any robust **_application's architecture_**
- Keep the **_units of code_** for a project both **_cleanly separated and organized_**;
- **_Encapsulate_** means some data into **_privacy_** and expose other **_data publicly_**.
- In this project: **_UI Module_**(For User Interface), **_Data Module_**(For Data) and **_Controller Module_**(For Event handler)

---

### Event Bubbling:

- Event bubbling means that **_when an event is fired or triggered on some DOM element_**, then the exact **_same event is also triggered on all of the parent elements_**.

---

### Target Element:

- Target element is **_stored_** as a property in the **_event object_**.
- This means that all the **_parent elements_** on which th **_event will also fire_** will **_know the target element of the event_**, so where the event was **_first fired_**.
- And that brings up to **_event delegation_**.

---

### Event Delegation:

- If the **_event bubbles up_** in the **_DOM tree_**, and if we know **_where the event was fired_**.
- The we can simply attach an **_event handler_** to a **_parent element and wait fot the event to bubble up_**.
- And we can then **_do whatever we intended to do_** with our **_target element_**. This technique is called **_event delegation_**.

  ***

**_Use cases for event delegation_**:

```
- When we have an element with lots of child elements that we are interested in;
- When we want an event handler attached to an element that is not yet in the DOM when our page is loaded.
```

---

### DOM traversing:

- **_Moving up in the DOM_** (parent node of this target).
- The target property it **_returns_** is an **_HTML node in the DOM_**.
- So When we **_wanna move up_** from that, we can simply say **_parentNode_**:`event.target.parentNode`.

`querySelectorAll` --> **_returns NodeList_**:

- That is because in a **_DOMtree_**, where all of the **_html elements of our page are stored, each element_** is called a **_Node_**.

  ***

**_DOM manipulation_**: [More Doc...](https://blog.garstasio.com/you-dont-need-jquery/dom-manipulation/)

**_Key code_**: [More Doc...](http://keycodes.atjayjo.com/)

---

**Images, Notes and Documents are Referenced from**:

- **_Copyright (c) [Jonas Schmedtman](https://twitter.com/jonasschmedtman)_**.
