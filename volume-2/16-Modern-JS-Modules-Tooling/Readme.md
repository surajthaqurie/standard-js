## Modern-Js-Modules-Tooling

**An Overview Of Modern JavaScript Development**

Basically of how we write JavaScript today, because when we built applications.

- So back in the day we used to write all our codes into one **_big script_** or maybe **_multiple scripts_**.
- But today, we divide our project into **_multiple modules_** and these modules can **_share data between them_** and make our code more **_organized and maintainable_**.

One great thing about modules is that we can also **_include 3rd-party modules_** into our own code.

- And there are thousands of open source modules which we also call **_packages_** that developers share on the **_NPM repository_**.
- **_Node Package Manager(NPM)_** contains open-source packages to include 3rd-party code in our own code (eg. React, jQuery, Leaflet, etc.)
- So basically NPM is both the repository in which **_packages live_** and a program that we use on our computers to **_install and manage these packages_**.
- NPM contains development tools that help build our application (eg. live-server, Parcel, Babel etc).

After finishing our project development phase, our project now needs to go through a build process, where onr big final JavasScript bundle is built.

- And that's the final file, which we will deploy to our web server for production. So, basically it's the JavaScript file, that will be sent to browsers in production.

- And production simply means that the application is being used by real users in the real world.
- Now, a build process can be something really complex, but we gonna keep it simple here and only include two steps.

- And the first step, we'll bundle all our modules together into one big file. This is a pretty complex process which can eliminate unused code and compress or code as well.
- Now this step is super important for two big reasons.
  - First, older browser don't support modules at all so code that's in a module could not be executed by any older browser.
  - And second, it's also better for performance to send less files to the browser, and it's also beneficial that the bundling step compresses our code.
- But anyway, as the second step, we do something called **_transpiling_** and **_polyfilling_**
- Which is basically to convert all modern JavaScript syntax and features back to old ES5 syntax, so that even older browsers can understand our code without breaking.
- And this is usually done using a tool called **_Babel_**.

So these are the two steps of our build process, and after these two steps, we end up with that final JavaScript bundle, ready to be deploy on a server for production.

---

## Common build tools: Webpack and Parcel:

- For build process, we use a special tool to implement this build process for us. And the most common build tools available are probably **_Webpack_** and **_Parcel_**.
- And these are called JavaScript bundlers because well, as the name says they take our raw code and transform it into a JavaScript bundle.
- Now **_Webpack_** is the more popular one but it can be really hard and confusing to set it up. So that's because there's a lot of stuff that we need to configure manually in order to make it work properly.
- **_Parcel_** on the other hand is a zero configuration bundler which simply works out of the box. And so in this bundler we don't have to write any set up code, which is really amazing.

`Now these development tools are actually also available on NPM. So just like packages that we include in our code we will download and manage tools using NPM as well.`

---

## An Overview Of Modules in JavaScript:

Modules are a super important part of software development.

- So essentially, a module is a reusable piece of code that **_encapsulates_** implementation details of a certain part of our project.
- Now that sounds a bit like a function or even a class, but the difference is that a module is usually a **_standalone file_**. Now that's not always the case but normally when we think of a module we think of a separate file.
- So of course a module always contains some code but it can also have **_imports_** and **_exports_**.

  - **_Exports_**:
    - So with exports, as the name says we can export values out of a module.
    - For example, simple value or event entire functions.
    - And whatever we exports from a module is called a the public API.
    - So this just like classes where we can also expose a public API for other codes to consume.

- **_Imports_**:
  - No in the case of modules, this public API is actually consumed by **_Importing values_** into a module.
  - So just like we can export values in modules, we can usually also import values from other modules.
  - And these other modules form which we import are then called **_dependencies_** of the importing module because the code that is in the module that is importing cannot works without code, that it is importing from the external module.

And this entire logic that we described is true for all modules in all programming languages, so this in not specify to only javaScript.

---

**Features of modules**

- **_Composed software_**:

  - Modules are small building blocks that we put together to build complex application.

- **_Isolate components_**:

  - Modules can be developed in isolation without thing about the entire codebase.

- **_Abstract code_**:

  - Implement low-level code in modules and import these abstractions into other modules.

- **_Organize code_**:

  - Modules naturally lead to a more organized codebase, because when we break up our code into separate isolated and obstructed modules this will automatically organize our code and make it easier to understand.

- **_Reuse code_**:

  - Modules allow us to easily reuse the same code, even across multiple projects.

---

**Native JavaScript (ES6) Modules**

So as of ES6, JavaScript has a native built-in module system. Now we did have modules before ES6 but we had to implement them ourselves or use external libraries.

- ES6 modules are modules that are actually stores in files and each file is one module. So there is exactly one module per file.

**_Comparing between two types of file ES6 module and Script file_**:

|                     | ES6 Module                                             | Script        |
| :------------------ | :----------------------------------------------------- | :------------ |
| Top-level variables | Scoped to module (private variable)                     | global        |
| Default mode        | Strict mode                                            | "Sloppy" mode |
| Top-level this      | undefined                                              | window        |
| Imports and exports | YES (need to happen at top level & imports are hoisted) | NO            |
| HTML Linking        | <script type="module">                                 | <script>      |
| File downloading    | Asynchronous                                           | Synchronous   |

**Importing Modules before Execution**:

The first step is to parse that code, parsing basically means just read the code without executing it. And this is the moment in which imports are hoisted.

And in fact, the whole process od **_importing modules_** happens **_before_** the code in the main module is actually **_executed_**:

- Modules are imported synchronously
- Possible thanks to top-level ("static") imports, which make **_imports known before execution_**.
- THis make **_bundling_** and **_dead code elimination_** possible.

So after the parsing process, it has figured out which modules it needs to import, then these modules are actually downloaded from the server.

- And remember downloading actually happens in an **_asynchronous way_**. It is only the importing operation itself that happens synchronously.
- Then after a module arrives it's also parsed and the modules exports are linked to the imports in the main module. And this connection is actually a **_life connection_**.
- So exported value are **_NOT_** copied to imports. Instead, the import is basically just a **_reference_** to the export at value like a **_pointer_**.

- So when the value changes in the exporting module then the same value also changes in the importing module.
- Next up, to code in the imported modules is executed. AN with this the process of importing modules is finally finished.

---

**Exporting And Importing In ES6 Modules**:

In ES6 there are two types of exports:

- **_Name Exports_**

  - Name exports is actually the simplest way of exporting something form a module.
  - All we have to do is to **_put export in front of anything_**, that we might **_want to export_**.
  - We can also **_exports multiple things at the same time_**, using Named Exports.
  - This is a little bit like exporting an object from the module.
  - We can change the variable name using **_as_** keyword.

  - **_Name Import_**:

  - We can then import that variable, we just have to write it with the **_exact same name_**.
  - And we actually have to put them inside the **_curly braces_**.
  - We can change the variable name using **_as_** keyword.

- **_Import all the name exports_**:

  - We can also **_import all the exports_** of a modules at the **_same time_**.
  - It's convention is little bit like a **_Class name_**, so that's kind of the convention when we import everything into an **_object_**.
  - So basically this will **_create an object_** containing everything that is **_exported_** from the module that we will specify.
  - And so this will then basically **_create a namespace_**, for **_all of the values_**, exported from that module.

- **_Default Exports_**:

  - We use Default Exports when we only want to export one thing per module, and so that's the reason why they are called default.
  - No name is involved at all.

- **_Import Default Exports_**:

  - And so then when we import it we can basically give it any name that we want.

```
Imports are not copies of the export. They are instead like a live connection that means is that they point to the sample place in memory.
```

---

**The Module Pattern**:

The main goal of the module pattern is to encapsulate functionality, to have private data, and to expose a public API.

- And the best way of achieving all that simply using a function because a functions give us private data by default and allow us to return values which become our public API.

```js
const shoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;

  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });

    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  // Making Public API
  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

shoppingCart2.addToCart("apple", 4);
shoppingCart2.addToCart("pizza", 2);
console.log(shoppingCart2);

// console.log(shoppingCart2.shippingCost);  // undefined
```

---

**CommonJS Modules**

Beside **_native ES Modules_**, and the **_ module pattern_** there are also other module systems that have been used by JavaScript in the past.

- But again, they were not native JavaScript so they relied on some external implementations.
- And two examples are: **_ADM modules(Asynchronous Module Definition)_** and **_CommonJs modules_**.

  **_CommonJS modules_**: `const package = require('module-name');`

- Now, CommonJs modules are important for us, because they have been used in Node.js, for almost all of its existence.
- So only very recently **_ES modules_** have actually been implemented in **_Node.js_**. `import package from 'module-name';`

- And remember Node.js is a way of running JavaScript on a web server outside of a browser.

```
- All the these modules that we can use in our own code still use the CommonJS module system.
- And the reason for that, is that npm was originally only intended for node.
- Which as they said, uses commonJs.
- Only later npm became the standard repository for the whole JavaScript world.
- And so now we are basically stuck with CommonJs.
```

- Just like ES6 modules, in CommonJS one file, is one module.
- Now in the long run, ES6 Modules, will hopefully and probably replace all of these different module systems.

---

**Basic Command Line (Terminal)**:

| Unix based system(linux/Mac) | Window                                                              | Description                                           |
| :--------------------------- | :------------------------------------------------------------------ | ----------------------------------------------------- |
| ls                           | dir (Directory)                                                     | Show the contents of the current folder               |
| cd                           | cd                                                                  | Change Directory: we can go up and down the file tree |
| mkdir directoryName          | mkdir directoryName and md directoryName1 directoryName2 (multiple) | Make new directory                                    |
| touch fileName               | edit fileName                                                       | Create new file                                       |
| rm fileName                  | del fileName                                                        | remove / delete file                                  |
| mv fileName location         | -                                                                   | Move file                                             |
| rmdir directoryName          | -                                                                   | remove directory (only works for empty directory)     |
| rm -R directoryName          | -                                                                   | remove directory any directory                        |

---

**Introduction To NPM**:

NPM stands for Node Package Manager and it's both a software on our computer and a package repository.

Q. Why do we actually need a way of managing packages or dependencies in our project ?

Well, back in the day before we had NPM, we used to **_include external libraries into our HTML_**. So basically using the **_script tag_**. And this would then expose a global variable that we could use.

- **_include external libraries into our HTML_**:

  - This is just **_not manageable_**.
  - First it doesn't make much sense having the HTML **_loading all of JavaScript_**, that is just **_really messy_**.

  - Also **_many times_** we would actually **_download_** a library file to our computer directly, for example, jQuery JavaScript file.
  - But Then whenever a **_new version_** would come out, we would have to manually **_go to the site_**, download the **_new version_** change the file in our **_file system manually_**.

  - And a third reason is that before NPM, there simply wasn't a **_single repository_** that contained all the packages that we might need.
  - And so this made it even worse and more **_difficult_** to manually download libraries and manage them on our computers.

- Now in each project in which we want to use NPM, we need to start by initializing it. And so for that, we write `npm init`.
- And this will then ask us a couple of question in order to create a **_package.json_** file.
- Now **_package.json_** file is basically what stores the **_entire configuration_** of our project.

```
- A devDependency is basically like a tool that we need to build our application.
- Dependency that we actually include in our code.
```

```js
// * lodash-es-----------------------------------------
import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";

const state = {
  cart: [
    { product: "bread", quantity: 5 },
    { product: "pizza", quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
// console.log(stateClone);

// state.user.loggedIn = false;
console.log(stateClone); // false

const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;

console.log(stateDeepClone); // true
```

---

## Bundling With Parcel And Npm Script: https://parceljs.org/

The Parcel is a **_module bundler_** and it's super fast and easy to use and ever more importantly, it works out of the box **_without any configuration_**.

- Now you might've heard of Webpack as well which us probably the most popular bundler and especially in react world.

- Parcel is basically just another build tool which is also on NPM and so we will use NPM to install it. ` npm install parcel-bundler --save-dev`

- So we do it here in the **_terminal_** because Parcel is basically just **_another command line interface_**.

- Now, in order to still be able to use Parcel in the console without installing globally, we have two options. So we can use something called **_NPX_** or we can use **_NPM scripts_**.

  - **_NPX_**:

    - is basically an application built into a NPM.

    ```bash
    npx parcel index.html
    ```

  - **_NPM Script_**:

    - NPM scripts are basically another way of running a locally installed packages in the command line.
    - They also allow us to basically automate repetitive tasks. And so therefore we then don't have to write NPX Parcel and all of that, every time that we want to use it.

    ```json
    "scripts": {
    "start": "parcel index.html", // Development
    "build":"parcel build index.html" // Production
    },
    ```

`In HTML`:

```Html

  <!-- Connecting modules in html file -->
  <!-- <script type="module" defer src="script.js"></script> -->

  <!-- Parcel uses normal without (type= 'module') -->
  <script defer src="script.js"></script>

```

- Parcel create the **_dist_** folder which stands for **_distribution_**, because it is essentially gonna be this folder that we will **_send for production_**.
- So basically it's the code in dist folder that we will send to our final users.

```js
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
// import cloneDeep from 'lodash-es';

// Parcel is even smart enough to then automatically install this package here
// Parcel can indeed work with all the CommonJS modules as well.
// So this way we can then simply use all the modules that are available on NPM
// And which still use this older module format
import cloneDeep from "lodash";

// This code that only Parcel understands so it will not make it into our final bundle
// because the browser is not going to understand any of it
// Hot module reloading: When ever we change one of the modules it will then of course, trigger a rebuild, like this
// But that new modified bundle will then automatically like magic, get injected into the browser without triggering a whole page reload.
if (module.hot) {
  module.hot.accept();
}

// Whenever we change something here this will then not reload this part of the page
// The state is maintained whenever we reload the page.
```

---

## Configure Babel And Polyfilling: https://babeljs.io/

Now that we activated bundling it's time to **_configure Babel to transpile_** or super modern code **_back to ES5 code_**.

- And this is still important right now even many years after the new ES6 standard has been introduced.
- And the reason for that is simply that there are still many people out there who are stuck on like a window XP or Window 7 computer and to can not upgrade their old internet explorers.
- `But we want our applications to work for everyone. And so we need to keep everyone in mind.`

Now the good news is that **_Parcel_** actually `automatically uses Babel to transpile or code`.

- And we can **_configure Babel_** a lot if we want to for example **_defining exactly what browser_** should be **_supported_**. But as always, that's a ton of work. And we do not want that.
- And instead Parcel makes some very good **_default decisions for us_**. And so we will simply mainly just **_go with these defaults_**.

---

So basically babel works with **_plugins_** and **_presets_** that can both be configured.

**_Plugins_**:

- Now a plugin is basically a specific Javascript features that we want to transpile so to convert.
- For example let's say er only wanted to convert arrow functions back to ES5 but leave everything else in ES6 for example, const and var declarations.

Now usually that doesn't make a lot of sense because we will want to **_transpile everything at the same time_**.

- And so usually instead of using single plugins for each of these features Babel actually uses **_presets_**.

**_Presets_**:

- A presets is basically a **_bunch of plugins bundled together_**.
- And its by **_default parcel_** is going to use the **_preset-env_** preset.
- And this preset will **_automatically select_** which JavaScript features should be compiled based on **_browser support_**.

And again that will all happen automatically and out of the box babel will convert all features,

- So only browser that are barely used anymore with the market share of less than 0.25% are not going to be supported by the transpiling with preset-env.

Babel can actually only **_transpile ES6 Syntax_**, so data things like `arrow functions, classes, const ,or the spread operator`.

- So these are basically things that have an **_equivalent_** way of writing them in ES5.
- For example the **_arrow function_** it is simply a **_different syntax_** and so babel can simple write **_function instead of that_**.
- And the same goes with **_const_**, so it's very easy to simply covert that to **_var_**.
- But same is **_not true_** for **_real new features_** that were added to the language like **_find and promise_**.

So these new additions to the language so **_these new features_**, they can **_simply not be transpiled_**. It's simply **_not possible_**. Only syntax is easy to convert, so easy to compile.

- **_For these added features_** again, such ad promises or all the array methods like finds and really a bunch of other stuff **_we can polyfill them_**.

---

Now babel used to do polyfilling **_out of the box some time ago_** but recently they started to simply recommending **_another library_**. `npm i core-js`.

- And so we now have to manually import data as well.
  `import 'core-js/stable';`

- **_core-js/stable_** creates **_all stable properties_** and do we are actually not even using these.
- And so if we wanted we could **_cherry pick_** basically just the features that we actually **_want to polyfill_**.
- Now that of course is a lot of work but it will also greatly reduce the bundle size.
- So instead of basically importing everything there is:

```js
// import 'core-js/stable';
import "core-js/stable/array/find";
import "core-js/stable/promise";
```

So that's going to be a lot of work which we usually don't do but it is possible again if you are really worried about your bundle size.

**_Polyfilling async functions_**:

Finally, just to finish there is still **_one feature that is not polyfilled_** by `import 'core-js/stable';` **_polyfilling async functions_**.

- And so we have always need to install just one more package which is called
  `npm install regenerator-runtime`
- So we need import:
  `import 'regenerator-runtime/runtime';`

```js
class Person {
  #greeting = "Hey";
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting} ${this.name}`);
  }
}

const jonas = new Person("jonas");

console.log("Jonas" ?? null);
console.log(cart.find((el) => el.quantity >= 2));
Promise.resolve("Test").then((x) => console.log(x));

// * Polyfilling and parcel-bundler automatically polyfills -------------------
// - these added features
import "core-js/stable";

// - cherry pick -------------------
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

// - Polyfilling async functions
import "regenerator-runtime/runtime";
```

---

## Modern, Clean And Declarative JavaScript Programming:

One of the most important things when your code is that you should write readable code, which basically means:

**_Readable code_**:

- Write code so that **_others_** can understand it.
- Write code so that you can understand it in 1 year.
- Avoid too 'clever' and overcomplicated solutions
- Use descriptive variable names: **_what they contain_**
- Use descriptive functions names: **_What they do_**

Next, there are some more **_general rules_** that you should follow in order to write modern and clean code,which are:

- Use **_DRY (Don't Repeat YourSelf)_** principle (refactor your code).
- Don't pollute global namespace, encapsulate instead,
- Don't use var
- Use string type checks (=== and !==)

Now about **_writing functions_**, which is one of the most important things that we do as javaScript developers:

- Generally, functions should do **_only one thing_**
- Don't use more than 3 functions parameters
- Use default parameters whenever possible
- Generally, return same data type as received
- Use arrow functions when they make code more readable

And now after functions, our next topic is **_Object Oriented Programming_**.

- Use ES6 classes
- Encapsulate data and **_don't mutate_** it from outside the class
- Implement method chaining
- In regular objects, when you're writing methods than please **_don't use the arrow_** functions there because of by doing that you will not get access to the **_this keyword_** of that object.

Next up, let's talk about **_avoiding nested code_**:

- Use early **_return_** (guard clauses)
- Use ternary (conditional) or logical operators instead of **_if_**
- Use multiple **_if_** instead of **_if/else-if_**
- Avoid **_for_** loop, use array methods instead
- Avoid callback-based asynchronous APIs

So the next topic which is **_Asynchronous code_**:

- Consume promises with async/await for best readability
- Whenever possible, run promise in **_parallel (Promise.all)_**
- Handle errors and promise rejections

---

So these are the main best practices for writing modern and clean JavaScript. But now let's turn our attention to a completely different way of writing code.

There are two fundamentally different ways of writing code in programming, which we also call paradigms

## Imperative And Declarative code:

1. **Imperative code**:

- Whenever we write imperative code, we basically need to explain the computer how to do **_a certain things_**
- So basically we need to explain every single step that the computer needs to follow in order to achieve a certain result.
- **_Example_**: step-by-step recipe of a cake

```js
const arr = [2, 4, 6, 8];
const doubled = [];
for (let i = 0; i < arr.length; i++) {
  doubled[i] - arr[i] * 2;
}
```

2. **Declarative code**

- Where the programmer tells the computer only **_what to do_**
- We simply describe the way the computer should achieve the result
- The **_HOW_** (step-by-step instructions) get abstracted away
- **_Example_**: Description of a cake
- So simply describing the task and the results that should be achieved is the declarative way of the doing it.

```js
const arr = [2, 4, 6, 8];
const doubled = arr.map((n) => n * 2);
```

So the difference between imperative and declarative is not just some theoretical difference. So the declarative paradigm is actually a really big an popular programming paradigm which has even given rise to sub paradigm called **_functional programming_**.

---

## Use Declarative And Functional Code:

- Functional programming is basically **_declarative_** programming paradigm
- Based on the idea of writing software by combining many **_pure functions_**, avoiding **_side effects_** and mutable data

And actually functional programming and to writing declarative code has now basically become the modern way of writing code in the JavaScript world.

**_Side Effect_**:

- A side effect is basically simply a modification (mutation) of any data outside of the function (mutating external variables, logging to console, writing to DOM, etc)
- So for example, mutating any variable data is external to the function is causing a side effect.

**_Pure function_**:

- A pure function is a function without side effects. Does not mutate and also dose not depend on external variables. `Given the same inputs always returns the same output`

---

**Some Functional Programming Techniques**:

- Try to avoid data mutations
- Use built-in methods that don't produce side effects
- Do data transformations with methods such as .map(), .filter() and .reduce()
- Try to avoid side effects in functions: this is of course not always possible.
  `The forEach() actually also doesn't work in functional programming, because forEach creates side effects. So it does something outside of its function.`

So these are mainly just suggestions, but which will still create more readable and overall better and cleaner code.

The functional programming is only a part of using and writing declarative code. So in order to write code that is more declarative:

**_Declarative Syntax_**:

- Use array and object destructuring
- Use the spreed operator (...)
- Use thr ternary (conditional) operator
- Use template literals

---

`Always Fix Bad, Old, Imperative Code, To Declarative Code For Modern, Clean JavaScript Programming`.

---

## Static files

**_imports for static file: Parcel 1_**

- Just normal imports and path to the file.

```js
import icons from "../img/icons.svg";
// console.log(icons);

```

**_imports for static file: Parcel 2_**

- for any static assets that are not programming files So for like images or videos or sound life we need to write **_url: then path to the file_**

```js
import icons from "url:../img/icons.svg";
// console.log(icons);

```
  
