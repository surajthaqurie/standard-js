# Array

## Simple Array Methods:

- Methods are simply functions attached to objects.
- Array are objects, and that they get access to special built in methods that we can essentially see as tools for arrays.

## Some simple methods are:

**Slice()**:

- we can extract part of any array without changing the original array. it does not mutates the original array

**Splice()**:

- (delete) works in almost the same way as slice, But the fundamental difference is that it does actually change the original array. So it mutates the original array.

**Reserve()**:

- it mutates the original array

**Concat()**:

- concatenate two arrays. it does not mutates the original array

**Join()**:

## Looping Iterables:

**forEach() With Array**:

- The forEach method actually requires a callback function here. In order to tell it what to do.
- Also as the forEach method calls the callback function in each iteration it will pass in the current element of the array as an argument.
- forEach() passes in the **_current element,the index and the entire array_** that we are looping.
- The **_names here do not matter_** at all, but what **_ does matter is the order_**.

  ***

**forEach() with Maps and Sets**:

**Maps**:

- The callback function also has three parameters, So when the forEach method calls it, it will call this function with three arguments.
- So the first one will be **_current value_**, the second one is **_the key_** and third one is the **_entire map_** that is being looped over.

**Sets**:

- Similar as map's forEach but value of key is exactly the same as the value.
- A set doesn't have keys and it doesn't have indexes either, So there is no value that would make sense for the key.
- For keep the same signature so the people who designed this forEach method for sets do not omitted the second arguments.

  ```
  forEach method is a great use case to produce some so called side effects.
  So in other words, to simply do some work without returning anything.
  ```

## Data Transformations: Map, Filter, Reduce:

- Basically these are methods that we use to create new arrays based on transforming data from the other arrays.

**Map()**:

- Map is similar to forEach method but the difference that map create a brand new array based on the original array.
- **_Map_** always should **_returns_** a new array containing the results of applying an operation on all original array elements.
- Map methods also has access to the exact same three parameters: **_current element,the index and the entire array_** that we are looping.
- The **_names here do not matter_** at all, but what **_ does matter is the order_**.
  ***

**Filter()**:

- It used to filter for elements in the array which satisfy a certain condition.
- Filter **_always should return a new array_** containing the array elements that passed a specified **_test condition_**.
- All other element are filtered out so they will not included in new array.
- Filter methods also has access to the exact same three parameters: **_current element,the index and the entire array_** that we are looping.
- The **_names here do not matter_** at all, but what **_ does matter is the order_**.

  ***

**Reduce()**:

- It is used to boils down ("reduces) **_all array elements down to one single value_** (e.g adding all elements together).
- It **_only returns the reduced value_**, So there is no new array in this case but only the reduce value.
- But here in the callback function of the reduce method the **_first parameter_** is actually something **_called the accumulator_**. And other parameters are **_current element,the index and the entire array_** that we are looping.
- And this accumulator keeps accumulating the value that we ultimately want to return.
- The **_callback function is first argument_** of the reduce method but the reduce method actually has a another, a **_second parameter_** and that is **_the initial value of the accumulator_**.

  ***

**The Magic Of Chaining Methods**:

- **_After reduce methods we can't chain further_** because **_reduce method return one values_**.
- For **_debugging_**, it would be good to **_check out the array_** with entire array **_parameter that we are looping_**.

  ```
  - More chaining reduce codes performance.
  - It is bad practice in JavaScript to chain methods that mutate the underlying original array.
    (eg splice, reverse methods).
  ```

## Some other IMP methods:

**find()**:

- As the name said we can use the find method to retrieve one element of an array based on a condition.
- The find method also needs a callback function that **_returns a Boolean_**.
- Unlike the filter method, the find method will actually **_not return a new array_** but it will **_only returns the first element_** in the array that **_satisfies the condition_**.
  ***

**findIndex()**:

- The findIndex methods works almost the same way as find, but as the name says, findIndex returns the index of the found element and not the element itself.
  ***

**includes()**:

- The includes method to test if an array includes a certain value. (only test for equality(====)).
- So basically, includes here returns true, if any value in the array is exactly equal to certain value.
- It **_check only for equality_**.
  ***

**some()**:

- Similar as includes with callback function but it can **_checks specify a condition_**.
- If there is **_any value for which this condition is true_** then the some method **_will return true_**.
  ***

**_every()_**:

- The every method is pretty similar, to the some method,
- The difference between them is that every **_only returns true_** if all of the elements in the array **_satisfy the condition_** that we pass in.
- In other words, if every element passes the test, in our callback function, only then the every method returns true.

**flat()**:

- Introduce in ES2019.
- It removed the nested arrays and flattened the array (converted nested array to simple array).
- No callback function.
- By default the flat method only goes one level deep when flatting the array. But we can define the deep level value as the argument of flat methods.

  ```js
  // one-level deep
  const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
  console.log(arr.flat()); //  [1, 2, 3, 4, 5, 6, 7, 8]

  // two-level deep
  const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
  console.log(arrDeep.flat(2)); // deep argument
  ```

  ***

**flatMap()**:

- Introduce in ES2019.
- Flat map essentially combines a map and a flat method into just one method which is better for performance.
- Flat map **_only goes one level deep_** and **_we cannot change it_**.
- `So if you need to goo deeper than just one level, you still need to use the flat method`.

  ```js
  const overallBalance = accounts
    .flatMap((acc) => acc.movements) // only goes one level deep
    .reduce((acc, cur) => acc + cur, 0);
  console.log(overallBalance);
  ```

  ***

**sort()**:

- This method used for sorted the array. And this actually**_ mutates the original array_**.
- In **_numbers_**, by default the sort method does the **_sorting based on strings_**.
- And to **_fix of sorting in numbers_**, we need a **_callback function_**, and this callback function is called **_with two parameters_**.
- And these two parameters here, are essentially the **_current_** value and **_next_** value, if we imagined the sort method looping over the array.
- If in callback function if we **_return a less than zero_**, then the value **_A will be sorted before value B_**. And if we return a **_positive_** value than **_B_** will be **_before A_** in the sorted output array.

## More ways of Creating and Filling Arrays:

- We can actually also generate arrays programmatically, so without having to define all the items manually.
- And there are many situations in which this is necessary and there are also multiple ways of doing it.
  ***

**Array() constructor function**:

- Whenever we only pass in one argument, then it creates a new empty argument with that length.
- There is one method that we can call on this empty array and that is the **_fill()_** method.

  ***

**fill()**:

- to pass a value and it will then **_fill up the entire array_** with this**_ specific value_**.
- And this does actually**_ mutate the underlying array_**.
- This method is actually a little bit similar to the slice() method, So besides this value that we want to fill the array with.
- We can also specify where we want it to **_start to fill_** and **_end parameter_**(Not zero based).

  ***

**from()**:

- The from is using on the **_Array()_** constructor **_not_** as method of array.
- Into this function here, we can first pass in an object with thr length property.
- Then the second argument is a mapping function. So it is exactly like the callback function that we pass into the map method.
- We can create arrays from other things such as iterables, array like structures (querySelectorAll: NodeList) etc.

---

![alt text](https://github.com/surajthaqurie/standard-js/blob/master/volume-2/10-Arrays-Bankist/Array%20Summary.png)

---

**Images, Notes and Documents are Referenced from**:

- **_Copyright (c) [Jonas Schmedtman](https://twitter.com/jonasschmedtman)_**.
