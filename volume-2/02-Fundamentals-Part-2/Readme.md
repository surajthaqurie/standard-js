**Strict mode** ('use strict'):

- Is a special mode that we can activate in JS which makes it easier for us to write a secure JS code.
- That strict mode makes it easier to avoid accidental errors. So basically it helps to introduce tha bugs into our code and that's because of two reasons.
- First strict mode forbids us to do certain things.
- Second it creates visible errors and the developer console, where in other situations JS would just fail silently.
- It helps to write clear code, like preventing using undeclared variables.
- It introduce a short list of variable names that are reserved for features that might be added to the language a bit later (interface, private).

---

**Functions**:

- Simply a pice of code that we can reuse over and over again in code. little bit like a variable but for whole chunks of code.
- Remember a variable holds a value but a function can hold one or more complete lines of code.
- A function cannot only reuse a piece of code but it can also `receive data(parameters)` and `return data back( ***return*** keyword)`.
- `NOTE: All declarations function has local variable **_arguments_** that captures the function's invoking arguments`.
- When **_return_** is executed in function than **_it stops and exist immediately_** from that function and the value is returned to the its invoking code.
- **_Parameters_**:
  - placeholders to receive input values.
  - parameters are normal variable like **_var_** function-scoped(like local variable of a function).
- **_Arguments_**:
  - actual values of function parameters, to input data.

---

**Function Declarations vs Expressions**:

- **_Function Declarations_**:
  - The function keyword is used to declare a function a bit like we declare a variable.
- **_Function Expressions_**:
  - Assigning/Storing value of the anonymous function( without function name) in a variable. And that variable became a function. `Expression produces the value`.

```
 NOTE: Function declarations can called before they are defined in the code but Function Expressions only called after defined in the code.
```

---

**Arrow Function**:

- Special form of **_Function Expressions_** that are shorter and therefore faster to write.
- `Arrow function has no this keyword`

**Function Calling Other Function**

---

**Array**:

- **_Basic Array Operations (Methods)_**:
  - push(): adds elements to the end of an array.
  - unshift(): adds elements to the beginning of the array.
  - pop(): remove the last element of an array.
  - shift(): remove the first element of an array.
  - indexOf(): tells in which position a certain element is in the array. If element is not found then it returns -1. Strict equality testing.
  - includes(): it return true if the element is in the array and false if it's not. Strict equality testing.

---

**Object**:

- Object is a data structure in JavaScript which have key value pair with values. Each of keys is also called a property.
- **_Dot and Bracket Notation_**:
- **_Object Methods_**:
  - Any function that is attached to an object called a method.
- **_This keyword_**:

  - The this keyword or this variable is basically equal to the object on which the method is called.
  - `In other words, it is equal to the object calling the method`.

  - **_Method borrowing_**:
  - Borrow the method from one object to the other.
  - `object2.method = object1.method`.

---

**Iteration(Loop)**:

- Loops ara a fundamental aspect of every programming language because they basically allow us to automate repetitive tasks (task that we have to perform over and over again).
- **_For Loop_**:
  - For loop keeps running while condition is TRUE
- **_Break and Continue statement_**
  - Continue: to exit the current iteration of the loop and continue the next one.
  - Break: to completely terminate the whole loop
- **_Looping Backward and Loops in Loops_**
- **_While loop_**:
  - While the condition is truthy, the code from the loop body is executed.
- **_Do-While loop_**:
  - The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.
