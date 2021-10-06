## How To Plan A Web Project

1. **User Stories**:

- A user story is basically a description of the application's functionality from the user's **_perspective_**. All user stories put together describe the entire application.
- **_Common format_**: Who[type of user] What[an action] Why[a benefit].

2. **Features**:

- So user stories are basically a high level overview of the whole application, which allow us developers to determine the exact features that we need to implement in order to make the user stories actually works as intended,

3. **Flowchart**

- To visualize the different actions that user can take and how the program react to these actions, we usually put all these features into a nice flow chart.

4. **Architecture**

- Once we know exactly what we're gonna build it's time to think about how we're gonna build it. And this brings us to the project's architecture.
- And in this context, architecture simply means how we will organize our code, and what javaScript features we will use.
- SO the project's architecture is essentially what holds all the code together.
- It gives us a structure in which we can then develop the application's functionality.

```
 Once we thought about the project's architecture, we are finally done with the planning step, and are then ready to finally move on to the development step.

- This is where we're gonna implement the plan that we created using javaScript code.
```

---

---

## Geolocation API:

```js
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      console.log(position);
      const { latitude } = position.coords;
      const { longitude } = position.coords;

      console.log(latitude, longitude);
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
    },
    function () {
      alert("Could not get your position");
    }
  );
}
```

---

## Displaying A Map Using Leaflet Library:

- **_Doc_**: https://leafletjs.com/index.html
- **_tileLayer(theme)_**: https://leaflet-extras.github.io/leaflet-providers/preview/
- **_Displaying A Map Marker_**: https://leafletjs.com/reference-1.7.1.html
