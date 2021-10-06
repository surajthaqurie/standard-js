**Structuring Our Code With Modules**:

- Important aspect of any robust application's architecture
- Keep the units of code for a project both cleanly separated and organized;
- Encapsulate sime data into privacy and expose other data publicly.
- In this project: UI Module(For User Interface), Data Module( For Datas) and Controller Module(For Event handler)

- **_Key Code_**: http://keycodes.atjayjo.com/

- **Event Bubbling**:

  - Event bubbling means that when an event is fired or triggered on some DOM element, then the exact same event is also triggered on all of the parent elements.

  - **Target Element**:
    - Target element is stored as a property in the event object.
    - This means that all the parent elements on which th event will also fire will know the target element of the event, so where the event was first fired.
    - And that brings up to event delegation.

- **Event Delegation**:

  - If the event bubbles up in the DOM tree, and if we know where the event was fired.
  - The we can simply attach an event handler to a parent element and wait fot the event to bubble up.
  - And we can then do whatever we intended to do with our target element. This technique is called event delegation.
  - **_Use cases for event delegation_**:
    1 When we have an element with lots of child elements that we are interested in;
    2 When we want an event handler attached to an element that is not yet in the DOM when our page is loaded.

- **DOM traversing**:

  - Moving up in the DOM (parent node of this target).
  - The target property it returns is an HTML node in the DOM.
  - So When we wanna move up from that, we can simply say **_parentNode_**:(`event.target.parentNode`).

  - `querySelectorAll --> returns NodeList`:
    - That is because in a DOMtree, where all of the html elements of our page are stored, each element is called a node.

**_DOM Manipulation_**: https://blog.garstasio.com/you-dont-need-jquery/dom-manipulation/
