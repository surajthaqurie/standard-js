/**
 * ~ Strict mode --------------------------------------------------------------
 */

'use strict';
/*
let hasDriversLicense = false;
const passTest = true; // by default we should always const to avoid accidental errors

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

//-Uncaught SyntaxError: Unexpected strict mode reserved word
// const interface = 'Audio';
// const private = 534;
*/

/**
 * ~ Functions --------------------------------------------------------------
 */

/*
// defining / declaring function
function logger() {
    console.log('My name is Jonas');

    // local variable arguments
    console.log(arguments[0]); // 10

}

// calling / running / invoking function
logger(10); // local variable arguments captures that parameters/arguments

logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges); // 5 , 0
    var apples = 6;
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;

    if (apples) {
        let apples = 0;
        oranges++
        console.log(apples, oranges); // 0 1
    }
    return juice; // 6 0

}

const applesJuice = fruitProcessor(5, 0);
console.log(applesJuice);
console.log(fruitProcessor(5, 0));

// Inbuilt function:  console.log()
const num = Number('23');
console.log(num);
*/

/**
 * ~ Function Declarations vs Expression --------------------------------------------------------------
 */
/*
// - Function Declarations ---------------
const age1 = calcAge1(1991); // Runs before defined

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

console.log(age1);

// - Function Expression ---------------

// const age2 = calcAge2(1991); // * ERROR: Cannot access 'calcAge2' before initialization

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991); // only runs after defined
console.log(age2);
*/

/**
 * ~ Arrow Function --------------------------------------------------------------
 */

/*
const calcAge3 = birthYear => 2037 - birthYear;

const ag3 = calcAge3(1991);
console.log(ag3);

const yearsUntilRetirement = (birthYear, firstName) => {

    const age = 2037 - birthYear;
    const retirement = 65 - age;

    // return retirement;

    return `${firstName} retires in ${retirement}`
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'bob'));

*/

/**
 * ~ Function Calling Other Function --------------------------------------------------------------
 */

/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges`;
    return juice;
}
console.log(fruitProcessor(2, 3));

*/


/**
 * ~ Reviewing Function --------------------------------------------------------------
 */

/*
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {

    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement}`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`)
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

/**
 * ~ ARRAY --------------------------------------------------------------
 */

/*
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years1 = new Array(1991, 1984, 2008, 2020);
console.log(years1);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'jay';
console.log(friends);

// friends = []; // * Assignment to constant variable.

const firstName = 'jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);


// - Exercise ---------------------------
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = new Array(1991, 1984, 2008, 2020);

// console.log(calcAge(years)); // NaN

const ag1 = calcAge(years[0]);
const ag2 = calcAge(years[1]);
const ag3 = calcAge(years[years.length - 1]);
console.log(ag1, ag2, ag3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

/**
 * ~ Basic Array Operations (Methods) --------------------------------------------------------------
 */

/*
// - push() ------------------
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');

console.log(friends);
console.log(newLength); // 4

// - unshift()------------------
friends.unshift('Deepak');
console.log(friends);

// - pop() ------------------
friends.pop();
const popped = friends.pop();
console.log(friends);
console.log(popped); // peter

// - shift() ------------------
friends.shift();
console.log(friends);

// - indexOf() ------------------
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob')); // -1
console.log(friends.indexOf('steven')); // -1


// - includes() ------------------
friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23')); // false
console.log(friends.includes(23)); // true


if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}
*/

/**
 * ~ Object --------------------------------------------------------------
 */

/*
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: {
        firstJob: 'teacher',
        secondJob: 'designer'
    },
    friends: ['Michael', 'Peter', 'Steven']
}
console.log(jonas);

// - Dot Vs Bracket Notation -------------------------------------------------------------- 

// * Getting property----------------------------
// Dot Notation 
console.log(jonas.lastName);

// Bracket Notation
console.log(jonas['lastName']);


const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// Nested Object with Bracket Notation
console.log(jonas['job']['firstJob']);
console.log(jonas['job']['secondJob']);
console.log(jonas['friends'][0]);


const interestedIn = prompt('What do you want about Jonas? Choose between firstName, lastName, age, job and friends');

// console.log(jonas.interestedIn); // undefined

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong Request!  Choose between firstName, lastName, age, job and friends');
}


// * Adding new property------------------------------
// Dot Notation 
jonas.location = 'Portugal';
// Bracket Notation
jonas['twitter'] = '@jonasschmedtman';

console.log(jonas);


// Challenge
// "Jonas has 3 friends, and his best friend is called Michel"

console.log(`${jonas.firstName} has ${jonas.friends.length}, and best friend is ${jonas.friends[0]} `);
console.log(`${jonas['firstName']} has ${jonas['friends'].length}, and best friend is ${jonas['friends'][0]} `);
*/

// - Object Methods -------------------------------------------------------------- 
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // clacAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // clacAge: function () {
    //     // * method calling object is jonas so "this" = jonas object......
    //     // console.log(this);
    //     // return 2037 - jonas.birthYear;  // not dynamic 
    //     return 2037 - this.birthYear; // dynamic
    // }

    clacAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.clacAge(1991)}-year old ${this.job}, and he has ${this.hasDriversLicense?'a':'no'} driver's license`
    }
}

// * method "calling object" is jonas......
// console.log(jonas.clacAge(1991));
// console.log(jonas['clacAge'](1991));

// calculate age multiple time (loading function) : heavier computation (not good)

console.log(jonas.clacAge());

console.log(jonas.clacAge());
console.log(jonas.clacAge());
console.log(jonas.clacAge());

// calculate age once and retrieve the property: efficient solution
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);


// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"

console.log(jonas.getSummary());

*/


/**
 * ~ Iteration(Loop) --------------------------------------------------------------
 */

// - For loop -------------------------------------------------------------- 
/*
// With Iteration(Loop)
// console.log('Lifting weights repetitions 1');
// console.log('Lifting weights repetitions 2');
// console.log('Lifting weights repetitions 3');
// console.log('Lifting weights repetitions 4');
// console.log('Lifting weights repetitions 5');
// console.log('Lifting weights repetitions 6');
// console.log('Lifting weights repetitions 7');
// console.log('Lifting weights repetitions 8');
// console.log('Lifting weights repetitions 9');
// console.log('Lifting weights repetitions 10');


// For loop keeps running while condition is TRUE (i<=10);
for (let i = 1; i <= 10; i++) {
    console.log('Lifting weights repetitions', i);
}
*/

// - For loop ARRAY -------------------------------------------------------------- 
/*
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

// Read value from array
for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i], typeof (jonasArray[i]));

    // Create create a new array
    // types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i]);

}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// * Continue and Break
console.log('---------- continue -----------')
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof (jonasArray[i]) !== 'string') continue;

    console.log(jonasArray[i], typeof (jonasArray[i]));
}

console.log('---------- break -----------')
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof (jonasArray[i]) === 'number') break;

    console.log(jonasArray[i], typeof (jonasArray[i]));
}
*/

// - Looping Backward and Loops in Loops -------------------------------------------------------------- 
/*
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

// Looping Backward
for (let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(i, jonasArray[i], typeof (jonasArray[i]));
}

// Loops in Loops

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}
*/
// - While loop -------------------------------------------------------------- 

/*
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weight repetition ${rep}`);
}

let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lifting weight repetition ${rep}`);

    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;

    if (dice == 6) console.log('Loop  is about to end...');

}

*/

// - DO-While loop -------------------------------------------------------------- 
/*
let rep = 1;
do {
    console.log(`Do-While: Lifting weight repetition ${rep}`);
    rep++;
} while (rep <= 10);
*/