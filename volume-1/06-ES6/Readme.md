# ECMAScript 6(ES6): ECMAScript 2015

**ES6(ES2015), ES5(ES2016), ES6(ES2017)**:

- Well **_supported_** in all **_modern_** browser. But **_no support_** in **_older browsers_**.
- Can **_use most features_** in production with **_transpiling and poyfilling (converting to ES5)_**.

## In this Chapter ES6(ES2015):

- Variable Declaration with **_let_** and **_const_**.
- Block and IFFEs
- String
- Arrow Function
- Destructuring
- Arrays
- The Spread Operator
- Rest and Default Parameters
- Maps
- Classes and subclasses.

## Variable Declaration: Let And Const:

- In ES6 we no longer use var.
- But instead we use const if we have a variable that's not gonna change its value over time.
- We use let if we want to change the value of the vairable.
- Variables declared with **_var_** in ES5 are **_function-scoped_**, but variables declared with **_let and const_** is ES6 are **_block-scoped_**.
- **_block-scoped_**: A block-scoped is simply all the code that is wrapped between block curly braces.
- **_function-scoped_**: A function-scoped is simply all the code that is wrapped between function curly braces.
- **_Let_**: For variables that will change the value overtime in the block.
- **_Const_**: For variable that can not be reassigned, so that are constant throughout in the block.

## Strings:

- **Template Literals**:
- **startsWith()**
- **includes()**
- **endsWith()**
- **repeat()**

---

**Arrow Function**

## Arrow Function and `this` keyword:

- Unlike normal functions, arrow functions don't get their own this keyword (Arrow function donot have a this keyword).
- They simply use the this keyword of function they are written in. And so we say that have a lexical this variable.
- Arrow function share lexical this keyword from surrounding.

## Destructuring:

Destructuring gives us a very convenient way to extract data from a data structure like an object or an array.

## Arrays:

- **reduce(per, cur, index)**: reduce an array to a single value(ES5).
- **from()**: transform this node list to an array.
- **for-of loop**: This loop combines the easy to use for each with the for loop.
- **findIndex()**
- **find()**

## Spread Operator(...):

- Spread operator is a very convenient way to expand elements of an array in places like arguments and function calls.
- `The spread operator takes an array, and basically transforms it into single value.`

## Rest Parameters:

- Rest parameters use the same notation with the three dots but actually rest parameters are the exact opposite of the spread operator.
- `The rest parameters receive a couple of single values and transforms them into an array when we call a function with multiple parameters.`

**Arguments keyword**:

- In ES5, if we want to receive an undefined arguments number of arguments,
- then we simply don't define any parameters for our function,
- then just use the arguments keyword.
- And remember the arguments keyword, or variable is very similar to the this variable
- and it's a variable that each execution context get access too.
- This is special variable that we have access to in all function.

## Default Parameters:

We use them whenever we want one or more parameters of a function to be preset, so we want them to have a default value.

## Map:

- A very common use of JavaScript objects is to use them as **_hash maps_**, which simply means that we map string keys to arbitrary values.
- We had **_object_** with simple keys like name, age or job, then mapped values to them like John, 27 and teacher, Now this is called a **_hash maps_**.
- A map is a new key-value data structure in ES6 and one of the big difference is that in maps, we can use anything for the keys.
- So in object we are limited to strings, but in maps we can use any kind of primitive value.
- And we can even use functions or objects as keys.
- **set()**: define a new key-value pair.
- **get()**: getting data from key.
- **size()**: getting size or length of map.
- **delete()**: delete the data with key.
- **has()**: check the key if a certain key is in the map.
- **clear()**: clear everything from the map
- **entries()**: returns all entries of map.
- **forEach()**:
- **for-of()**:

## Classes:

- They are synthetic sugar over the way we do prototype inheritance in JavaScript and that means that classes simply make it easier to implement inheritance and to create objects based on buleprints.
- So in ES5, these blueprints are called function constructors.
- And we edit methods to their prototype properties in order to make all the instances created through a function constructor inherit these methods.

- **_Static_**: The instances of static are not gonna be inherit.

- **_Class definitions are not hoisted_** : we need to first implement a class and only later in our code we can start using it.

- We can only add methods to classes, but not properties. Because inheriting properties through the object instances is not a best practices anyways.

**Classes with Subclasses**:

**Object.create()**: allows to manually set the prototype of an object.

---

**Images, Notes and Documents are Referenced from**:

**_Copyright (c) [Jonas Schmedtman](https://twitter.com/jonasschmedtman)_**.
