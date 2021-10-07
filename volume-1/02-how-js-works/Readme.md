# How JavaScript Works

## What happened to our code in js engine

- **OurCode** -> **parser** -> **Conversion to Machine Code** -> **Code Runs**

**Parser**:

- Our code is parsed by a parser which basically reads our code **_line by line_** and **_checks if the syntax_** of the code that we gave it is correct.
- And if we make some **_mistakes_** it basically **_throws an error_** and **_stops the execution_**.
- If everything is **_correct_** though, then the parser **_produces_** a data **_structure_** known as the **_Abstract Syntax Tree_**.

**Conversion to Machine Code**:

- Set of instructions, that can be **_executed directly_** by the **_computer's processor_**.

**Code Runs**

- Actually **_runs_** and **_does its work_**.

---

## Order in which the code is run:

**Execution context**:

- All javaScript code needs to run in an **_environment_**, and these environments are called **_execution contexts_**.
- The **_default_** execution context is always the **_global context_**.

---

**Global Context**:

- Code that is **_not inside_** any function and **_associated_** with the global object
- In the browser, that's the window object: `lastName === window.lastName`

---

**Execution Stack (Active Context)**:

- A **_new_** function gets its **_new execution context_**.
- And the **_new execution context_** is put on **_top of the current context_**, forming the so-called **_Execution Stack_**.

---

**Execution Context Object**:

- We can associate an execution context with an object.
- When a function is called, a new execution context is put on top of the execution stack.
- And this happens in two phases: **_creation phase_**, **_execution phase_**

1. **Creation Phase**:

- Creation of the **_variable Object (VO)_**;
- Creation of the **_scope chain_**
- Determine value of `this` variable/keyword

  **_Variable Object_**:

  - The argument object is created, which contains all the arguments that were passed into the function
  - Code is scanned for **_function declaration_**: for each function, a property is created in the Variable Object, **_pointing to the function_**.
  - Code is scanned for **_varibale declaration_**: for each variable, a property is created in the Variable Object, and set to undefined.

  **_Scope Chain (Scoping)_**:

  - Scoping answer the question **_where can we access a certain variable_**
  - **_Each new function creates a scope_**: the **_space/environment_**, in which the variables it **_define are accessible_**.
  - **_Lexical Scoping_**: a function that is **_lexically_** within another function gets access to the **_scope of the outer function (parent function)_**.

  **_This Keyword_**:

  - The `this` variable is a variable that **_each and every execution context gets_**.
  - It **_stored_** in the **_execution context object_**.
  - **_Regular function call_**: the this keyword **_points_** at the **_global object_**, (the **_window object_**, in the browser).
  - **_Method call_**: The this variable points to the **_object that is calling the method_**.
  - The this keyword is **_not assigned a value_** until a function where it is **_defined is actually called_**.

  ***

2. **Execution Phase**:

- The code of the **_function_** that generated the **_current context_** is run **_line by line_** and **_all the variables are defined_**.
- If it's a **_global context_**, then it's a **_global code_** that is executed it.

---

**Images, Notes and Documents are Referenced from**:

- **_Copyright (c) [Jonas Schmedtman](https://twitter.com/jonasschmedtman)_**.
