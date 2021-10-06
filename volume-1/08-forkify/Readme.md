**Modern JavaScript**

**Webpack**: https://webpack.js.org/

- Webpack is the most commonly used assest bundler.
- So it doesn't actuallu not only bundle javaScript files or modules, but bundles all kinds of assests like javaScript, CSS and images.
- Webpack there are four core concepts:
  - The entry point(entry): where webpack will start the bundling. This is the file where it will start looking for all the dependencies which it shoulf then bundle together.
  - The output(output): which tells webpack where to save our bundl file.
  - loaders
  - plugins
- **_Mode in webpack_**:

  - Development: simply build our bundler without minifying our code in order to be as fast ad possible.
  - Production: Will automatically enable all kind of optimization, like minifixation and tree shaking in order to reduce the final bundle size.

**_In package.json_**

```
"scripts": {
    "dev": "webpack --mode development",
    "build": "webpack --mode production",
    "start": "webpack server --mode development --open"
  },

  "devDependencies": {
    "webpack": "^5.52.1",
    "webpack-cli": "^4.8.0",
    "webpack-dev-server": "^3.1.1"
  }

  Here: webpack-dev-server higher version may not be configure properly

```

**Babel**: https://babeljs.io/

- Its a JavaScript compiler.
- **_Presets_**:
  - A collection of code transform plugins, which are like the pieces of code that actually apply the actual transformations to our code.
- **_Polyfill_**:
  - Stuff that were not present in ES5 so we cannot convert them back, So wee need to polyfill them.

**Other Stuffs**:

- Recipe API: https://forkify-api.herokuapp.com/
- Proxy: https://cors-anywhere.herokuapp.com/
- Element.closest(): https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
- Array.prototype.slice(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
- HTMLElement.dataset: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
- window.load()
- window.hashchange()
- window.location.hash.replace() 
- Regular Expressions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
- eval()
- join()
- e.target.matches()
