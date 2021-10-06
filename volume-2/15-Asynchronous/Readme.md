## Asynchronous Javascript

- The goal of asynchronous javaScript is basically to deal with long-running tasks, that basically run in the background.
- The most common use case of asynchronous javaScript is to fetch data form remote servers in so-called Ajax calls.

---

## Synchronous And Asynchronous code:

**_Synchronous code_**:

- Synchronous code is **_executed line by line_** in the exact order of execution that we defined in our code.
- Each line of code **_waits_** for previous line to finish.
- Long-running operation **_block_** code execution.

**_Asynchronous code_**:

- Asynchronous code is executed **_after a task that runs in the "background" finishes_**;
- The main is not going block. Asynchronous code is **_non-blocking_**.
- Execution doesn't wait for an asynchronous task to finish its work.
- Asynchronous programming is all about coordinating the behavior of our program over a certain period of time.
- So asynchronous literally means not occurring at the same time;
- Callback functions alone do **_NOT_** make code asynchronous!
- addEventListener does **_NOT_** automatically make code asynchronous!

---

## AJAX And APIs

**AJAX (Asynchronous JavaScript And XML)**:

- AJAX allows to us to communicate with remote web servers in an **_asynchronous way_**.
- With AJAX calls, we can **_request data_** from web servers dynamically.
- So with AJAX we can do an HTTP request to the server, and the server will then set back a response containing data that we requested.
- And this back and forth development between Client and server all happens asynchronously in the background.
- There can even be different types of requests like get request to receive data or post request to send data to a server.
- Now when we're asking a server to send us some data this server usually contains a **_web API_**. And this API is the one that has the data that we're asking for.

**API (Application Programming Interface)**:

- It is a piece of software that can be used by another piece of software, in order to allow **_application to talk each other;_** and **_exchange information_**.
- There are be many types of APIs in web development:

  - **_DOM API_**
  - **_Geolocation API_**:

    - These called APIs because they are a self-contained piece of software that allow other pieces of software to interact with them.

  - **_Own class API_**:

    - where we make some methods available as a **_public interface_**.
    - So object made from a class can be seen as self-contained encapsulated pieces of software that other pieces of software can interact with.

  - **_"Online" API_**:
    - An online API is essentially an application running on a web server, which receives request for data the retrieves this data from some database and sends it back to the client.
    - When building application in practice, we simple call these online APIs,as **_API_** and many people will also call these APIs as **_Web APIs_** or again just simply API.

- We can build **_our own_** web APIs (required back-end development, e.g with nodejs) or use **_3rd-party_** APIs.

`List of APIs: https://github.com/public-apis/public-apis`

---

## API Data Format:

Ajax stands for asynchronous JavaScript and XML, so the X there stands for **_XML_**.

- **_XML_**:

  - Extensible markup language (XML) is a data format, which used to be widely used to transmit data on the web.

- However, these days basically no API uses XML data anymore.
- The term Ajax is just an old name that got very popular back in the day and so it's still used today.
- Even though we don't use XML anymore.

- So instead, most APIs these days use the **_JSON data format_**.

- **_JSON data format_**:
  - JSON data format is the most popular data format today because it's basically just a javaScript object but converted to a string.
  - And so therefore, it's very easy to send across the web and also to use in javaScript once the data arrives.

---

## AJAX CALL: XMLHTTPREQUEST:

```js
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  // console.log(request);

  // we need the Method(type of request) and URL to which we will make the AJAX call.
  request.open("GET", `https://restcountries.com/v2/name/${country}`);

  // send off the request then fetches the data in the background.
  // And once that is done, it will emit the load event. using the event listener
  request.send();

  // register a callback on the request object for the load event.
  // as soon as data arrives this callback function will be called.
  request.addEventListener("load", function () {
    // console.log(this.responseText);

    const [data] = JSON.parse(this.responseText);
    // console.log(data);

    const html = `
    <article class="country">
        <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)}M people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
`;

    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData("portugal");
getCountryData("usa");
```

---

## How The Web Works: Request And Response

Whenever we try to access a Web server, the browser, which is the client, sends a request to the server and the server will then send back a response and that response contains the data or the Web page that we requested.

And this process works the exact same way no matter if we're accessing an entire Web page or just some data from a Web API. And this whole process actually has a name and it's called the Request-response model or also the Client-server architecture.

`https://restcountries.eu/rest/v2/alpha/PT`

- Now, every URL gets an **_HTTP or HTTPS_**, which is for the **_protocol_** that will be used on this **_connection_**.
- Then we have the **_domain name_**, which is restcountries.eu in this case.
- And also **_after a slash(/)_** we have to **_so-called resource_** that we want to **_access_**. And in this case, that's /rest/V2 and so on.

Now this domain name, restcountries.eu is actually not the **_real address_** of the server that we're trying to **_access_**. It's really just a **_nice name_** that is easy for us to **_memorize_**.

But what this means is that we need a way of kind of **_converting_** the **_domain name to the real address of the server_**. And that happens through a so-called **_DNS_**.

- **_DNS (Domain Name Server)_**:
  - The domain name servers are a **_special_** kind of server, they are basically like the **_phone books of the Internet_**.
  - And this special server will then simply match the web address of the URL to the server's real IP address. And it sent back the real IP address and port number(identify a specific service that's running on a server) to the browser.
  - And actually this all happens through your Internet service provider.

Then browse(client) is communicate with web Serve with TCP/IP socket connection protocol.

---

## Callback Hell:

A callback hell is when we have a lot of nested callbacks in order to execute asynchronous tasks in sequence. And in fact, this happens for all asynchronous tasks which are handled by callbacks.

- Callback hell callback function inside callback function and so on.

---

## Promises And The Fetch API:

- Promises are ES6 features.

Promises is an object that is used as a **_placeholder_** for the **_future result_** of an **_asynchronous operation_**.

- Promise is like a _container_ for an asynchronously delivered value.
- Promise is a container for a future value. Example: Response from AJAX call.

By using promises we no longer need to rely on events and callbacks passed into asynchronous functions to handle asynchronous result.

With promises, we can **_chain promises_** for a sequence of asynchronous operations instead of nesting callbacks: **_Escaping callback hell_**.

- `The Fetch promise does not reject on a 404 error or on a 403 error, which was actually the original error`

---

**Promise Lifecycle**:

- Since promises works with asynchronous operation they are time sensitive. So they change over time.
- And so promise can be in different states and this is what they call the cycle of a promise.

- **_Pending_**:

  - Before the future value is available.
  - Now during this time asynchronous task is still doing its work in the background.

- **_Settled_**:

  - When the pending task finally finishes we say that the promise is settled.
  - There are two different types of settled promises

    - **_Fulfilled promises_**: that are successfully resulted in a value just as we expect it.
    - **_Rejected promises_**: that there has been an error during the asynchronous task.

    `We are able handle these different states in our code!`

- The important thing about promises is that a promise is only settled once. So from there the state will remain unchanged forever.
- So the promise was either fulfilled or rejected, but it's impossible to change that state.

---

**Consuming Promises**
**Chaining Promises**:
**Handling Rejected Promises**:

- Whatever we return from the promise will become the fulfilled value of the promise.
- When any then method **_returns a promise_** and so we can handle it using the **_another then method_**: **_Chaining promises_**.
- And to fulfill to value, so the success value of the another then method's value is returns values of above then method.

```js
const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(
      (response) => response.json()
      // , error => alert(error)  // we can handle error as 2nd callback function of then method
    )
    .then((data) => {
      console.log(data[0]);
      // renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) return;

      // Country 2
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then((response) => response.json())
    .then((data) => console.log(data)) // renderCountry(data, "neighbour")
    .catch((err) => {
      console.error(`${err} ***`);
    })
    // no matter promise is fulfilled or rejected this finally method always is called.
    .finally(() => {
      // example loading spinner
      console.log("Im always executable callback function");
    });
};

getCountryData("portugal");
```

```
.then(): always called when promised is fulfilled
.catch(): always called when promised is rejected
.finally(): no matter promise is fulfilled or rejected this finally method always is called. For example: loading spinner
```

---

## Throwing Errors Manually

```js
if (!response.ok) throw new Error(`Country not found (${response.status})`);

// it created a rejection and that rejection error is handle by .catch method;
```

---

## Asynchronous Behind The Scenes: The Event Loop

**JavaScript Runtime**:

A JavaScript runtime is basically a container which includes all the different pieces that are necessary to execute JavaScript code.

- Now, the heart of every JavaScript runtime is the engine. So, this is where code is actually executed and where objects are stored in memory. So these two things happen in the call stack and in the heap.

Now, what's important to note here is that JavaScript has only one threat of execution. And so it can only do one thing at a time.

- There is absolutely no multitasking happening in JavaScript itself.
- Now, other languages like Java can execute multiple pieces of code at the same time, but not JavaScript.

Next we have the web APIs environment. These are some APIs provided to the engine, but which are actually not part of the JavaScript language itself.

- So, that's things like the DOM timers the fetch API, the geolocation API, and so on and so forth.

Next up, there is the callback queue and this is a data structure that holds all the ready to be executed callback functions that are attached to some event that has occurred.

- Finally, whenever the call stack is empty the event loop takes callbacks from the callback queue and puts them into call stack so that they can be executed.

So the **_event loop_** is the essential piece that makes asynchronous behavior possible in JavaScript.

- It's the reason why we can have a non blocking concurrency model in JavaScript.
- And a concurrency model is simply how a language handles multiple things happening at the same time.

---

**Asynchronous JavaScript Works Behind the Scenes**:

How can asynchronous code be executed in a non-blocking way, if there is only one thread of execution in the engine.

- Asynchronous tasks run in WEB APIs. If that asynchronous task is finished then it put it's the callback in the callback queue.

**_Event loop_**:

Events loop looks into the call stack and determines whether it's empty or not. Except of course for the global context,

- Then if the stack is indeed empty which means that there's currently no code being executed
- then it will take the first callback from the callback queue and put it on the call stack two will be executed. And this is called an **_event loop tick_**.
- So, as we can see here the event loop has the extremely important task of doing coordination between the call stack and to callbacks in the callback queue.
- We can also say that the event loop does the **_orchestration_** (decides when each callback is executed) of this entire JavaScript runtime.

The JavaScript language itself has actually no sense of time. That's because everything that is asynchronous does not happen in the engine.

- It's the runtime who manages all the asynchronous behavior.
- And it's the event loop who decides which code will be executed next.
- But the engine itself simply executes whatever code it has given.

`So, in a nutshell, the web APIs environment, the callback queue and the event loop, all together, make it possible that asynchronous code can be executed in a non blocking way even with only one thread of execution in the engine.`

**_Promises_**

With promises things work in a slightly different way. So, let's say that the data has now finally arrived. And so the fetch is done.

- Now, callbacks related to promises do actually not go into the callback queue.
- So, again this callback did we still have here, which is coming from a promise will not be moved into the callback queue.
- Instead, callbacks of promises have a special queue for themselves, which is the so called **_microtasks queue_**.
  - It basically has priority over the callback queue. So, at the end of an event loop tick, so after a callback has been taken from the callback queue, the event loop will check.
  - If there are any callbacks in the microtasks queue than it will run all of them before it will run any more callbacks from the regular callback queue.
- And, by the way, we call these callbacks from promises microtasks. And therefore the name microtasks queue.

```
The idea of running asynchronous code with regular callbacks and with microtasks coming from promises is very similar.
The only difference is that they go into different queues and that the event loop gives microtasks priority over regular callbacks.
```

```js
console.log("Test Start"); // First Executed
setTimeout(() => console.log("0 sec timer"), 0); // Fifth Executed (regular callback)
Promise.resolve("Resolved Promise 1").then((res) => console.log(res)); // Third Executed (microtasks priority)
Promise.resolve("Resolved Promise 2").then((res) => {
  // Fourth (microtasks priority)
  for (let i = 0; i < 1000000000; i++) {}

  console.log(res);
});

console.log("Test End"); // Second Executed
```

---

## Creating Promises

We create a new promise using the promise constructor `new Promise()` just like many other built-in objects.

- Promises are essentially just a special kind of object in JavaScript
- Now the promise constructor takes exactly one argument and that is the so-called **_executor function_**.
- As soon as the **_promise constructor runs_** it will automatically **_execute the executor function_** that we pass in.
- And as it executes the executor function it will do so by passing in **_two other arguments_** functions(**_resolve,reject_**).
- In order to set the **_promise as fulfilled_**, we use the **_resolve function_**.
- In order to set the **_promise as rejected_**, we use the **_reject function_**.
- In to the **_reject function_** we pass in the **_error message_** that we later want ro be able in the **_catch handler_** so in the catch method.

```js
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lootter draw is happening");

  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve("You WIN");
    } else {
      // reject('You lost your money');
      reject(new Error("You lost your money"));
    }
  }, 2000);
});

// Consuming promise
lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
```

`After creating promises we have to consume that promise for use.`

---

**Promisifying**:
We usually only built promises to basically wrap old callback based functions into promises. And this is a process that we call **_promisifying_**.

- So basically **_promisifying_** means to convert callback based asynchronous behavior to promise based.

```js
/ promisifying setTimeout
const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);  // here we are _promisifying_ callback function
    });
}

wait(1)
    .then(() => {
        console.log('1 second passed');
        return wait(2);
    })
    .then(() => {
        console.log('2 second passed');
        return wait(3);
    })
    .then(() => {
        console.log('3 second passed');
        return wait(4);
    });
```

---

## Consuming Promises With Async/Await

We start by creating a special kind of function which is an **_async_** function. And we do this by simply adding async in front of regular function.

Async/Await simply syntactic sugar over the then method in promises. So of course behind the scenes, we are still using promises. We are simply using a different way of consuming them.

`Async/Await is only about consuming promise. The way that we built them is not influenced in any way.`

- **_Async function_**:
- A function that will basically keep running in the background while performing the code that inside of it, then when this function is done it automatically returns a promises.

- Inside an async function we can have one or more **_await_** statements

**_await_**:

- In an async function we can use the await keyword to basically await for the result of the promise.
- So basically await will stop decode execution at this point of the function until the promise is fulfilled. And so until the data has been fetched.

So we can simply await until the value of the promise is returned basically and then just assign that value to variable meant that is something that was impossible before.

`Async/Await always returns promise.`

```js
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(res => console.log(res));

const whereAmI = async function (country) {
  // Geolocation
  const pos = await getPosition();
  const { latitude: lat, longitude: lng } = pos.coords;

  // Reverse geocoding
  const resGoe = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
  );
  const dataGeo = await resGoe.json();
  console.log(dataGeo);

  // Country data
  const res = await fetch(
    `https://restcountries.com/v2/name/${dataGeo.countryName}`
  );
  // console.log(res);

  const data = await res.json();
  console.log(data);

  // renderCountry(data[0]);
};

whereAmI();
console.log("FIRST");
```

---

## Error Handling With Try...Catch:

With a Async/Await, we can't use the catch method that we use before, because we can really attach it anywhere. So instead, we use something called a try catch statement.

- And the try catch statement is actually used in regular JavaScript as well. So it's been in the language probably since the beginning.
- So try catch has nothing to do with a async/await but we can still use it to catch errors in async functions.

So we can basically wrap all our code in a try block and so JavaScript will then basically try to execute this code. So just as normal code.

- If there is any error in try block then we can handle that error in catch block. Simply catch block catches the all error of try block.

```js
// * Normally -----------------------------------
// let y = 1;
// const x = 2;
// x = 3 // Uncaught TypeError: Assignment to constant variable.

// * Try catch -----------------------------------
try {
  let y = 1;
  const x = 2;

  x = 3;
} catch (err) {
  // alert(err.message);
  console.log(err); // TypeError: Assignment to constant variable.
}
```

---

## Returning Values From Async Functions:

Async functions always returns a promise.

- The value that we return from an async function will become the **_fulfilled value of the promise_** that is returned by the function while at least if there is no error here happening in the function.

---

## Running Promise In Parallel: Promise.all Combinator

Promise.all: Takes in an array of promises, and it will return a new promise which will then run all the promises in the array at the same time.

- If the one of the promises **_reject_**, then the **_whole Promise.all actually rejects_** as well.
- We say that Promise.all() short circuits when one promise rejects because one rejected promise is enough for the entire thing to reject as well.

The Promise.all is called a **_combinator function_** because it allows us to combine multiple promises.

```js
const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const get3Country = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);
    // console.log([data1.capital, data2.capital, data3.capital]);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);

    console.log(data.map((d) => d[0].capital));
  } catch (err) {
    console.log(err);
  }
};

get3Country("canada", "portugal", "tanzania");
```

---

## Other Promise Combinators: Race, Allsettled And Any

**_Promise.race_**:

- The Promise.race, just like all other combinators receives an array of promises and it also returns a promise.
- Now this promise returned by Promise.race is settled as soon as one of the input promises settles.
- And remember that settled simply means that value is available, but it doesn't matter if the promise got rejected or fulfilled.
- So in Promise.race basically the first settled promise wins the race.
  `In Promise.race we only get one result of who win the race and not an array of the results.`

```js
(async function () {
    const res = await Promise.race([
        getJSON(`https://restcountries.com/v2/name/italy`),
        getJSON(`https://restcountries.com/v2/name/egypt`),
        getJSON(`https://restcountries.com/v2/name/mexico`),
    ]);
    console.log(res[0]);
})(); */

const timeout = function (sec) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error('Request took too long!'));
        }, sec * 1000);

    });
};

Promise.race([
    getJSON(`https://restcountries.com/v2/name/tanzania`),
    timeout(5)
])
    .then(res => console.log(res[0]))
    .catch(err => console.error(err));

```

**_Promise.allSettled_**:

- It is from ES2020, so it takes in an array of promises again and it will simply return an array of all the settled promises. And so again, no matter if the promises got rejected or not.
- It's similar to Promise.all in regard that it also returns an array of all the results
- But the difference is that Promise.all will short circuit as soon as one promise rejects,
- But Promise.allSettled, simply never short circuits. So it was simply returns all the results of all the promises.

```js
Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("Error"),
  Promise.resolve("Another Success"),
]).then((res) => console.log(res)); // all value are like settled

Promise.all([
  Promise.resolve("Success"),
  Promise.reject("Error"),
  Promise.resolve("Another Success"),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err)); // Error value
```

**_Promise.any_**:

- Promise.any is even more modern it is ES2021.
- As always Promise.any takes in an array of multiple promises and this one will then return the first fulfilled promise.
- And it will simple ignore rejected promises.
- So basically Promise.any is very similar to Promise.race with the difference that rejected promise are ignored.

```js
Promise.any([
  Promise.resolve("Success"),
  Promise.reject("Error"),
  Promise.resolve("Another Success"),
])
  .then((res) => console.log(res))  // only settled value
  .catch((err) => console.error(err));
```
