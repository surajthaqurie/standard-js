'use strict';

/**
 * ~ Destructuring Array --------------------------------------------------------------
 **/


/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (staterIndex, mainIndex) {
    return [this.starterMenu[staterIndex], this.mainMenu[mainIndex]];
  }

};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// skipping the elements
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// * Swapping ( switching) variable ---------------------
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main,secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// * Receive 2 return values from a function -------------------------------
// console.log(restaurant.order(2, 0)); //['Garlic Bread', 'Pizza']
const [stater, mainCourse] = restaurant.order(2, 0);

console.log(stater, mainCourse);


// * Nested destructuring --------------------------------
const nested = [2, 4, [5, 6]];

// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// * Default values ---------------------------------------
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8 9 1
*/

/**
 * ~ Destructuring Object --------------------------------------------------------------
 **/

/*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
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
  order: function (staterIndex, mainIndex) {
    return [this.starterMenu[staterIndex], this.mainMenu[mainIndex]];
  },
  // * Function parameters ---------------------------------------
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address: a
  }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${a} at ${time}`);
  }

};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 2
});


const {
  name,
  openingHours,
  categories
} = restaurant;
console.log(name, openingHours, categories);

// * New Variable Name ---------------------------------------
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags
} = restaurant;

console.log(restaurant, hours, tags)


// * Default values ---------------------------------------
const {
  menu = [],
    starterMenu: starters = []
} = restaurant;

console.log(menu, starters);

// * Mutating variables ---------------------------------------

let a = 111;
let b = 999;
const obj = {
  a: 23,
  b: 7,
  c: 14
};

// {a,b} =obj;  // Uncaught SyntaxError: Unexpected token '='

({
  a,
  b
} = obj);

console.log(a, b);

// * Nested objects ---------------------------------------
const {
  fri: {
    open: o,
    close: c
  }
} = openingHours;

console.log(o, c);
*/

/**
 * ~ Spread Operator(...) --------------------------------------------------------------
 **/

/*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3} `)
  }

};

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Shallow copy
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: array, string, maps, sets. NOT objects

// * String ----------------------------------------------------------------
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters); // ['J', 'o', 'n', 'a', 's', '', 'S.']

console.log(...str); // J o n a s

// This is not a place that expected multiple values separated by a comma
// console.log(`${...str} Schmedthmann`); // Uncaught SyntaxError: Unexpected token '...'

// * Real-world example(functions) ----------------------------------------------------------------
const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'), prompt('Let\'s make pasta! Ingredient 2?'), prompt('Let\'s make pasta! Ingredient 3?')];
console.log(ingredients);

restaurant.orderPasta(...ingredients);
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// * Objects ----------------------------------------------------------------
const newRestaurant = {
  foundedIn: 1998,
  ...restaurant,
  founder: 'Guiseppe'
};

console.log(newRestaurant);

// Shallow copy
const restaurantCopy = {
  ...restaurant
};
restaurantCopy.name = 'Ristorante Roma';

console.log(restaurantCopy.name);
console.log(restaurant.name);
*/


/**
 * ~ Rest pattern and parameters --------------------------------------------------------------
 **/

/*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
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
  order: function (staterIndex, mainIndex) {
    return [this.starterMenu[staterIndex], this.mainMenu[mainIndex]];
  },
  // * Parameter ------------------------------------------
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }

};

// - Destructuring----------------------------------

// SPREAD, because on RIGHT side of =
const arr = [1, 2, 3, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...other] = [1, 2, 3, 4, 5];
console.log(a, b, other);


const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);


// * Object -------------------------------------------------------
const {
  sat,
  ...weekdays
} = restaurant.openingHours;
console.log(weekdays);


// * Function -------------------------------------------------------

const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
}


add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x); // spread operator

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
*/


/**
 * ~ Short Circuiting (&& and ||) --------------------------------------------------------------
 **/

// Use ANY data type, return ANY data type, short-circuiting
/*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
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
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
  order: function (staterIndex, mainIndex) {
    return [this.starterMenu[staterIndex], this.mainMenu[mainIndex]];
  },
};

// * OR operator --------------------------------------
console.log('--------OR---------------');

console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null); // null

console.log(null || undefined); // undefined

console.log(undefined || 0 || '' || 'hello' || 23 || null);

restaurant.numGuests = 0; // - NOTE Is a falsy value 
// restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

// * AND operator --------------------------------------
console.log('--------AND---------------');

console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas'); // null

// Practical Example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');
*/

/**
 * ~ Nullish Coalescing Operator(??) --------------------------------------------------------------
 **/

/*
const restaurant = {
  numGuests: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
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
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
  order: function (staterIndex, mainIndex) {
    return [this.starterMenu[staterIndex], this.mainMenu[mainIndex]];
  },
};

restaurant.numGuests = 0; // - NOTE Is a falsy value 
// restaurant.numGuests = 23;

const guests = restaurant.numGuests || 10;
console.log(guests);


const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

/**
 * ~ Looping Arrays: The FOR-OF Loop --------------------------------------------------------------
 **/

/*
const restaurant = {
  numGuests: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
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
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
  order: function (staterIndex, mainIndex) {
    return [this.starterMenu[staterIndex], this.mainMenu[mainIndex]];
  },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  // console.log(item);
  console.log(`${item[0] +1}: ${item[1]}`);
};


for (const [i, el] of menu.entries()) {
  console.log(`${i +1}: ${el}`);
};

// console.log([...menu.entries()]); 
*/

/**
 * ~ Enhanced Object Literals --------------------------------------------------------------
 **/
/*
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

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
  [`day-${2+4}`]: {  // day-6
    open: 11,
    close: 23,
  },
};
const restaurant = {
  numGuests: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // * ES6 enhanced object literals ---------------------
  // openingHours: openingHours, // Before ES6
  openingHours, // After ES6

  // Before ES6
  order: function (staterIndex, mainIndex) {
    return [this.starterMenu[staterIndex], this.mainMenu[mainIndex]];
  },
  // After ES6
  order(staterIndex, mainIndex) {
    return [this.starterMenu[staterIndex], this.mainMenu[mainIndex]];
  }
};
*/

/**
 * ~ Optional Chaining(?.) --------------------------------------------------------------
 **/

/*
const restaurant = {
  numGuests: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
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
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
  order: function (staterIndex, mainIndex) {
    return [this.starterMenu[staterIndex], this.mainMenu[mainIndex]];
  },
};

const {
  openingHours,
} = restaurant;

// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);


// Optional chaining
// console.log(restaurant.openingHours.mon.open)   // Cannot read properties of undefined (reading 'open')
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open); // Multiple

// Example 
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of weekdays) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// * Calling methods ------------------------------------------

console.log(restaurant.order?.(0, 1) ?? 'Method does not exits');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exits');

// * Array ------------------------------------------
let users = [{
  name: 'Jonas',
  email: 'hello@jonas.io'
}];

users =[];
// Without optional chaining
if(users.length > 0) console.log(users[0].name);else console.log('User array empty');
// With optional chaining
console.log(users[0]?.name ??'User array empty');
*/

/**
 * ~ Looping Objects (Object Keys, Values and Entries) --------------------------------------------------------------
 **/

/*
const restaurant = {
  numGuests: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
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
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
  order: function (staterIndex, mainIndex) {
    return [this.starterMenu[staterIndex], this.mainMenu[mainIndex]];
  },
};

const {
  openingHours,
} = restaurant;

const properties = Object.keys(openingHours);
console.log(properties);

console.log(`We are open on ${properties.length} days`);

let openStr = `We are open on ${properties.length} days: `;


// * Object keys (Property Names) --------------------------------------

for (const day of Object.keys(openingHours)) {
  // console.log(day);
  openStr += `${day}, `;

}
console.log(openStr);

// * Object Values (Property Values) --------------------------------------

const values = Object.values(openingHours);
console.log(values);

// * Object Keys and Values (Entries) --------------------------------------
const entries = Object.entries(openingHours);
console.log(entries);

for (const x of entries) {
  console.log(x);
}

// [key, value]  for simple object with a simple value
for (const [key, {
    open,
    close
  }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Doetmund',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5
  }
};


// * Example 1 ------------------------
// console.log(Object.values(game.odds));

const odds = Object.values(game.odds);
let average = 0;

for (const odd of odds) average += odd;

console.log(average);

average /= odds.length;
console.log(average);

// * Example 2 ------------------------
for (const [team, odd] of Object.entries(game.odds)) {
  // console.log(team);
  // console.log(odd);
  const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`
  console.log(`Odd of ${teamStr} ${odd} `);
}

*/


/**
 * ~ Sets --------------------------------------------------------------
 **/

/*
const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(orderSet); // {'Pasta', 'Pizza', 'Risotto'}

console.log(new Set('Jonas')); // {'J', 'o', 'n', 'a', 's'}
console.log(new Set()); // {}

// * size (length) --------------------------------------
console.log(orderSet.size);

// * Has() -------------------------------------- // similar to the includes method in array
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));

// * Add():  Adding new element --------------------------------------
orderSet.add('Garlic bread');
orderSet.add('Garlic bread');
console.log(orderSet);


// * Delete(): delete a element --------------------------------------
orderSet.delete('Risotto');
console.log(orderSet);

// * clear(): delete all elements --------------------------------------
// orderSet.clear();
// console.log(orderSet);


// * Loop --------------------------------------
for (const order of orderSet) console.log(order);

// * Remove duplicate values from Array to set and later conversion that set to Array --------------------------------------
const staff = ['Waiter', 'Chef', 'Waiter', 'Manger', 'Chef', 'Waiter'];

// const staffUnique = new Set(staff);
// console.log(staffUnique);

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manger', 'Chef', 'Waiter']).size); // 3
console.log(new Set('jonassschmedtmann').size); // 11
*/

/**
 * ~ Maps --------------------------------------------------------------
 **/

/*
// console.log(new Map()); // Empty map: {}

// * Set(): dd a new element to the data structure (to fill of map) -------------------------------------------
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria',
    'Vegetarian', 'Organic'
  ])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

// * get(): in order to read data from the map we uses -------------------------------------------
console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// * has(): Check that if map contains a certain key -------------------------------------------
console.log(rest.has('categories'));

// * delete(): delete elements form the map -------------------------------------------
rest.delete(2);
console.log(rest);

// * size (length) --------------------------------------
console.log(rest.size);

// * clear(): delete all elements --------------------------------------
// rest.clear();
// console.log(rest);

// * Keys Array and object --------------------------------------

rest.set([1, 2], 'Test');
console.log(rest);

console.log(rest.get([1, 2])); // undefined because they are not actually the same object

const arr = [1, 2];
rest.set(arr, 'Test');

console.log(rest.get(arr)); // Test

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);


// * Populating a new map --------------------------------------
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

const {
  openingHours,
} = restaurant;

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'JAVA'],
  [3, 'JAVASCRIPT'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try Again']
]);

console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hours = new Map(Object.entries(openingHours));
console.log(hours);


// Quiz app 
console.log(question.get('question'));
// - Loops --------------------------------------------------------------------------
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`)
}

// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

const result = answer === question.get('correct') ? question.get(true) : question.get(false);
console.log(result);


// Convert map to array
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
*/

//////////////////////////////////
// ! Coding Challenge #3

/*
Let's continue with out football betting app! This 
time, we have a map with a log of the events that 
happened during the game. The values are the events 
themselves, and the keys are the minutes in which 
each event happened (a football game has 90 minutes 
plus some extra time).

1. Create an array 'events' of the different game 
events that happened (no duplicates)
2. After the game has finished, is was found that the 
yellow card from minute 64 was unfair. So remove this 
event from the game events log.
3. Print tha following string to the console: "An 
event happened, on average, every 9 minutes" (keep in 
mind that a game has 90 minutes)
4. Loop over the events and log them to the console, 
marking whether it's in the first half or second half 
(after 45 min) of the game, like this:
      [FIRST HALF] 17: GOAL

GOOD LUCK
*/

/*
const gameEvents = new Map([
  [17, "GOAL"],
  [36, 'Substitution'],
  [47, 'GOAL'],
  [61, 'Substitution'],
  [64, 'Yellow card'],
  [69, 'Red card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, 'GOAL'],
  [80, 'GOAL'],
  [92, 'Yellow card']
]);

// - Solution 1 --------------------------
// console.log(gameEvents.values());

// * Map to Set -----------------------------------
// const events = new Set(gameEvents.values());

// * Set to array -----------------------------------
const events = [...new Set(gameEvents.values())];
console.log(events);

// - Solution 2 ---------------------------
gameEvents.delete(64);

// - Solution 3 ---------------------------
const time = [...gameEvents.keys()].pop();
console.log(time);

console.log(`An event happened, on average, every ${time/gameEvents.size} minutes`);

// - Solution 4 ---------------------------

for (const [min, event] of gameEvents) {

  const half = min <= 45 ? "First" : "Second";
  console.log(`[${half} Half] ${min}: ${event}`);
}
*/


/**
 * ~ String --------------------------------------------------------------
 **/

// * Part 1 ----------------------------------------------------------------------------
/*
const airline = 'Tap Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);

console.log('B737' [0]); // B

console.log(airline.length);
console.log('B737'.length);

// * Methods ------------------------------
// indexOf(): select the first occurrence
console.log(airline.indexOf('r'));

// lastIndexOf(): select the last occurrence
console.log(airline.lastIndexOf('r'));

// indexOf: search for entire words (this one is case sensitive)
console.log(airline.indexOf('portugal')); // -1
console.log(airline.indexOf('Portugal'));

// Slice: sub-string
console.log(airline.slice(4)); // start
console.log(airline.slice(4, 7)); // start and end value (7-4)

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are the middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat');
  } else {
    console.log('You got Lucky');

  }

}
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Jonas'));
console.log(typeof new String('Jonas')); // Object
console.log(typeof new String('Jonas').slice(1));  // String
*/

// * Part 2------------------------------------------------------
/*
// * Changing the case of String ------------------------------
const airline = 'Tap Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// * Fix Capitalization of name ------------------------------
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing Emails (trim)
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail);

// Replacing: case sensitive
const prizeGB = '288,97£';
const priceUS = prizeGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passenger come to barding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate')); // only replacing first occurrence

console.log(announcement.replaceAll('door', 'gate'));

// Regular Expression
console.log(announcement.replace(/door/g, 'gate'));

// Booleans ------------------------------

// includes()
const plane = 'Air A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));

// startsWith()
console.log(plane.startsWith('Air'));
// endsWith()
console.log(plane.endsWith('neo'));


if (plane.startsWith('Air') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// Practice Example
const checkBaggage = function (items) {

  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard');
  }

}

checkBaggage('I have a laptop, som food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/

// * Part 3-----------------------------------------------------
/*
// split
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
console.log(firstName);
console.log(lastName);

// join
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); // Mr. Jonas SCHMEDTMANN

// Capitalization of name
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));

  }
  console.log(namesUpper.join(' '));
}

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

// Padding 
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));
console.log('Jonas'.padStart(25, '+'));

console.log(message.padEnd(25, '+'));
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

// Masking
const maskCreditCard = function (number) {
  // const str = String(number);
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');

}

console.log(maskCreditCard(43378463264647384));
console.log(maskCreditCard('334859493847755774747'));

// Repeat
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5));

const planesInline = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
}

planesInline(5);
planesInline(3);
planesInline(12);
*/

//////////////////////////////////
// ! Coding Challenge #4

/* 
Write a program that receives a list of variable 
names written in underscore_case and convert them to 
camelCase.

The input will come from a textarea inserted into the 
DOM (see code below), and conversion will happen when 
the button is pressed.

THIS TEST DATA (pasted ti textarea);
underscore_case
  first_name
Some_Variable
    calculate_AGE
  delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log
outputs)
underscoreCase
firstName
someVariable
calculateAge
delayedDeparture

HINT 1: Remember which character defines a new line
in the textarea

HINT 2: The solution only needs to work for a
variable made out of 2 words, like a_b

HINT 3: Start without worrying about the tick symbol.
Tackle that only after you have the variable name conversion
working

HINT 4: This challenge is difficult on purpose, so 
start watching the solution in case you're stuck.
Then pause and continue!

Afterward, test with your own test date!

GOOD LUCK
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));


document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;

  const rows = text.split('\n');
  // console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    // console.log(row, first, second);

    const output = `${first}${second.replace(second[0],second[0].toUpperCase())}`;

    // console.log(output.padEnd(20,' '));
    console.log(`${output.padEnd(20)} ${'*'.repeat(i+1)}`);

  }

});


// underscore_case
//   first_name
// Some_Variable
//     calculate_AGE
//   delayed_departure