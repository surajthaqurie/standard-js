## ES-6

- ES6(ES2015),
- ES5(ES2016),
- ES6(ES2017):

  - Well supported in all **_modern_** browser.
  - No support in older browsers.
  - `Can use ***most*** features in production with transpiling and poyfilling (converting to ES5).`

  - **In this Chapter ES6(ES2015)**:
    - Variable Declaration with `let` and `const`.
    - Block and IFFEs
    - String
    - Arrow Function
    - Destructuring
    - Arrays
    - The Spread Operator
    - Rest and Default Parameters
    - Maps
    - Classess and subclasses.

- **Variable Declaration: Let And Const**:

  - In ES6 we no longer use var.
  - But instead we use const if we have a variable that's not gonna change its value over time.
  - We use let if we want to change the value of the vairable.
  - Variables declared with **_var_** in ES5 are **_function-scoped_**, but variables declared with **_let and const_** is ES6 are **_block-scoped_**.
  - **_block-scoped_**: A block-scoped is simply all the code that is wrapped between block curly braces.
  - **_function-scoped_**: A function-scoped is simply all the code that is wrapped between function curly braces.
  - **_Let_**: For variables that will change the value overtime in the block.
  - **_Const_**: For variable that cammot be reassigned, so that are constant throughtout in the block.

- **Blocks And IFFE**
- **Strings**:

  - **_Template Literals_**: (` `${}` `)
  - **_startsWith()_**
  - **_includes()_**
  - **_endsWith()_**
  - **_repeat()_**

- **Arrow Function**
- **Arrow Function and 'this' keyword**:

  - Unlike normal functions, arrow functions don't get their own this keyword (Arrow function donot have a this keyword).
  - They simply use the this keyword of function they are written in. And so we say that have a lexical this variable.
  - Arrow function share lexical this keyword from surrounding.

- **Destructuring**:

  - Destructuring gives us a very convenient way to extract data from a data structure like an object or an array.

- **Arrays**:

  - **_reduce(per, cur, index)_**: reduce an array to a single value(ES5).
  - **_ from()_**: transform this node list to an array.
  - **_for-of loop_**: This loop combines the easy to use for each with the for loop.
  - **_findIndex()_**
  - **_find()_**

- **Spread Operator(...)**:

  - Spread operator is a very convenient way to expand elements of an array in places like arguments and function calls.
  - `The spread operator takes an array, and basically transforms it into single value.`

- **Rest Parameters**:

  - Rest parameters use the same notation with the three dots but actually rest parameters are the exact opposite of the spread operator.
  - `The rest parameters receive a couple of single values and transforms them into an array when we call a function with multiple parameters.`

- **_Arguments keyword_**:

  - In ES5, if we want to receive an undefined arguments number of arguments,
  - then we simply don't define any parameters for our function,
  - then just use the arguments keyword.
  - And remember the arguments keyword, or variable is very similar to the this variable
  - and it's a variable that each exectution context get access too.
  - This is special variable that we have access to in all function.

- **Default Parameters**:

  - We use them whenever we want one or more parameters of a function to be preset, so we want them to have a default value.

- **Map**:

  - A very common use of JavaScript objects is to use them as **_hash maps_**, which simply means that we map string keys to arbitrary values.
  - We had **_object_** with simple keys like name, age or job, then mapped values to them like John, 27 and teacher, Now this is called a **_hash maps_**.
  - A map is a new key-value data structure in ES6 and one of the big difference is that in maps, we can use anything for the keys.
  - So in object we are limited to strings, but in maps we can use any kind of primitive value.
  - And we can even use funtions or objects as keys.
  - **_set()_**: define a new key-value pair.
  - **_get()_**: getting data from key.
  - **_size()_**: getting size or length of map.
  - **_delete()_**: delete the data with key.
  - **_has()_**: check the key if a certain key is in the map.
  - **_clear()_**: clear everything from the map
  - **_entries()_**: retuns all entrie of map.
  - **_forEach()_**:
  - **_for-of_**:

- **Classes**:

  - They are synthetic sugar over the way we do prototype inheritance in JavaScript and that means that classes simply make it easier to implement inheritance and to create objects based on buleprints.
  - So in ES5, these blueprints are called function constructors.
  - And we edit mehods to thier prototype properties in order to make all the instances created through a function constructor inherit these methods.
  - **_Static_**: The instances of static are not gonna be inherit.
  - Class definitions are not hoisted : we need to first impement a class and only later in our code we can start using it.
  - We can only add methods to classes, but not properties. Because inheriting propertirs through the object instances is not a best practices anyways.

- **Classes with Subclasses**:

  - **_ Object.create()_**: allows to manually set the prototype of an object.
