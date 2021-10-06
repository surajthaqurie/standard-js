## Asynchronous JavaScript

- **Synchronous**:

  - All the instructions are executed one after the other, line by line just in the order that they appear in the code.

- Asynchronous functions to run on the "background";
- We pass in callbacks that run once thr function has finished its work
- Move on immediately: Non-blocking!, which means that it can keep processing the code in aSynchronous way, line by line.

- **Event Loop**
- **Call Back**
- **Promises**:
  - Object that keeps track about whether a certain event has happened already or not;
  - Determines what happens after the event has happened
  - Implements the concept of a future value that we're expexting.
  - `Promise chain` helps to resolve multiple promises (.then, .then, ....)
- **Async/Await**:

  - ES8, or ES2017
  - It allows us to consume promises.
  - The `await` expression can only be used inside `async` function.
  - And this Async function remember it runs in the background, it block the code in async function which runs in the background.

- **Ajax And Api**:
- **_Ajax_**:

  - Asynchronous JavaScript And XML
  - It allows us to asynchronously communicate with the remote servers.

  - **_Api_**:

    - Application Programming Interface
    - It's a piece of software that can be used by another piece of software in order to allow applications to talk to each other.
    - Application that receives requests and send back responses.
    - Own API, for data coming form own server,
    - 3rd-party APIs: (Google map, Weather Data, Movies Data, Embed Youtube videos etc).
    - For Example Api for Weather : https://www.metaweather.com/api/

- **Same Origin Policy**:

  - Prevents us from making AJAX requests to a domain different than our own domain.
  - `No 'Access-Control-Allow-Origin' header is present on the requested resource.`
  - To make requests in different domains something called `Cross Origin Reasource Sharing (CORS)` is used.
  - Set proxy or channel to the request through their own server. Like doing Ajax requests on our own server where the same origin policy doesn't exit and then send the data to the browser.
  - https://nordicapis.com/10-free-to-use-cors-proxies/ and https://cors-anywhere.herokuapp.com/

  - Build Your Own Proxy

  ```
  https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9

  app.use((req, res, next) => {

  res.header('Access-Control-Allow-Origin', '*');
  next();
  });

  ```
