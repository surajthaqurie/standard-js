# JavaScript fundamental part-2

## Strict mode ('use strict'):

- Is a **_special mode_** that we can **_activate_** in JS which makes it easier for us to write a **_secure JS code_**.
- That strict mode makes it easier to **_avoid accidental errors_**. So basically it helps to introduce tha **_bugs_** into our code and that's because of **two reasons**.

1. First strict mode **_forbids_** us to do **_certain things_**.

2. Second it creates **_visible errors_** and the developer console, where in **_other situations JS_** would just f**_ail silently_**.

- It helps to write **_clear code_**, like preventing using **_undeclared variables_**.
- It **_introduce a short list_** of variable names that are **_reserved for features_** that might be added to the language a bit **_later_** (interface, private).

## Functions:

- Simply a pice of code that we can **_reuse over and over again in code_**, little bit **_like a variable_** but for whole **_chunks of code_**.
- Remember a **_variable holds a value_** but a function can hold **_one or more complete lines of code_**.
- A function cannot only reuse a piece of code but it can also **_receive data(parameters)_** and **_return data back (`return keyword`)_**.
- When **_return_** is executed in function than **_it stops and exist immediately_** from that function and the value is **_returned to the its invoking code_**.

  ***

**Parameters**:

- placeholders to receive input values.
- parameters are normal variable like **_var_** function-scoped(like local variable of a function).

  ***

**Arguments**:

- actual values of function parameters, to input data.

`NOTE: All declarations function has local variable arguments that captures the function's invoking arguments.`

## Function Declarations vs Expressions:

**Function Declarations**:

- The function keyword is used to declare a function a bit like we declare a variable.

  ***

**Function Expressions**:

- **_Assigning/Storing_** value of the **_anonymous function_** ( without function name) **_in a variable_**. And that variable became a function. **_Expression produces the value_**.

```
 NOTE: Function declarations can called before they are defined in the code
 but Function Expressions only called after defined in the code.
```

## Arrow Function:

- Special form of **_Function Expressions_** that are shorter and therefore faster to write.
- **_Arrow function has no `this` keyword_**

  ***

**Function Calling Other Function**

## Array:

**Basic Array Operations (Methods)**:

- **_push()_**: adds elements to the end of an array.
- **_unshift()_**: adds elements to the beginning of the array.
- **_pop()_**: remove the last element of an array.
- **_shift()_**: remove the first element of an array.
- **_indexOf()_**: tells in which position a certain element is in the array. If element is not found then it returns -1. `Strict equality testing`.
- **_includes()_**: it return true if the element is in the array and false if it's not. `Strict equality testing`.

## Object:

- Object is a data structure in JavaScript which have key value pair with values. Each of keys is also called a property.

**Dot and Bracket Notation**:

**Object Methods**:

- Any function that is attached to an object called a method.

  ***

**`This` keyword**:

- The `this` keyword or `this` variable is basically equal to the object on which the method is called.
- `In other words, it is equal to the object calling the method`.

  ***

**Method borrowing**:

- Borrow the method from one object to the other.

```js
object2.method = object1.method;
```

## Iteration(Loop):

- Loops ara a fundamental aspect of every programming language because they basically allow us to automate repetitive tasks (task that we have to perform over and over again).

**For Loop**:

- For loop keeps running while condition is TRUE

  ***

**Break and Continue statement**:

- **_Continue_**: to exit the current iteration of the loop and continue the next one.
- **_Break_**: to completely terminate the whole loop

  ***

**While loop**:

- While the condition is truthy, the code from the loop body is executed.

  ***

**Do-While loop**:

- The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.

  ***

Looping Backward and Loops in Loops

---

**Images, Notes and Documents are Referenced from**:

- **_Copyright (c) [Jonas Schmedtman](https://twitter.com/jonasschmedtman)_**.
