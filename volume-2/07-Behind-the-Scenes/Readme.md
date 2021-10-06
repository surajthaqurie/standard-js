## Behind The Scenes

**JavaScript**:

```
JAVASCRIPT IS A HIGH_LEVEL,
OBJECT-ORIENTED, MULTI-PARADIGM
PROGRAMMING LANGUAGE.
```

---

## JavaScript Engine and Runtime:

**JavaScript Engine**:

- JavaScript engine is simply a computer program that**_ executes _**JavaScript code.
- There are a lot of steps involved in doing that but essentially executing JavaScript code is what an engine does.
- Now every browser has its own JavaScript engine but probably the most well known engine is Google's **_V-8_**.
- The V-8 engine powers Google Chrome but also Node.js which is that JavaScript runtime. So the one that we can use to build server side applications with JavaScript outside of any browser.
- Any JS engine always contains a call stack and a heap.
- **_Call Stack_**:
  - The call stack is where our code is actually executed using something called execution contexts.
- **_Heap_**:
  - The heap is an unstructured memory pool which stores all the objects that our application needs.

**_Compilation vs Interpretation_**:

- The computer's processor only understands 0s and 1s (binary) and that's therefore every single computer program ultimately needs to be converted into this machine code.
- And this can happen using **_compilation or interpretation_**.
- **_Compilation_**:
  - In compilation, the entire source code is converted into machine code at once, and written to a binary files that can be executed by a computer.
  - First machine code is built and then it is executed in the CPU so in the processor.
  - And the execution can happen way after the compilation of course.
  - For example, any application that you're using on your computer right now has been compiled before and you're now executing it way after it's compilation.
- **_Interpretation_**:
  - There is an interpreter which runs through the source code and executes it line by line.
  - So here we do not have the same two steps as before, Instead the code is read and executed all at the same time.
  - Of course the source code still needs to br converted into machine code but it simply happens right before it's executed and not ahead of time.
  - Now JavaScript used to be a purely interpreted language but the problem with interpreted language but the problem with interpreted languages is that they are much, much slower than compiled languages.
  - But now with modern JavaScript and filly fledged web application that we built and use today, low performance is no longer acceptable.
  - Now many people still think that JavaScript is an interpreted language but that's not really true anymore.
  - So instead of simple interpretation modern JavaScript engine now use a mix between compilation and interpretation which is called **_just-in-time compilation_**.
- **_Just-in-time compilation_**:
  - Thi approach basically compiles the entire code into machine code at once and then executes it right away.
  - So we still have the two steps of regular ahead of time compilation:
    - There is no portable file to execute.
    - And the execution happens immediately after a compilation.
  - And this is perfect fot JavaScript as it's really a lot faster than just executing code line by line.

---

**Modern Just-in-line Compilation**:

**_First Step_**:

- So as a piece of JavaScript code enters the engine,the first step is to parse the code which essentially means to read the code.
- During the parsing process, the code is parsed into a data structure called the **_abstract syntax tree(AST)_**.
- This works by first splitting up each line of code into pieces that are meaningful to the language like the const or function keywords, and then saving all these pieces into the tree in a structured way.
- This step also checks if there are any syntax errors and the resulting tree will later be used to generate the machine code.
- So this tree has absolutely nothing to do with the DOM. It is not related in any way. It's just a representation of our entire code inside the engine.

**_Second Step_**:

- The next step is compilation which takes the **_generated AST_** and **_compiles_** it into **_machine code_**.
- This machine code then gets executed right away because remember modern JavaScript engine use **_just-in-time compilation_**. And remember execution happens in the JavaScript engines **_call stack_**.
- We have our code running so we can finish here, Right?
- Well, not so fast because modern JavaScript engines actually have some pretty clever **_optimization strategies_**.
  - ## **_optimization strategies_**:
    - They do is to create a very unoptimized version of machine code in the beginning just so that it can start executing as fast as possible.
- Then in the background, this code is being optimized and recompiled during the already running program execution.
- And this can be done most of the times and after each optimization the **_unoptimized code is simply swept for the new more optimized code_** without ever stopping execution of course.
- And this process is what makes modern engines such as the **_V-8_** so fast and all this **_parsing, compilation and optimization_** happens in some **_special threads inside the engine_** that we cannot access from our code.
- So completely separate from the main thread that is basically running into call stack executing our own code.

`Now different engines implements in slightly different ways, but in a nutshell this is what modern just-in-time compilation looks like for JavaScript`.

---

**JavaScript Runtime**:

- We can imagine a JavaScript runtime as a big box or a big container which includes all the things that we need in order to use JavaScript in this case, **_in the browser_**.
- **_And to heart of any JavaScript, runtime is always a JavaScript engine_**.
- Without an engine there is no runtime and there is no JavaScript at all.
- However the engine alone is not enough. In order to work properly, **_we also need access to the web APIs_**, So that's everything **_related to the DOM_** or timers or even the console.log that we use all the time.

  - **_Web APIs_**:
    - So essentially web APIs are functionalities **_provided to the engine, accessible on window object_** but which are actually not part of the JavaScript language itself.
    - JavaScript simply gets access to these APIs through the **_global window object_**.

- But it still makes sense that the web APIs are also part of the runtime, because again a runtime is just like a box that contains all the JavaScript related stuff that we need.
- Next a typical JavaScript runtime also includes a so called **_callback queue_**.
  - **Callback queue**:
    - This is a data structure that contains all the **_callback functions_** that are ready to be executed.
    - For example we attach event handler functions to DOM elements like a button to react to certain events.
    - And these event handler functions are also called **_callback functions_**. And here is how that actually works behind the scenes.
- So the first thing that actually happens after the event is that the callback function is put into the callback queue.
- Then when the stack is empty the callback function is passed to the stack so that it can be executed. And this happens by something called the **_event loop_**.

  - **_Event Loop_**:

    - The event loop takes callback functions from the callback queue and puts them in the call stack so that they can be executed.
    - The event loop is non-blocking concurrency model.

```
    The JavaScript can exist outside of browsers, for example, in Node.js.
    And so here is what the node JS JavaScript runtime looks like.
    It's pretty similar, but since we don't have a browser of course, we can't have the web APIs because it's the browser who provides these.
    Instead we have multiple C ++ bindings and a so called thread pool.
```

---

## Execution Contexts and Call Stack

Executions context is an environment in which a piece of JavaScript is executed. Stores all the necessary information fo some code to be executed. Such has local variables or arguments passed into a function.
So JavaScript code always run inside the execution context.

- **One execution context per function**:

  - For each function call, a new execution context is created.
  - All together make the call stack.
  - And the engine basically keep waiting for callback functions to arrive.

Basically in execution context there are 3 steps are done:

#### Creation of **_global context_** (for top-level code).

- **Global context** :

  - In any JavaScript project, no matter how large it is, there is **_only ever one global execution context_**.
  - It'a always there as the **default context**, and it's where **_top level code_** code will execute.
  - And that is created for code that is not inside any function (top-level).
  - `Window is the global object od javaScript and browser`.

#### Execution of top-level code (inside global EC):

#### Execution of functions and waiting for callbacks:

- **_One execution context per function_**:

  - For each function call, a new execution context is created.
  - All together make the call stack.
  - And the engine basically keep waiting for callback functions to arrive.

- `Technically, values only become known during execution`.

---

## Inside Execution context:

- **_Variable Environment_**:
  - let, const and var declaration
  - Functions
  - arguments object
- **Scope chain**:
  - It basically consists of references to variables that are located inside or outside of the current function.
  - And to keep track of the scope chain, it is stored in each execution context.
- **This keyword**:
  - Finally, each context also gets a special variables called **_this_** keyword.

The content of the execution context, so variable environment, scope chain and this keyword is generated in a so
called creation phase, which happens right before executions.

```
The execution contexts belonging to arrow functions, do not get
their own arguments keyword, nor do they get the this keyword.

Arguments keyword: is array of passed arguments of functions, and only available in all "regular" function (not Arguments keyword
Basically the arrow function don't have the arguments object and the this keyword.

Instead, they can use the arguments object and the this keyword form their closest regular function parent.
```

**Call Stack**:

- "Place" where execution contexts get stacked on top of each other, to keep track of where we are in the execution.
- The execution context that is on top of the stack, is the one that is currently running.
- And when its finished running it removed form the stack, and execution will go back to the previous execution context.

---

**Variable Environment**:

- How variables are actually created in JavaScript.
- So in JavaScript we have a mechanism called **_hoisting_**.
- **_Hoisting_**:
  - Makes some types of variables accessible/usable in the code before they are actually declared. "Variables lifted to the top of their scopes.
- **_Behind the scenes_**:

  - **_Before execution_**, code is scanned for variable declarations, and for each variable, a new property is created in the **_variable environment object_**.

  |                                | Hoisted? | Initial Value(before declared)          | Scope                                      |
  | ------------------------------ | -------- | --------------------------------------- | ------------------------------------------ |
  | Function declarations          | Yes      | Actual function                         | Block (In strict mode otherwise: Function) |
  | var variable                   | Yes      | undefined                               | Function                                   |
  | let and const variables        | No       | <uninitialized>,TDZ(temporal dead zone) | Block                                      |
  | Function expressions and arrow |          | Depends if using var or let/const       |                                            |

  - **_TDZ (Temporal Dead Zone)_**:
    - `ReferenceError: cannot access 'variable' before initialization`.
    - `Makes it easier to avoid and catch errors`: accessing variables before declaration is bad practice and should be avoided;
    - `Makes const variables actually work`

  **Scope chain**:

- It is an order in which functions are **_written in the code_**.
- Has **_nothing_** to do with order in which functions were **_called!_**

- **_Scoping_**:

  - How out program's variables are **_organized_** and **_accessed_**.
  - "Where do variables live?" or "Where can we access a certain variable, and where not?"

- **_Lexical scoping_**:

  - Scoping is controlled by **_placement_** of functions and blocks in the code;

- **_Scope_**:

  - It is a space or environment in which a certain variable is **_declared_** (variable environment in case of functions).
  - There is **_global_** scope, **_function_** scope, and **_block_** scope.
  - Global Scope: outside of **_any_** function or block, and variable declared the global scope are accessible **_everywhere_**.
  - Function Scope: variables are only are accessible only **_inside function NOT_** outside. Also called local scope.
  - Block Scope: variables are accessible only **_inside block_** (block scoped), **_HOWEVER_**, this only applies to **_let_** and **_const_** variables. And functions are **_also block scoped_** (only in strict mode)

- **_Scope of a variable_**:
  - The entire region of our code where a certain variable can be **_accessed_**.
  - Every scope always has access to all variable from its **_outer scopes_**(parent scopes) but not child variable.

---

## This keyword:

- The this keyword or variable is special variable that is created for every execution context(every function).
- In general terms, the this keyword will always take the value of(points to) owner of the function in which the **_this_** keyword is used.
- The value of this keyword is **_NOT_** static. It depends on **_how_** the function is actually called, and its value is only assigned when the function is **_actually called._**

|                                                   |      | value                                                                               |
| :------------------------------------------------ | :--- | :---------------------------------------------------------------------------------- |
| Method                                            | this | <Object that is calling the method>                                                 |
| Simple function call                              | this | undefined (in strict mode only, otherwise it points **_window object_** of browser) |
| Arrow function(do not get their own this keyword) | this | <this of surrounding (parent) function (lexical this)>                              |
| Event listener                                    | this | <DOM element that the handler is attached to>                                       |

|new, call, apply, bind|

```
 **_this_** does **_NOT_** point to the function itself,
 and also **_NOT_** the its variable environment (function)
```

**_Basically an arrow function inherits the this keyword from the parent scope_**.

**Arguments keyword**:

- The arguments keyword **_only available_** in **_regular functions_**: function expression and function declaration but not in **_arrow function_**.

---

**Regular function vs Arrow function**
**Primitives vs Objects(reference types)**:

- **_Primitives_**:

  - When we declare a variable, first JavaScript will create a so-called unique identifier with the variable name.
  - Then a piece of memory will be allocated with a certain address and finally the value would be stored in memory at the specified address.
  - And remember this all happens in a call stack where **_primitive value_** are stored.
  - **_That the identifier actually points to the address and not to the value_**.

- **_Reference_**:

  - When a new object is created it is stored in the **_heap_**. And such as before there is memory address and then the value itself.
  - Now in the case of **_reference values_**, the identifier does actually not **_point directly to this newly created_** memory address in the heap.
  - Instead, it will point to a new piece of **_memory that's created in the stack_**. And this new piece of memory will then **_point to the object_** that's in the **_heap by using the memory address as it value_**.
  - In other word, the piece of memory in the call stack has a reference to the piece of memory in the heap, which holds object.
  - And that's the reason why we call objects reference types in this context.

  ```
  So again, when we declare a variable as an object, an identifier is created, which points to a piece of memory in the stack, which in turn points to a piece of memory in the heap.
  And that is where the object is actually stored.

  And it works this way because objects might be too large to be stored in the stack. Instead, they are stored in the heap, which is like an almost unlimited memory pool.

  And stack just keeps a reference to where the object is actually stored in the heap so that it can find it whenever necessary.
  ```

- Object.assign():
  - Essentially merge two objects and then return a new one.
  - object.assign only creates a shallow copy and a deep clone.
  - Shallow copy only copy the properties in the first level while deep clone would copy everything.
  - for deep copy : (lodash: library)
