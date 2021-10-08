# Data Structures Operators

## Destructuring:

- It's basically a way of unpacking values from an array or an object into separate variables.
- In other words, destructuring is to break a complex data structure down into a smaller data structure like a variable.

**Destructuring Array**:

- We use square braces to destructure object, because this is also how we create arrays.

- **_Skipping the elements_**:

  ```js
  let [main, , secondary] = restaurant.categories;
  ```

- **_Swapping ( switching) variable_**:

  ```js
  let [main, secondary] = [secondary, main];
  ```

- **_Receive 2 return values from a function_**:

  ```js
  const [stater, mainCourse] = restaurant.order(2, 0);
  ```

- **_Nested destructuring_**:

  ```js
  const [i, , [j, k]] = nested;
  ```

- **_Default values_**:

  ```js
  const [p = 1, q = 1, r = 1] = [8, 9];
  ```

  ***

**Destructuring Object**:

- We use curly braces to destructure object, because this is also how we create objects.
- Then all we have to do is to **_provide the variable names_** that **_exactly match the property names_** that we want to **_retrieve from the object_**.

- **_New Variable Name_**:
  ```js
  const {
    name: restaurantName,
    openingHours: hours,
    categories: tags,
  } = restaurant;
  ```
- **_Default values_**:

  ```js
  const { menu = [], starterMenu: starters = [] } = restaurant;
  ```

- **_Nested objects_**:

  ```js
  const {
    fri: { open: o, close: c },
  } = openingHours;
  ```

- **_Function parameters_**:

  ```js
  orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = '20:00', address: a}){};
  ```

- **_Mutating variables_**:

  ```js
  let a = 111;
  let b = 999;
  const obj = {
    a: 23,
    b: 7,
    c: 14,
  };

  // {a,b} = obj;  // Uncaught SyntaxError: Unexpected token '='

  ({ a, b } = obj);

  console.log(a, b); // 23 7
  ```

## The Spread Operator(...):

- We can use the **_spread operator_** to basically **_expand an array into all its elements_**.
- So basically **_unpacking_** all the array elements at one.
- The spread operator **_only works on arrays_**, but that's not entirely true, because actually, the spread operator works on all so-called **_iterables_**.

## Iterables:

- The most of the **_built-in data structures_** in JavaScript are now iterables, but **_except objects_**.
- There are **_different iterables in JavaScript_** and these are things like all **_arrays_**, **_strings_**, **_maps_**, or **_sets_** but **_not object_**.

  ***

**Shallow copy**:

```js
const mainMenuCopy = [...restaurant.mainMenu];
```

---

**Join 2 arrays**:

```js
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
```

## String:

```js
const str = "Jonas";
const letters = [...str, "", "S."];
console.log(letters); // ['J', 'o', 'n', 'a', 's', '', 'S.']

console.log(...str); // J o n a s
```

**Template literal**:

```js
// console.log(`${...str} Schmedthmann`); // Uncaught SyntaxError: Unexpected token '...'
```

- This is **_not a place_** that **_expected multiple values separated by a comma_**
- **_Multiple values_** separated by a comma are usually **_only expected_** when we **_pass arguments_** into a function or when we built a **_new array_**.

## Objects:

Since ES-2018, the spread operator actually also works on objects. Even though objects are not iterables.

```js
const newRestaurant = {
  foundedIn: 1998,
  ...restaurant,
  founder: "Guiseppe",
};

console.log(newRestaurant);

// Shallow copy
const restaurantCopy = {
  ...restaurant,
};
restaurantCopy.name = "Ristorante Roma";

console.log(restaurantCopy.name);
console.log(restaurant.name);
```

## Rest pattern and parameters:

- The rest pattern looks exactly like the spread operator. So it has the same syntax with the three dots.
- But it actually does the opposite of the spread operator, to collect multiple elements and condense them into an array.
- The spread operator is to unpack an array while rest to pack elements into an array.

```
Rest element must be the last element, and also for this reason there can only ever be one rest in
any destructing assignment.
```

## Logical operator

Logical operator can perform three properties:

1. **_use_** ANY data types
2. **_return_** ANY data types
3. **Short Circuiting (&& and ||)**:

So up until this point, we have used logical operators only to combine Boolean values.

## Short Circuiting (&& and ||):

**Short Circuiting OR Operator(||)**:

- In the case of `OR` operator the short circuiting means that if the **_first value is a truthy_** value, it will immediately **_return that first value_**.
- in the simple words, if the **_ first operand is a truthy_** in the chain of OR operator, than the other **_operand will not even be evaluated_**.
- If the **_all operand are falsy_** value than it returns the **_last falsy operand_**.
  ```js
  restaurant.name = 0; // - NOTE: Is a falsy value
  ```
  ***

**Short Circuiting AND Operator(&&)**:

- The `AND` operator **_works_** in the exact **_opposite way of the OR_**.
- In the case of `AND` operator the short circuiting means that when their any **_falsy value_**, then immediately **_return that falsy value_** without even evaluating the other operand.
- When all are **_truthy operand_**, it means that the **_evaluation continues and the simply the last value is returned_**.

## Nullish Coalescing Operator(??):

- Its an **_operator_** that was introduced in **_ES2020_**.
- Nullish coalescing operator **_similar as OR operator_** but its works with the idea or with the concept of **_nullish values_** instead of **_falsy values_**.

**Nullish value**: `false` and `undefined`, Does **_not_** include `0` and `''`;

## Looping Arrays:

**The FOR-OF Loop**

- This is introduced in ES6.
- This loop will automatically loop over the entire array and in each iteration, it will give access to the **_current array element_**.
- We can still use the continue and break keywords.

**Current Index**:

- Well, in the for-of loop it's actually a bit of a pain when we need that index, because originally the for-of loop was just meant to give the current element.

  ```js
  for (const item of menu.entries()) console.log(item);
  ```

  ***

**myArray.keys()**:

**myArray.values()**:

**myArray.entries()**:

- Entries is basically names plus the values together.
- In array, it return index number and elements itself.

## Enhanced Object Literals:

Now ES6 introduced three ways, which make it easier to write object literals (`obj={}`).

**Writing properties**:

- if the variable and property of object has same name the we can:

  ```js
    // openingHours: openingHours, // Before ES6
    openingHours, // After ES6
  ```

  ***

**Writing methods**:

```js
  // Before ES6
    order: function (staterIndex, mainIndex) {
      return [this.starterMenu[staterIndex], this.mainMenu[mainIndex]];
    },

  // After ES6
    order(staterIndex, mainIndex) {
      return [this.starterMenu[staterIndex], this.mainMenu[mainIndex]];
    }
```

**We Can compute the property names**:

```js
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// Before ES6
// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// After ES6
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    // day-6
    open: 11,
    close: 23,
  },
};
```

## Optional Chaining(?.):

- When we have **_check deeply nested objects_** with lots of **_optional properties_** if they are define or not(undefined).
- Then **_ES2020_** introduce a great solution for this, which is a feature called **_optional chaining_**.
- And with optional chaining, **_if a certain property does not exist_**, then **_undefined is returned immediately_**. so that will then **_avoid that kind of error_** (undefined.property: Cannot read properties of undefined (reading 'open')).

```
If only the before `?` property exits then only read the next property
But if not, then immediately undefined will be returned.
```

- Similar as **_nullish concept_**. So a property exits if it's not null and not undefined. And if it's zero or empty string then it still exists.

**Multiple Optional Chaining**:

```js
console.log(restaurant.openingHours?.mon?.open);
```

**Calling methods**:

- Check if a method actually exists before we call it.

```js
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exits");
```

## Arrays:

- To check if the array is empty.

```js
let users = [
  {
    name: "Jonas",
    email: "hello@jonas.io",
  },
];

users = [];
// Without optional chaining
if (users.length > 0) console.log(users[0].name);
else console.log("User array empty");
// With optional chaining
console.log(users[0]?.name ?? "User array empty");
```

## Looping Objects (Object Keys, Values and Entries):

**Object.keys(myObject)**:

- Only keys of object.

  ***

**Object.values(myObject)**:

- Only value of object.

  ***

**Object.entries(myObject)**:

- Entries is basically names plus the values together.
- In Object, it return object key number and values.

  ***

**Object.fromEntries()**:

- In JavaScript, since ES2019, there is now a new and very handy method that we can use to convert entries to an object.
- That Opposite of the Entries method that is available on arrays, it takes an array of entries and converts it to an object.

---

In **_ES6 two more data structure_** are introduce, that are **_sets_** and **_maps_**

## Sets:

- ES6 **_data structure feature_**.
- A set is basically just a **_collection of unique values_**. So that means that a set can **_never_** have any **_duplicates_**.
- Sets are also **_iterables_** can of course hold **_mixed data types_**.
- We can see that a set kind of looks similar to an array, So there are no key value pairs just bunch of values grouped together.
- Now, of course a set is still very different from an array. So first, because its elements are unique. And second, because the order of elements in the set is irrelevant.
- There's no need for getting values out of a set, that because all values are unique and if their order does not matter than there is no point of retrieving values out of a set.
- All we need to know whether a certain value is in the set or not. And that's why we have the has method.
- If your goal is to actually store values in order and then retrieve it, then the best case, is to just use an array.

```js
const orderSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(orderSet); // {'Pasta', 'Pizza', 'Risotto'}

console.log(new Set("Jonas")); // {'J', 'o', 'n', 'a', 's'}
console.log(new Set()); // {}

// size (length)
console.log(orderSet.size);

// Has() // similar to the includes method in array
console.log(orderSet.has("Pizza"));
console.log(orderSet.has("Bread"));

// Add(): Adding new element
orderSet.add("Garlic bread");
orderSet.add("Garlic bread");
console.log(orderSet);

// Delete(): delete a element
orderSet.delete("Risotto");
console.log(orderSet);

// clear(): delete all elements
// orderSet.clear();
// console.log(orderSet);

// Loop
for (const order of orderSet) console.log(order);

// Remove duplicate values from Array to set and later conversion that set to Array
const staff = ["Waiter", "Chef", "Waiter", "Manger", "Chef", "Waiter"];

// const staffUnique = new Set(staff);
// console.log(staffUnique);

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manger", "Chef", "Waiter"]).size
); // 3
console.log(new Set("jonassschmedtmann").size); // 11
```

- Sets are not intended to replace at all. So whenever you need to store values in order and that might contains duplicates always just use arrays.

## Maps:

- **_ES6 data structure feature_**.
- Instead in JavaScript, **_a map is a data structure_**, that we can use to **_map values to keys_**. So just **_like an object_**, data is sorted in **_key value pairs in maps_**.
- The big difference between objects and maps, is that in maps, the keys can have any type. And objects, the keys are basically always strings.
- Any type of key it could even be objects or erase or other maps.

```js
// console.log(new Map()); // Empty map: {}

// Set(): add a new element to the data structure (to fill of map)
const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
// rest.set(2, 'Lisbon, Portugal');
console.log(rest.set(2, "Lisbon, Portugal"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");

// get(): in order to read data from the map we uses
console.log(rest.get("name"));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// has(): Check that if map contains a certain key
console.log(rest.has("categories"));

// delete(): delete elements form the map
rest.delete(2);
console.log(rest);

// size (length)
console.log(rest.size);

// clear(): delete all elements
// rest.clear();
// console.log(rest);

// Keys Array and object

rest.set([1, 2], "Test");
console.log(rest);

console.log(rest.get([1, 2])); // undefined because they are not actually the same object

const arr = [1, 2];
rest.set(arr, "Test");

console.log(rest.get(arr)); // Test

rest.set(document.querySelector("h1"), "Heading");
console.log(rest);

// Populating a new map
const restaurant = {
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const { openingHours } = restaurant;

const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "JAVA"],
  [3, "JAVASCRIPT"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try Again"],
]);

console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hours = new Map(Object.entries(openingHours));
console.log(hours);

// Quiz app
console.log(question.get("question"));

// - Loops --------------------
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

const result =
  answer === question.get("correct") ? question.get(true) : question.get(false);
console.log(result);

// Convert map to array
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
```

## String:

- String are also **_zero_** based.

**.length**

**.indexOf()**

**.lastIndexOf()**

**.slice()**

**.toLocaleLowerCase()**

**.toUpperCase()**

**.trim()**

**.replace()**

**.replaceAll()**

**.replace(Regular Expression)**

**.repeat()**

---

**Booleans**:

- **_.includes()_**
- **_.startsWith()_**
- **_.endsWith()_**
- **_.split()_**
- **_.join()_**

---

**Padding**:

- **_.padStart()_**
- **_.padEnd()_**

---

**Images, Notes and Documents are Referenced from**:

- **_Copyright (c) [Jonas Schmedtman](https://twitter.com/jonasschmedtman)_**.
