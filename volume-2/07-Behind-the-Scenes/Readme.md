## Behind The Scenes

**JavaScript**:

```
JAVASCRIPT IS A HIGH_LEVEL,
OBJECT-ORIENTED, MULTI-PARADIGM
PROGRAMMING LANGUAGE.
```

## JavaScript Engine and Runtime:

### JavaScript Engine:

- JavaScript engine is **_simply a computer program_** that **_executes JavaScript code._**
- There are a **_lot of steps_** involved in doing that but essentially **_executing JavaScript code_** is **_what an engine does_**.
- Now every browser has its own JavaScript engine but probably the most well known engine is **_Google's V-8_**.
- The **_V-8 engine powers Google Chrome_** but also **_Node.js which is that JavaScript runtime_**. So the one that we can use to build server side applications with **_JavaScript outside of any browser_**.
- Any JS engine always contains a **_call stack_** and a **_heap_**.

  ***

**Call Stack**:

- The **_call stack_** is where our **_code_** is actually **_executed_** using something called **_execution contexts_**.

**Heap**:

- The **_heap_** is an **_unstructured memory pool_** which **_stores all the objects_** that our application needs.

  ***

### Compilation vs Interpretation:

- The **_computer's processor_** only understands **_0s and 1s (binary)_** and that's therefore **_every single computer program_** ultimately **_needs_** to be **_converted into this machine code_**.
- And this can happen using **_compilation or interpretation_**.

**Compilation**:

- In compilation, the **entire source code** is converted into **_machine code at once_**, and **_written to a binary files_** that can be **_executed by a computer_**.
- First **_machine code is built_** and then it is **_executed in the CPU so in the processor_**.
- And the **_execution_** can happen way **_after the compilation of course_**.
- **_For example_**, any **_application_** that you're using on your computer **_right now_** has been **_compiled before_** and you're **_now executing it way after it's compilation_**.

  ***

**Interpretation**:

- There is an **_interpreter_** which runs through the **_source code and executes it line by line_**.
- So here we **_do not_** have the **_same two steps as before_**, Instead the code is **_read and executed all at the same time_**.
- Of course the **_source code_** still **_needs_** to be **_converted_** into **_machine code_** but it simply **_happens right before it's executed and not ahead of time_**.

- **_Now JavaScript_** used to be a **_purely interpreted language_** but the **_problem with interpreted_** language is that they are **_much, much slower than compiled languages_**.
- But now with **_modern JavaScript_** and **_filly fledged web application_** that we built and use today, **_low performance is no longer acceptable_**.
- Now **_many people still think_** that **_JavaScript_** is an **_interpreted language_** but that's not **_really true anymore_**.
- So instead of **_simple interpretation modern JavaScript engine_** now use a **_mix between compilation and interpretation_** which is called **_just-in-time compilation_**.

---

**Just-in-time compilation**:

- This approach basically **_compiles the entire code into machine code at once and then executes it right away_**.
- So we still have the **_two steps_** of regular ahead of **_time compilation_**:
  1. There is **_no portable file to execute_**.
  2. And the **_execution happens immediately after a compilation_**.
- And this is perfect fot **_JavaScript_** as it's really a lot **_faster than just executing code line by line_**.

## Modern Just-in-line Compilation:

**First Step**:

- So as a piece of JavaScript **_code enters the engine_**,the first step is to **_parse the code_** which essentially **_means to read the code_**.
- During the **_parsing process_**, the code is **_parsed into a data structure_** called the **_abstract syntax tree(AST)_**.
- This works by **_first splitting up each line of code into pieces_** that are **_meaningful to the language_** like the const or function keywords, and then **_saving all these pieces into the tree in a structured way_**.
- This step **_also checks_** if there are **_any syntax errors_** and the **_resulting tree will later be used to generate the machine code_**.
- So **_this tree_** has absolutely n**_othing to do with the DOM_**. It is not related in any way. It's just a **_representation of our entire code inside the engine_**.

  ***

**Second Step**:

- The next step is compilation which takes the **_generated AST_** and **_compiles_** it into **_machine code_**.
- This **_machine code then gets executed_** right away because remember modern JavaScript engine use **_just-in-time compilation_**. And **_remember execution happens_** in the JavaScript engines **_call stack_**.
- We have our code running so we can finish here, Right?
- Well, not so fast because **_modern JavaScript engines_** actually have some pretty clever **_optimization strategies_**.

  **Optimization strategies**:

  - They do is to create a very **_unoptimized version of machine code_** in the beginning just so that it can **_start executing as fast as possible_**.
  - Then **_in the background_**, this code is being **_optimized and recompiled_** during the already **_running program execution_**.
  - And this can be **_done most of the times_** and **_after each optimization_** the **_unoptimized code is simply swept for the new more optimized code_** without ever stopping execution of course.
  - And this process is what **_makes modern engines_** such as the **_V-8_** so fast and all this **_parsing, compilation and optimization_** happens in some **_special threads inside the engine_** that we cannot access from our code.
  - So completely separate from the **_main thread_** that is basically **_running into call stack executing our own code_**.

```
  Now different engines implements in slightly different ways, but in a nutshell this is
  what modern just-in-time compilation looks like for JavaScript.
```

## JavaScript Runtime:

- We can imagine a **_JavaScript runtime as a big box or a big container_** which includes **_all the things that we need_** in order **_to use JavaScript_** in this case, **_in the browser_**.
- **_And to heart of any JavaScript, runtime is always a JavaScript engine_**.
- **_Without an engine there is no runtime and there is no JavaScript at all_**.
- However the **_engine alone is not enough_**. In order to work properly, **_we also need access to the web APIs_**, So that's everything **_related to the DOM_** or timers or even the console.log that we use all the time.

  ***

**Web APIs**:

- So essentially **_web APIs_** are functionalities **_provided to the engine, accessible on window object_** but which are actually **_not part of the JavaScript language itself_**.
- JavaScript simply gets access to these APIs through the **_global window object_**.

- But it **_still makes sense_** that the web APIs are **_also part of the runtime_**, because again a **_runtime is just like a box that contains all the JavaScript_** related stuff that we need.
- Next a typical JavaScript runtime also includes a so called **_callback queue_**.

  ***

**Callback queue**:

- This is a **_data structure_** that contains all the **_callback functions_** that are **_ready to be executed_**.
- **_For example_** we attach **_event handler functions_** to DOM elements like a button **_to react to certain events_**.
- And these **_event handler functions_** are also called **_callback functions_**. And here is how that **_actually works behind the scenes_**.
- So the **_first thing that actually happens after the event_** is that **_the callback function_** is **_put into the callback queue_**.
- Then when the **_stack is empty_** the callback function is **_passed to the stack_** so that **_it can be executed_**. And this **_happens_** by something called the **_event loop_**.

  ***

**Event Loop**:

- The event loop **_takes callback functions_** from the **_callback queue_** and puts them in the **_call stack so that they can be executed_**.
- **_The event loop is non-blocking concurrency model_**.

  ```
    - The JavaScript can exist outside of browsers, for example, in Node.js.
    - And so here is what the Node.JS JavaScript runtime looks like.
    - It's pretty similar, but since we don't have a browser of course, we can't have the web APIs
      because it's the browser who provides these.
    - Instead we have multiple C++ bindings and a so called thread pool.
  ```

## Execution Contexts and Call Stack

- Executions context is **_an environment_** in which a piece of **_JavaScript is executed_**. **_Stores_** all the necessary information of some **_code to be executed_**. Such has **_local variables or arguments passed into a function_**.

- **_So JavaScript code always run inside the execution context_**.

  ***

Basically **_in execution context_** there are **_3 steps are done_**:

1. **Creation of global context (for top-level code)**:

- **Global context** :

  - In any JavaScript project, **_no matter how large_** it is, there is **_only ever one global execution context_**.
  - It'a always there as the **_default context_**, and it's where **_top level code_** code will execute.
  - And that is **_created for code_** that is **_not inside any function (top-level)_**.
  - **_Window is the global object od javaScript and browser_**.

    ***

2. **Execution of top-level code (inside global EC)**:

3. **_Execution of functions and waiting for callbacks_**:

   **One execution context per function**:

   - **_For each function call_**, a **_new execution context is created_**.
   - **_All together make the call stack_**.
   - And the **_engine_** basically **_keep waiting_** for **_callback functions to arrive_**.

```
Technically, values only become known during execution.
```

## Inside Execution context:

1. **Variable Environment**:

- let, const and var declaration
- Functions
- arguments object

  ***

2. **Scope chain**:

- It basically consists of references to variables that are located inside or outside of the current function.
- And to keep track of the scope chain, it is stored in each execution context.

  ***

3. **This keyword**:

- Finally, each context also gets a special variables called **_this_** keyword.

  ***

The content of the execution context, so variable environment, scope chain and this keyword is generated in a so
called creation phase, which happens right before executions.

```
The execution contexts belonging to arrow functions, do not get
their own arguments keyword, nor do they get the this keyword.

Arguments keyword: is array of passed arguments of functions, and only available in all "regular"
function (not Arguments keyword basically the arrow function don't have the arguments object and the
this keyword.

Instead, they can use the arguments object and the this keyword form their closest regular function parent.
```

**Call Stack**:

- "Place" where execution contexts get stacked on top of each other, to keep track of where we are in the execution.
- The execution context that is on top of the stack, is the one that is currently running.
- And when its finished running it removed form the stack, and execution will go back to the previous execution context.

## Variable Environment:

- How variables are actually created in JavaScript.
- So in JavaScript we have a mechanism called **_hoisting_**.

**Hoisting**:

- Makes some types of variables accessible/usable in the code before they are actually declared. "Variables lifted to the top of their scopes.

  ***

**Behind the scenes**:

- **_Before execution_**, code is scanned for variable declarations, and for each variable, a new property is created in the **_variable environment object_**.

  |                                | Hoisted? | Initial Value(before declared)           | Scope                                      |
  | ------------------------------ | -------- | ---------------------------------------- | ------------------------------------------ |
  | Function declarations          | Yes      | Actual function                          | Block (In strict mode otherwise: Function) |
  | var variable                   | Yes      | undefined                                | Function                                   |
  | let and const variables        | No       | `uninitialized`,TDZ (temporal dead zone) | Block                                      |
  | Function expressions and arrow | -        | Depends if using var or let/const        | -                                          |

  ***

- **TDZ (Temporal Dead Zone)**:
  - **_ReferenceError_**: `cannot access 'variable' before initialization`.
  - **_Makes it easier to avoid and catch errors_**: accessing variables before declaration is bad practice and should be avoided;
  - **_Makes const variables actually work_**

## Scope chain:

- It is an order in which functions are **_written in the code_**.
- Has **_nothing_** to do with order in which functions were **_called!_**

**Scoping**:

- How out program's variables are **_organized_** and **_accessed_**.
- **_Where do variables live?_** or **_Where can we access a certain variable, and where not?_**

**Lexical scoping**:

- Scoping is controlled by **_placement_** of **_functions and blocks_** in the code;

**Scope**:

- It is a **_space or environment_** in which a certain variable is **_declared_** (variable environment in case of functions).
- There is **_global_** scope, **_function_** scope, and **_block_** scope.

  ***

1. **_Global Scope_**:

- outside of **_any_** function or block, and variable declared the global scope are accessible **_everywhere_**.

  ***

2. **_Function Scope_**:

- variables are only are accessible only **_inside function NOT_** outside. Also called local scope.

  ***

3. **_Block Scope_**:

- variables are accessible only **_inside block_** (block scoped), **_HOWEVER_**, this only applies to **_let_** and **_const_** variables.
- And functions are **_also block scoped_** (only in strict mode)

  ***

**Scope of a variable**:

- The **_entire region of our code_** where a certain variable can be **_accessed_**.
- Every **_scope always has access to all variable_** from its **_outer scopes_**(parent scopes) but **_not child variable_**.

## `This` keyword:

- The `this` keyword or variable is **_special variable_** that is **_created for every execution context(every function)_**.
- In general terms, the `this` keyword will **_always take the value of(points to) owner of the function_** in which the `this` keyword is used.
- The value of `this` keyword is **_NOT_** static.
- It depends on **_how_** the function is actually **_called_**, and **_its value_** is **_only assigned_** when the function is **_actually called._**

|                                                   |      | value                                                                                     |
| :------------------------------------------------ | :--- | :---------------------------------------------------------------------------------------- |
| Method                                            | this | `Object` that is calling the method                                                       |
| Simple function call                              | this | **_undefined_** (in strict mode only, otherwise it points **_window object_** of browser) |
| Arrow function(do not get their own this keyword) | this | `this` of surrounding (parent) function (lexical this)                                    |
| Event listener                                    | this | `DOM` element that the handler is attached to                                             |
| new, call, apply, bind                            | -    | -                                                                                         |

```
NOTE:
this does NOT point to the function itself, and
also NOT the its variable environment (function)
```

- **_Basically an arrow function inherits the this keyword from the parent scope_**.

  ***

**Arguments keyword**:

- The arguments keyword **_only available_** in **_regular functions_**: function expression and function declaration but not in **_arrow function_**.

---

**Regular function vs Arrow function**:

## Primitives vs Objects (reference types):

**Primitives**:

- **_When we declare a variable_**, first JavaScript will **_create_** a so-called **_unique identifier with the variable name_**.
- Then a **_piece of memory_** will be **_allocated with a certain address_** and **_finally the value_** would be **_stored in memory at the specified address_**.
- And remember this **_all happens in a call stack_** where **_primitive value_** are stored.
- **_That the identifier actually points to the address and not to the value_**.

  ***

**Reference**:

- When a **_new object is created_** it is stored in the **_heap_**. And such as before **_there is memory address and then the value itself_**.
- Now in the case of **_reference values_**, the **_identifier_** does actually not **_point directly to this newly created_** memory address in the heap.
- Instead, it will **_point_** to a new piece of **_memory that's created in the stack_**.
- And this new piece of memory will then **_point to the object_** that's in the **_heap by using the memory address as it value_**.
- In other word, the **_piece of memory_** in the **call stack** has a **_reference to the piece of memory in the heap, which holds object_**.
- And that's the reason why we call **_objects reference types in this context_**.

```
SUMMARY:

  So again, when we declare a variable as an object, an identifier is created, which points
  to a piece of memory in the stack, which in turn points to a piece of memory in the heap.
  And that is where the object is actually stored.

  And it works this way because objects might be too large to be stored in the stack. Instead,
  they are stored in the heap, which is like an almost unlimited memory pool.

  And stack just keeps a reference to where the object is actually stored in the heap so that
  it can find it whenever necessary.
```

---

**Object.assign()**:

- Essentially **_merge two objects and then return a new one_**.
- object.assign **_only creates_** a **_shallow copy and a deep clone_**.
- **_Shallow copy_**: only copy the properties in the first level while **_deep clone_**: would copy everything.
- **_for deep copy_** : (lodash: library)

---

**Images, Notes and Documents are Referenced from**:

- **_Copyright (c) [Jonas Schmedtman](https://twitter.com/jonasschmedtman)_**.
