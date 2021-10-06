'use strict';

/**
 * ~ Scoping --------------------------------------------------------------
 */

/*
function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}`;

        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millennial = true;

            // Creating NEW variable with same name as outer scope's variable
            const firstName = 'Steven';

            // Reassigning outer scope's variables
            output = 'NEW OUTPUT!';

            const str = `Oh, and you're a millennial, ${firstName}`
            console.log(str);

            // function are also blocked scoped "but only in strict mode"
            function add(a, b) {
                return a + b;
            }

        }
        // console.log(str);  // Error undefined
        console.log(millennial);
        // console.log(add(2, 3)) // Error undefined "But only in strict mode"
        console.log(output);
    }
    printAge();

    return age;
}

const firstName = 'Jonas';
calcAge(1991);
*/

/**
 * ~ Variable Environment: Hoisting and the TDZ --------------------------------------------------------------
 */

/*
// Variables
// console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions 

console.log(addDecl(2, 3));
// console.log(addExpr(5, 2)); //  ReferenceError: Cannot access 'addExpr' before initialization (on TDZ stage)
console.log(addArrow); // undefined
// console.log(addArrow(2, 3)); // ReferenceError: Cannot access 'addArrow' before initialization(on TDZ stage)

function addDecl(a, b) {
    return a + b;
}


const addExpr = function (a, b) {
    return a + b;
}

var addArrow = (a, b) => a + b;

// Example1 ------------------

console.log(numProducts); // undefined
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!')
}

// Example2 -----------------------

var x = 1;
let y = 2;
const z = 3;

// - Window is the global object od javaScript and browser.
console.log(window);
console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false
*/
/**
 * ~ This keyword/variable --------------------------------------------------------------
 */

/*

console.log(this); // window object

// * Simple call the function ------------------
const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
    console.log(this); // undefined in strict mode and global window object is without strict mode

}
calcAge(1991);

// * Arrow function -------------------
const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this); // global window object (it is parent of calcAgeArrow function)
}
calcAgeArrow(1991); // simple call the function

// * Methods ----------------------------
const jonas = {
    year: 1991,
    calcAge: function () {
        console.log(this); // Jonas object 
        console.log(2037 - this.year);
    }
};
jonas.calcAge();

const matilda = {
    year: 2017
};

// method borrowing
matilda.calcAge = jonas.calcAge;
matilda.calcAge(); // point the object which calling the methods

const f = jonas.calcAge;
console.log(f);
// f(); //  regular function call Error: Cannot read properties of undefined 
*/

/**
 * ~ Regular function vs Arrow function --------------------------------------------------------------
 **/

/*
// var firstName = 'Matilda';
const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function () {
        console.log(this); // Jonas object 
        console.log(2037 - this.year);

        // - Solution 1
        // const self = this; // self or that
        // const isMillenial = function () {

        //     // console.log(this); // undefined
        //     // console.log(this.year >= 19 && this.year <= 1996);

        //     console.log(self);
        //     console.log(self.year >= 19 && self.year <= 1996);
        // }

        // - Solution 2
        const isMillenial = () => {

            console.log(this); // undefined
            console.log(this.year >= 19 && this.year <= 1996);
        }

        isMillenial(); // regular function calls 
    },
    greet: () => {
        console.log(this); // window object
        console.log(`Hey ${this.firstName}`); // undefined
    },
};

jonas.greet();
jonas.calcAge();

// * Arguments keyword ---------------------------------
const addExpression = function (a, b) {
    console.log(arguments);
    return a + b;
};
addExpression(2, 5);
addExpression(2, 5, 6, 8);

const addArrow = (a, b) => {
    console.log(arguments); // ReferenceError: arguments is not defined
    return a + b;
};

addArrow(2, 5);
*/

/**
 * ~ Primitives vs Objects --------------------------------------------------------------
 **/


// * Example 1 -----------------------------------
let age = 30;
let oldAge = age;
age = 31;


console.log(age);
console.log(oldAge);

const me = {
    name: 'Jonas',
    age: 30
}

const friend = me;
friend.age = 27;

console.log('friend', friend);
// {name: 'Jonas', age: 27}

console.log('Me', me);
// {name: 'Jonas', age: 27}

// * Example 2 --------------------------------------

// Primitive Types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

console.log(lastName, oldLastName);

// Reference types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before Marriage', jessica);
console.log('After marriage', marriedJessica);

// marriedJessica = {}; // TypeError: Assignment to constant variable.

// Copying objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Array', 'Bob']
};

// Essentially merge two objects and then return a new one. (shallow copy)
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

console.log('Before Marriage', jessica2);
console.log('After marriage', jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before Marriage', jessica2);
console.log('After marriage', jessicaCopy);

// deep copy : (lodash: library)