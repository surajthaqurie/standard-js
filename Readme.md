# JavaScript:

```
JAVASCRIPT IS A HIGH_LEVEL,
OBJECT-ORIENTED, MULTI-PARADIGM
PROGRAMMING LANGUAGE.
```

```
JAVASCRIPT IS A HIGH-LEVEL, PROTOTYPE-BASED OBJECT-ORIENTED,
MULTI-PARADIGM, INTERPRETED OR JUST-IN-TIME COMPILED,
DYNAMIC, SINGLE-THREADED, GARBAGE-COLLECTED PROGRAMMING
LANGUAGE WITH FIRST-CLASS FUNCTIONS AND A NON-BLOCKING
EVENT LOOP CONCURRENCY MODEL.
```

## HIGH-LEVEL:

- Every program that runs on computer needs some hardware resources such as memory and the CPU to do its work.
- There are low-level languages, such as C, **_developer has to manage resources manually_**.
  - For example: asking the computer for memory to create a new variable.
- On other side high-level languages, such as JavaScript and Python, **_developer does NOT have to worry, everything happens automatically_**.
- Because high-level languages have so-called abstractions that take all of that work away from us.
- This make language easier to learn and to use, but the downside is that programs will never be as fast or as optimized as for example, C programs.

## Garbage-Collected:

- One of the powerful tools that takes memory management away from us developers is garbage-collection.
- Which basically an algorithm inside tha JavaScript engine which automatically removes old, unused objects from the computer memory.
- In order not to clog it up with unnecessary stuff.
- So it's a little bit like JavaScript has a cleaning guy who cleans our memory from time to time so that we don't have to do it manually in our code.

## Interpreted or just-in-time compiled:

- The computer's processor only understands zeros and ones (binary).
- Ultimately, every single program needs to be written in zeros and ones, which is also called machine code.
- We simply write human-readable JavaScript code which is an abstraction over machine code, but this code eventually needs to be translated to machine code.
- And that step can be either compiling or interpreting. This step is necessary in every single programming language because no one writes machine code manually.
- In case of JavaScript this happens inside the JavaScript engine.

## Multi-paradigm:

- One of the things that makes JavaScript so popular is the fact that it's a multi-paradigm language.
- In programming, a paradigm is an approach and overall mindset of structuring code, which will ultimately direct the coding style and technique in a project that uses a certain paradigm.
- Three popular paradigms are:
  - Procedural Programming: which basically just organizing the code in a very linear way and then with sine functions in between.
    - Imperative
    - Declarative
  - Object-oriented Programming (OOP):
  - Functional programming (FP):
- Many language are only procedural or only object-oriented or only functional but JavaScript does all of it.
- So it's really flexible and versatile

## Prototype-based object-oriented:

- So, about the object-oriented nature of JavaScript, it ia a prototype, object-oriented approach.
- Almost everything in JavaScript is an object, expect for primitive values such as numbers, string, undefined, boolean, etc.

- But arrays, for example are just object, For example: have you ever wondered why we can create an array and then use the push method on it,
  will it because of prototypal inheritance.

  ```js
  Example:

  const arr = [1, 2, 3];
  arr.push(4);
  const hasZero = arr.indexOf(0) > -1;
  ```

- Basically, we create arrays from an array blueprint, which is like a template and this is called the prototype.
- This prototype contains all the array methods and the arrays that we create in our code then inherit the methods form the blueprint.
- So that we can use them on the arrays.

**First-class Function**:

- JavaScript is the language of first-class functions, which simply means that functions are treated just as regular variables.
- So, we can pass functions into other functions and we can even return functions from functions.
- And this is extremely powerful because it allows us to use a lot of powerful techniques and also allows for functional-programming paradigm.

```js
const closeModel = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Passing a function into another function as an argument: First-Class functions!
overlay.addEventListener("click", closeModal);
```

## Dynamic:

- JavaScript is dynamic language and dynamic actually means dynamically-typed.
- In JavaScript, we don't assign data types to variables. Instead, they ony became known when the JavaScript engine executes the code.
- Also, the type of variables can easily be changed as we reassign variables. And this is basically what dynamically-typed means.
- Now, the same is not true for other programming languages( C, Ruby, Java, etc) where we have to manually assign types, to variables.
- And this then usually prevents bugs from happening, which is the reason why many people say that JavaScript should be a strongly-typed language as well.
- And if you yourself want to use JavaScript with types, then you can always look into TypeScript.

## Single-thread:

- JavaScript itself runs in one single-thread, which means that it can only do one things at a time.
- And therefore we need a way of handling multiple things happening at the same time **_Concurrency model_**.
- By the way, in computing, a **_thread_** is like a set of instructions that is executed in the computer's CPU.
- So basically, the thread is where our code is actually executed in a machine's processor.

## Non-blocking event loop concurrency model:

**Concurrency model**:

- It's just a fancy term that means how the JavaScript engine handles multiple tasks happening at the same time.
- But what if there ia a long-running task like fetching data from a remote server?
- Well, it sounds like that would block the single thread where the code is running. But of course we don't want that.
- What we want is so-called non-blocking behavior and how do we achieve that?
- Well, by using a so-called **_event loop_**.

**Event loop**:

- The events loop takes long-running tasks, executes them in the background and puts them back in the main thread once they are finished.

`And this is, in a nutshell, JavaScript's non-blocking event loop concurrency model with a single thread.`

---

**All Projects, Documents, Images and Notes are Referenced from**:

- **_Copyright (c) [Jonas Schmedtman](https://twitter.com/jonasschmedtman)_**.
