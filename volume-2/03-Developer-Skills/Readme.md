# Developer Skills

## Problem Solving:

1. **Understanding the problem**:

- Make sure you 100% understand the problem. Ask the right questions to get a clear picture of the problem.

2. **Divide and conquer**:

- Break a big problem into smaller sub-problems.

3. **Research**:

- Don't be afraid to do as much research as you have to (Don't copy the code try to understand and write)

4. **Pseudo-code**:

- For bigger problems, write pseudo-code before writing the actual code.

## Debugging (Fixing Errors):

**Software bug**:

- Defect or problem in a computer program. Basically, any `unexpected or unintended behavior` of computer program is a software bug.
- And the actual term bug was coined in 1940s which causing an error in Harvard's computer.
- Bugs are completely normal in software development.

  ***

**Debugging**:

- Process of finding, fixing and preventing bugs.

## The Debugging Process:

1. **Identify**:

- Becoming aware that there is a bug.
- Discovering bugs usually happens:
- During development
- Testing software
- User reports during production
- Context: browser, users, etc

  ***

2. **Find**:

- Isolating where exactly the big is happening in code.
- Developer console (simple code)
- Debugger (complex code)

  ***

3. **Fix**:

- Correct the bug
- Replace wrong solution with new correct solution

  ***

4. **Prevent**:

- Preventing it from happening again
- Searching for the same bug in similar code
- Writing tests using testing software

## Use debugger in google chrome (any browser)

- On browser's developer tools.
- And in sources tab, set breakpoints in current script.

## Debugging With Console:

**Identify**:

**Find**

- console.log();
- console.warn();
- console.error();
- console.table();
- console.dir(myFunction); inspecting variable environment (checking scopes, closure of returned function)

**Fix**:

---

```
NOTE:
JavaScript has the debugger statement, and then when the browser sees this debugger
it automatically open up the debugger tool when execution of code reached that points.
```

```js
debugger;
```

---

**Images, Notes and Documents are Referenced from**:

- **_Copyright (c) [Jonas Schmedtman](https://twitter.com/jonasschmedtman)_**.
