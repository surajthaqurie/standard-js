**Default Parameters**

```
const bookings = [];
const createBooking = function (flightNum, numPassenger = 1, price = 199 * numPassenger) {
    // ES6
    // numPassenger = numPassenger || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassenger,
        price
    }
    console.log(booking);
    bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

// Skip the parameter
createBooking('LH123', undefined, 1000);
```

---

**Passing Arguments**:

- In programming, there are two terms that are used all the time when dealing with function.
- Which is **_passing by value_**, and **_passing by reference_**.
- So JavaScript does not have passing by reference, **_only passing by value_**. Even though it looks like it's passing by reference.
- For objects, we do in fact pass in a reference, so the memory address of the object. However, that reference itself is still a value. It's simply a value that contains a memory address.
- Basically we **_pass the a reference_** to the function but **_we do not pass by reference_** and this is an important distinction.

---

**First-Class and Higher-Order Functions**:

**_First-Class_**:

- JavaScript is language that has **_first-class functions _** which in technical terms functions are so-called first citizens.
- In practice, that means that functions are simply treated as values.
- Functions are just another type of objects in JavaScript. And since **_object are values_** functions are **_values too_**.

**_Storing them in variables or properties_**
**_Pass Functions as arguments to OTHER functions_**
**_Return functions FROM function_**
**_Call methods on functions_**:

- Methods that we can calls in functions:

  - Function is really just an object and objects have methods and therefore, functions can have methods too.
  - **_bind()_**
  - **_apply()_**
  - **_call()_**

- Functions can even have properties:
  - **_fn.name_** : reads the name of function.

`First-class functions is a just concept`.

---

**Higher-Order Functions**:

- A function that **_receives_** another functions as an argument, that **_returns_** a new functions , or **_both_**.
- This is only possible because of **_first-call functions_**.

**_Function that receives another function_**:

- The function that is passed in is a callback function, that's because the callback function will be **_called later_** by the higher order function.

**_Functions that returns new function_**:

---

**_Functions accepting callback functions_**

- Function that accepts other function as an input (parameter).

**_Functions returning functions (Closure)_**:

- Function that returns other function.

---

**Call() and Apply() Methods**:

- Setting **_this keyword_** manually.
- **_Call() method_**:
  - Call method calls the function.
  - In the call method the **_first arguments_** is exactly what we want to **_this keyword_** to point to. And as usual, **_the rest of the arguments_**.
- **_Apply() method_**:
  - The apply method does basically exactly the same thing as **_call method_**, the only difference is that **_apply does not receive a list_** of arguments after this keyword.
  - But instead, it's gonna **_take an array of the arguments_**.

---

**Bind() Method**:

- Just like a call method, bind also allows us to manually set this keyword for any function call.
- And the difference is that bind **_does not immediately call the function_**, instead it **_returns a new function_** where **_this keyword is bound_**.
- So it's set to whatever **_value we pass into bind_**.

`NOTE: Order of argument is important in all methods: call, apply, bind`.

---

**IIFE(Immediately Invoked Function Expression)**:

- Sometimes in JavaScript, what is only executed once and then never again.
- A function that disappears right after it's called once: IIFE
- One of the main reason of using IIFE is :

  - Data encapsulation (private)
  - Protect our variables, from being accidentally overwritten by some other parts of the program.

  ***

**Closures**:

- Closures is not a feature that we explicitly use, so we don't create a closures manually, like we create a new array or function.
- Closures makes a function **_remember all the variables_** that existed at the **_function's birthplace_** essentially.
  `The closures function remembers everything at its birthplace, by the time it was created`.
- Any function always has access to the variable environment (VE) of the execution context in which the it was created.
- **_Closure_**: VE attached to the function, exactly as it was at the time and place the function was created.
- `Closure basically have **_priority_** over the scope chain`.

```
A Closure is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone.

A closure gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout time.

A closure makes sure that a function doesn't loose connection to variables that existed at the function
s birth place;

A closure is like a backpack that a function carries around wherever it goes. The backpack has all the variables that were present in the environment where the function were created.

 NOTE: We do NOT have to manually create closures, this is a javaScript feature that happens automatically. We can't even access closed-over variables explicitly. A closure is NOT a tangible JavaScript object.

```
