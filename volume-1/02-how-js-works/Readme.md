**What happend to our code in js engine**

- OurCode -> parser -> Conversion to Machine Code -> code Runs
  - parser:
    - Our code is parsed by a parser which basically reads our code line by line amd checks if the syntax of the code that we gave it is correct.
    - And if we make some mistakes it basically throws an error and stops the execution.
    - If everything is correct though, then the parser produces a data structure known as the Abstract Syntax Tree.
- Conversion to Machine Code:
  - Set of instructions, that can be executed directly by the computer's processor.
- Code Runs;
  - Actually runs and does its work.

**Order in which the code is run**

- Execution context:

  - All javaScript code needs to run in an environment, and these environments are called execution contexts.
  - The default execution context is always the global context.

- Global Context:

  - Code that is not inside any function
  - Associated with the global object
  - In the browser, that's the window object
  - `lastName === window.lastName`

- Execution Stack (Active Context):

  - A new function gets its new execution context.
  - And the new execution contex is put on top of the current contex, forming the so-called Execution Stack.

- Execution Context Object:

  - We can associate an execution context with an object.
  - When a function is called, a new execution context is put on top of the execution stack.
  - And This Hapeens in two phases: Creation phase, Execution phase

- Creation Phase:

  - Creation of the varibale Object (VO);
  - Creation of the scope chain
  - Determine value od thi 'this' variable

- Execution Phase:

  - The code of the function that generated the current context is ran line by line and all the variables are defined.
  - If it's a global context, then it's a global code that is executed it.

  - **_Variable Object_**:

    - The argument object is created, which contains all the arguments that were passed into the function
    - Code is scanned for **_function declaration_**: for each function, a property is created in the Variable Object, **_pointing to the function_**.
    - Code is scanned for **_varibale declaration_**: for each variable, a property is created in the Variable Object, and set to undefined.

  - **_Scope Chain (Scoping)_**:

    - Scoping answer the question "where can we access a certain variable"
    - `Each new function creates a scope`: the space/evnironment, in which the variables it define are accessible.
    - `Lexical Scoping`: a function that is lexically within another function gets access to the scope of the outer function (parent function).

  - **_The 'This' Keyword_**:

    - The 'this' variable is a variabl that each and every exection context gets.
    - It stored in the execution context object.
    - `Regular function call`: the this keyword points at the global object, (the window object, in the browser).
    - `Method call`: The this variable points to the object that is calling the method.
    - The this keyword is not assigned a value until a functio where it is defined is actually called.
