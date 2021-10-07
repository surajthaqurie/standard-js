# JavaScript fundamental part-1

Value and Variables

## Data Types

**Primitive**: Number, String, Boolean, Undefined, Null, Symbol, BigInt

**Object**

---

**_typeof()_** Operator: to check the datatype

---

**let, const and var**:

- **_let, const_** : block-scoped;
- **_var_**: function-scoped;

## Basic Operators:

- Math Operators,
- Assignment operators,
- Comparison operators

---

- String and Template Literals
- if/else statements
- Switch Statement
- The Conditional (Ternary) Operator:

---

## Type Conversion and Coercion:

- **Type Conversion**: Number(), String(), Boolean()
- **Type Coercion** : (+)operator: String, (- ,\* , /, logical operators ): Number

## Truthy and Falsy values:

- **_Falsy values_**: `0, '', undefined, null , NaN` are **_falsy value_** when we attempt to **_converted_** them to a **_boolean_**.
- **_Truthy values_**: everything else are truthy value when we attempt to converted them to a boolean.
  ```js
  if (Boolean(value)) {
  }
  ```

---

**isNan()**: true ? 'not a number' : 'a number'.

## Interaction:

- alert
- prompt
- confirm

## Equality Operators (== / ===):

- **_===_**: strict equality operator (value with same data type)
- **_==_**: loose equality operator (just same value)

## Different Operator (!== / !===):

- **_!==_**: strict different operator (value with same data type)
- **_!=_**: loose different operator (just value without data type)

## Logical Operator :

There are three properties the logical operator can perform:

- They can use any data types
- They can return ANY data type.
- Short-Circuiting.

**Boolean Logic**:

- **_AND(&&)_**: true when all true
- **_OR(||)_**: true when one true
- **_NOT(!)_**: Inverts true/false value.

## Statements and Expressions:

- **Expressions**: a piece of code that produces a value
- **Statements**: does not produce a value on itself

---

```
JavaScript has dynamic typing: We do not have to manually define the data type of the value stored in a value.
Instead, data type are determined automatically.
```

---

## A Brief History Of Javascript

**In 1995**,

- the **_Netscape Navigator_** hired a guy named **_Brendan Eich_** he creates the `very first version of javaScript in just 10 days`.
- It was called **_Mocha_**, but already had many fundamental features of modern JavaScript.

  ***

**Then in 1996**,

- Mocha changes to **_LiveScript_** and then to **_JavaScript_**, in order to attract Java developers.
- However, **_JavaScript has almost nothing to do with Java_**.
- Microsoft launched the Internet Explorer(IE), **_copying JavaScript from Netscape_** and calling it **_JScript_**.

  ***

**In 1997**,

- With a need to standardize the language ECMA(European Computer Manufacturer's Association) releases **_ECMAScript 1 (ES1)_**, the first **_official standard for JavaScript_**(ECMAScript is the standard, JavaScript the language in practice).

  ***

**In 2009**,

- **_ES5 (ECMAScript 5)_** is released **_with lots of great new features_**.

  ***

**In June 2015**,

- **_ES6/ES2015 (ECMAScript 2015)_** was released: **_the biggest update to the language ever!_**.

- ECMAScript changes to an **_annual release cycle_** in order to ship less features per update.(a small number of new features per year, much easier for everyone to keep up to date).

  ***

**2016 - ∞**,

- Release of ES2016 / ES2017 / ES2018 / ES2019 / ES2020 / ES2021 / ... / ES2089.

## Backwards Compatibility:

- Old features are never removed.
- Not really new versions, just **_incremental updates_**(release).
- Websites keep working forever

```
 Don't Break the code
```

`JavaScript is Not Forward Compatibility: basically because current browsers do not understand code form the future.`

## How to use Modern JavaScript Today:

Two distinct scenarios:

**During development**:

- Simply use th latest Google Chrome!.
- This will then ensure that all the features will works as well.

  ***

**During production**:

- Use **_Babel_** to transpile and polyfill code (converting back to ES5 to ensure browser compatibility for all users).

## ECMAScript Compatibility

**ES5 (ECMAScript 5)**:

- Fully supported in all browsers (down to IE9 from 2011);
- **_Ready to be used today_**.

  ***

**ES6/ES2015 - ES2020**:

- **_ES6+_**: well supported in all modern browsers;
- No Support in **_older_** browsers;
- Can use **_most_** features in production with **_tramspiling_** and **_polyfilling_**: `Babel`;
- [ES6 Compatibility Table](https://kangax.github.io/compat-table/es6/)

  ***

**ES2021 - ∞**:

- **_ESNext_**: Future versions of tha language (new feature proposals that reach Stage 4);
- Can already use **_some_** features in production with **_tramspiling_** and **_polyfilling_**: `Babel`

---

**Images, Notes and Documents are Referenced from**:

- **_Copyright (c) [Jonas Schmedtman](https://twitter.com/jonasschmedtman)_**.
