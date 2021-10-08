# Numbers-Dates-Timers

Additional ways of representing data.

## Converting and Checking Numbers

- Numbers in JavaScript, are presented internally as **_floating point numbers_**.
- So basically, always as decimals no matter if we actually write them as integer or as decimals.

```js
console.log(23 === 23.0); // true
```

- And also, numbers are represented internally **_64 base 2 format_**. So that means that numbers are always **_stored in binary format_**. They're only composed of **_zeros and ones_**.
- Now in this binary form, it is very **_hard_** to represent some **_fractions_** that are very **_easy_** to represent in the **_base 10_** system that we are used to.

- So **_base 10_** us basically the numbers from **_zero to nine_** while binary is base 2.

  ```js
  // NOTE: Be aware that you cannot do like really precise scientific or financial calculation in JavaScript.

  console.log(0.1 + 0.2); // 0.30000000000000004
  console.log(0.1 + 0.2 === 0.3); // false
  ```

  ***

**Converting string number to Number**:

```js
console.log(Number("23"));
console.log(+"23"); // 23  it automatically converts all the operands to numbers
```

**Parsing String to Number**:

**parseInt()** : parsing string to integer.

**parseFloat()**: parsing string to decimals.

- String should starts with number.
- The parseInt function actually accepts a second argument which is the so called regex.
- And the regex is the base of the numeral system that we are using.

  ```js
  // parseInt()
  console.log(Number.parseInt("30px")); // 30
  console.log(Number.parseInt("   30px  ")); // 30
  console.log(Number.parseInt("e23")); // Nan
  console.log(Number.parseInt("30px", 10)); // base - 10

  // parseFloat
  console.log(Number.parseInt("2.5rem")); // 2
  console.log(Number.parseFloat("2.5rem")); // 2.5
  console.log(Number.parseFloat("  2.5rem  ")); // 2.5

  // so-called global
  console.log(parseFloat("  2.5rem  ")); // 2.5
  ```

  ***

**isNan(): is not a number**:

- To check if the value is a not a number.

  ```js
  console.log(Number.isNaN(20)); // false
  console.log(Number.isNaN("20")); // false

  console.log(Number.isNaN(+"20x")); // true
  console.log(Number.isNaN(23 / 0)); // it gives infinity value: false
  ```

  ***

**isFinite()**:

- Checks if the value is real number not a string.

  ```js
  console.log(Number.isFinite(20)); // true
  console.log(Number.isFinite("20")); // false

  console.log(Number.isFinite(+"20x")); // false
  console.log(Number.isFinite(23 / 0)); // false
  ```

  ***

**isFinite()**:

- Checks if the value is integer or not.

```js
console.log(Number.isInteger(20)); // true
console.log(Number.isInteger("20")); // false

console.log(Number.isInteger(+"20x")); // false
console.log(Number.isInteger(23 / 0)); // false
```

```
These function are actually also so-called global functions.
```

## Math and Rounding

- All of these method they also to **_type coercion_**.

  ```js
  // Math.sqrt()
  console.log(Math.sqrt(25));
  console.log(25 ** (1 / 2));
  console.log(8 ** (1 / 3));

  // Math.max()
  console.log(Math.max(5, 8, 23, 11, 2)); // 23
  console.log(Math.max(5, 8, "23", 11, 2)); // 23
  console.log(Math.max(5, 8, "23px", 11, 2)); // NaN

  // Math.max()
  console.log(Math.min(5, 8, 23, 11, 2)); // 2

  // Math.PI()
  console.log(Math.PI * Number.parseFloat("10px") ** 2);

  // Math.random()
  console.log(Math.random()); // number between zero to one
  console.log(Math.random() * 6); // number between zero to six
  console.log(Math.trunc(Math.random() * 6)); // remove decimal parts
  console.log(Math.trunc(Math.random() * 6) + 1); // number from one upto six

  // - Random number generator -----------------------------
  // const randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + 1) + min;
  const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min) + 1) + min;

  // 0...1 -> 0...(max - min) -> min...max
  console.log(randomInt(10, 20));

  // * Rounding integers -----------------------------------------------------------
  // Math.trunc(): remove the any decimal part
  console.log(Math.trunc(23.3)); // 23

  // Math.round(): round to the nearest integer
  console.log(Math.round(23.3)); // 23
  console.log(Math.round(23.5)); // 24
  console.log(Math.round(23.9)); // 24

  // Math.ceil(): round up
  console.log(Math.ceil(23.3)); // 24
  console.log(Math.ceil(23.9)); // 24

  // Math.floor(): round down
  console.log(Math.floor(23.3)); // 23
  console.log(Math.floor(23.9)); // 23

  // All of these method they also to type coercion.
  console.log(Math.floor("23.9")); // 23

  // - Negative Number ---------------------------
  console.log(Math.trunc(-23.3)); // -23
  console.log(Math.floor(-23.3)); // -24
  console.log(Math.ceil(-23.3)); // -23

  // * Rounding decimals -----------------------------------------------------------
  console.log((2.7).toFixed(0)); // 3
  console.log((2.7).toFixed(3)); // 2.700
  console.log((2.345).toFixed(2)); // 2.35
  console.log((2.345).toFixed(5)); // 2.34500

  // type coercion
  console.log(+(2.345).toFixed(2)); // 2.35
  ```

## The Remainder Operator(%):

- The remainder operator, simply returns the **_remainder of a division_**.

  ```js
  console.log(5 % 2); // 1
  console.log(5 / 2); // 5 = 2 * 2 + 1

  console.log(8 % 3); // 2
  console.log(8 / 3); // 8 = 2 * 3 + 2

  // Extra
  labelBalance.addEventListener("click", function () {
    [...document.querySelectorAll(".movements__row")].forEach(function (
      row,
      i
    ) {
      // 0, 2, 4, 6
      if (i % 2 === 0) row.style.backgroundColor = "orangered";
      // 0, 3, 6, 9
      if (i % 3 === 0) row.style.backgroundColor = "blue";
    });
  });
  ```

## BigInt:

- Bigint is a special type of integers that was introduce in year 2020. And it can be used to store numbers **_as large as we want_**. So **_no matter how big_**.
- Number are represented internally as **_64 bits_**, and that means that there are exactly **_64 ones or zeros_** to represent **_any given number_**.
- Now these 64 bits only **_53_** are used to actually **_store the digits_** themselves. **_The rest_** are for storing the **_position_** of the**_ decimal point and the sign_**.

  ***

**Conversion Methods**:

- Adding `n` at last:
  ```js
  console.log(121154898545222222221000000000005550000n);
  ```
- BigInt() constructor:
  - This constructor function should probably only be used with small small.
    ```
    console.log(BigInt(121154898545222222221000000000005550000)); // not accurate
    console.log(BigInt(1215451321543454)); // for small number: accurate
    ```
  ***

**Operations**:

- The operation are similar as regular numbers.
- We can not do directly operation between bigint number with regular number. If we do its throws: Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions.
- So for do mix operation we have to change regular integer to bigint with BigInt() constructor.
  ***

**Some Exceptions**:

- logical operator
- String concatenations: BigInt number also becomes string
- Math operations: Uncaught TypeError: Cannot convert a BigInt value to a number at Math.sqrt
- Division: cuts the decimals parts

## Dates and Time:

**Creation Dates**

**Operations With Dates**:

- One cool thing we can do with date is to do calculations with them.
- Whenever we attempt to convert a date to a number, then the result is going to the timestamp in milliseconds.
- And with these milliseconds, we can then perform calculations.

## International(INTL) APIs:

- It does is to allow us to easily format numbers and strings according to different languages.
- With this new API we can make out applications support different languages for users around the world.

- [For More: Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
  ***

**International Dates(INTL)**:

- For times and date we use **_DateTimeFormat_** function of **_Intl_** function, now all that we need to pass into this function here is so-called **_locale string_**.
- And this locale is usually the **_language_** and **_dash the country_**.
- All of this create a so-called **_formatter_** for that language, and then on that formatter, we can call dot **_format_**.
- And then here, we actually **_pass_** in the **_date_** that we want to **_format_**.

- [More locale...](http://www.lingoes.net/en/translator/langcode.htm)
  ***

**International Numbers(INTL)**:

- For times and date we use **_NumberFormat_** function of **_Intl_** function, now all that we need to pass into this function here is so-called **_locale string_**.

## Timers:

- Mainly we have two kinds of timers in JavaScript.

**setTimeout()**:

- Runs just one after a defined time.
- So basically, we can use setTimeout to execute some code in the future.
- To runs the function we needs two parameter a callback function and delay time in milliseconds.
- And we can define more arguments.
- **clearTimeout()**: for deletes the timeout.

  ***

**setInterval()**:

- keeps running basically forever, until we stop it.
- So basically, we can use setTimeout to execute some code in the future.
- To runs the function we needs two parameter a callback function and delay time in milliseconds.
- And we can define more arguments.
- **_clearInterval()_**: for deletes the interval.

---

**Images, Notes and Documents are Referenced from**:

- **_Copyright (c) [Jonas Schmedtman](https://twitter.com/jonasschmedtman)_**.
