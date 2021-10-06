/*
  ~ Exporting And Importing In ES6 Modules -----------------------------------------------------------------
*/

// * Importing modules ----------------------------------------------
//  - Importing multiple name exports ----------------------------
// import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";  // full name with extensions for html support
// addToCart('bread', 5);
// console.log(price, tq);

// - Importing all ----------------------------
// import * as ShoppingCart from './shoppingCart.js';
console.log('Importing module');

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice, ShoppingCart.tq);

// - Importing export default any name ------------------
// import add from './shoppingCart.js';
// add('pizza', 2);

// - Importing all with mix exports ----------------------
// ! in practice we never mix name and default exports in the same module (bad Practice)
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// add('pizza', 2);
// console.log(price);

// - Imports are a life connection to export ------------------
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);


/*
  ~ The Module Pattern -----------------------------------------------------------------
*/

const shoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;

  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });

    console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
  }

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  // Making Public API
  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity
  };

})();

shoppingCart2.addToCart('apple', 4);
shoppingCart2.addToCart('pizza', 2);
console.log(shoppingCart2);

// console.log(shoppingCart2.shippingCost);  // undefined


/*
  ~ CommonJS Modules -----------------------------------------------------------------
*/

/*
// Export
exports.addToCart = function (product, quantity) {
  cart.push({ product, quantity });

  console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
}

// Import
const { addToCart } = require('./shoppingCart.js');
*/

/*
  ~ Node Package Manger -----------------------------------------------------------------
*/
// * lodash-es-----------------------------------------
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

import cloneDeep from 'lodash-es';

// Parcel is even smart enough to then automatically install this package here
// Parcel can indeed work with all the CommonJS modules as well.
// So this way we can then simply use all the modules that are available on NPM
// And which still use this older module format
// import cloneDeep from 'lodash';



const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true }
}

const stateClone = Object.assign({}, state);
// console.log(stateClone);

// state.user.loggedIn = false;
// console.log(stateClone);  // false

const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;

// console.log(stateDeepClone);  // true

/*
  ~ Bundling With Parcel And Npm Script -----------------------------------------------------------------
*/

// This code that only Parcel understands so it will not make it into our final bundle
// because the browser is not going to understand any of it
// Hot module reloading: When ever we change one of the modules it will then of course, trigger a rebuild, like this 
// But that new modified bundle will then automatically like magic, get injected into the browser without triggering a whole page reload.
if (module.hot) {
  module.hot.accept();
}

// Whenever we change something here this will then not reload this part of the page
// The state is maintained whenever we reload the page.


/*
  ~ Configure Babel And Polyfilling -----------------------------------------------------------------
*/

class Person {
  #greeting = 'Hey'
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting} ${this.name}`)
  }
}

const jonas = new Person('jonas');

console.log('Jonas' ?? null);
console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('Test').then(x => console.log(x));

// * Polyfilling and parcel-bundler automatically polyfills -------------------
// - these added features
import 'core-js/stable';

// - cherry pick -------------------
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

// - Polyfilling async functions
import 'regenerator-runtime/runtime';


