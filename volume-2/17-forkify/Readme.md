## Why Worry About Architecture

A prefect architecture gives:

**Structure**:

- Like a house, software needs a structure: the way we **_organize code_**.

**Maintainability**:

- A project is never done! We need to be able to easily **_change it in the future_**.

**Expandability**

- We also need to be able to easily **_add new features_**.

```
We can use a well-established architecture pattern like MVC, MVP, Flux etc
```

## Components Of Any Architecture

Now no matter where the architecture comes from, and who develops it, there are some components that any architecture must have. And they are:

**Business Logic**

- Code that **_solves the actual business problem;_**
- Directly related to **_what business does_** and **_what it needs_**.
- **_Example_**: sending message, storing transactions, calculating taxes,...
  ***

**State**

- Essentially **_stores all the data_** about the application (that is running in the browser data about the application frontend basically)
- Should be the "single source of truth"
- UI should be kept in sync with the state
- State libraries exist (Redux, Mobx)
  ***

**HTTP Library**:

- Responsible for making and receiving **_AJAX requests_**
- Optional but almost always necessary on real-world apps
  ***

**Application Logic(Router)**:

- Code that is only concerned about the **_implementation of application itself;_**
- Handles navigation and UI events
  ***

**Presentational Logic(UI Layer)**:

- Code that is concerned about the **_visible part_** of the application.
- Essentially displays application state in order to keep everything in sync.

## The Model-View-Controller (MVC) Architecture

So basically MVC architecture contains three big parts, which are **_the model_**, **_the view_** and **_the controller._**

**The view**:

- The view is of course, for the **_presentation logic_**
- It's the part of the application interacting with the user.
  ***

**The model**:

- The model is all about the **_application data_**
- So that's why it usually contains and **_state and also business logic_** that manipulates the state.
- The model is also what contains the HTTP library that might get some data from the web like form some API or some backend.
  ***

**The controller**:

- The controller is what contains the application logic
- It basically creates a **_bridge_** between the model and a view (which don't know about one another) and **_connects them_**.
- Handles UI events and **_dispatches task to model and view_**

## Publisher-Subscriber Pattern

- The solution of event handling in MVC is publisher-Subscriber design pattern.
- And by the way, design patterns in programming are basically just standard solutions to certain kinds of problems.

  ***

**Publisher**:

- which is some code that knows **_when to react_** (it will know when to **_react to the event_**)
  ***

**Subscriber**:

- which is code that actually **_wants to react_**. So this is the code that should actually be **_executed when events happens_**.

```
But now finally comes to solution to the problem, so the solution is that we can now subscribe to
the publisher by passing into subscriber function as an arguments.
```

---

**[For Documents:](https://jsdoc.app/)**

```js
/**
 * Render the received object to the DOM
 * @param {Object |Object[]} data  The data to be rendered (e.g. recipe)
 * @param {boolean} [render=true] If false, create markup string instead of rendering to the DOM
 * @returns {undefined | string} A markup string is returned if render=false
 * @this {Object} View instance
 * @author Jonas Schmedtmann
 * @todo Finish the implementation
 */
```

---

**Images, Notes and Documents are Referenced from**:

- **_Copyright (c) [Jonas Schmedtman](https://twitter.com/jonasschmedtman)_**.
