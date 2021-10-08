# Function

## Default Parameters

```js
const bookings = [];
const createBooking = function (
  flightNum,
  numPassenger = 1,
  price = 199 * numPassenger
) {
  // ES6
  // numPassenger = numPassenger || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);

// Skip the parameter
createBooking("LH123", undefined, 1000);
```

## Passing Arguments:

- In programming, there are two terms that are used all the time when dealing with function.
- Which is **_passing by value_**, and **_passing by reference_**.
- So JavaScript does not have passing by reference, **_only passing by value_**. Even though it looks like it's passing by reference.
- For objects, we do in fact pass in a reference, so the memory address of the object. However, that reference itself is still a value. It's simply a value that contains a memory address.
- Basically we **_pass the a reference_** to the function but **_we do not pass by reference_** and this is an important distinction.

## First-Class and Higher-Order Functions:

**First-Class**:

- JavaScript is language that has **_first-class functions _** which in technical terms functions are so-called first citizens.
- In practice, that means that functions are simply treated as values.
- Functions are just another type of objects in JavaScript. And since **_object are values_** functions are **_values too_**.

1. **_Storing them in variables or properties_**
2. **_Pass Functions as arguments to OTHER functions_**
3. **_Return functions FROM function_**
4. **_Call methods on functions_**:
   ***

**Methods that we can calls in functions**:

Function is really just an **_object and objects_** have methods and therefore, functions can have methods too.

- **bind()**
- **apply()**
- **call()**

Functions can even have properties:

- **fn.name** : reads the name of function.

```
NOTE: First-class functions is a just concept.
```

## Higher-Order Functions:

- A function that **_receives_** another functions as an argument, that **_returns_** a new functions , or **_both_**.
- This is only possible because of **_first-call functions_**.

  ***

**Function that receives another function**:

- The function that is passed in is a callback function, that's because the callback function will be **_called later_** by the higher order function.

  ***

**Functions that returns new function**

**Functions accepting callback functions**:

- Function that accepts other function as an input (parameter).

  ***

**Functions returning functions (Closure)**:

- Function that returns other function.

## Call() and Apply() Methods:

- Setting `this` keyword manually.

**Call() method**:

- Call method **_calls_** the function.
- In the call method the **_first arguments_** is exactly what we want to `this` keyword to point to. And as usual, **_the rest of the arguments_**.

**Apply() method**:

- The **_apply method_** does basically exactly the same thing as **_call method_**, the only difference is that **_apply does not receive a list_** of arguments after this keyword.
- But instead, it's gonna **_take an array of the arguments_**.

## Bind() Method:

- Just like a call method, **_bind_** also allows us to manually set `this` keyword for any function call.
- And the difference is that bind **_does not immediately call the function_**, instead it **_returns a new function_** where **_this keyword is bound_**.
- So it's set to whatever **_value we pass into bind_**.

```
NOTE: Order of argument is important in all methods: call, apply, bind.
```

## IIFE(Immediately Invoked Function Expression):

- Sometimes in JavaScript, what is only **_executed once and then never again_**.
- A function that **_disappears_** right after **_it's called once_**: IIFE
- One of the **_main reason_** of using IIFE is :

  - **_Data encapsulation (private)_**
  - **_Protect our variables_**, from being accidentally **_overwritten_** by some other parts of the program.

## Closures:

- Closures is not a feature that we **_explicitly use_**, so we **_don't create a closures manually_**, like we create a new array or function.
- Closures makes a function **_remember all the variables_** that existed at the **_function's birthplace_** essentially.

  ```
  The closures function remembers everything at its birthplace, by the time it was created.
  ```

- Any function **_always has access_** to the **_variable environment (VE)_** of the **_execution context_** in which the **_it was created_**.
- **Closure**: **_VE attached to the function_**, exactly as it was at the **_time and place the function was created_**.

  ```
  Closure basically have **_priority_** over the scope chain.
  ```

  ***

**Summary**

- A Closure is the **_closed-over variable environment_** of the execution context in which a **_function was created_**, even after that **_execution context is gone_**.

- A closure gives a function **_access to all the variables of its parent function_**, even after that parent function has **_returned_**. The function **_keeps a reference_** to its outer scope, which **_preserves_** the scope chain **_throughout time_**.

- A closure **_makes sure_** that a function **_doesn't loose connection_** to variables that **_existed at the function_**
  s birth place;

- A closure is **_like a backpack_** that a function **_carries around wherever it goes_**. The backpack has **_all the variables_** that were present in the **_environment where the function were created_**.

```
NOTE: We do NOT have to manually create closures, this is a javaScript feature that happens automatically.
We can't even access closed-over variables explicitly. A closure is NOT a tangible JavaScript object.
```

---

**Images, Notes and Documents are Referenced from**:

- **_Copyright (c) [Jonas Schmedtman](https://twitter.com/jonasschmedtman)_**.
