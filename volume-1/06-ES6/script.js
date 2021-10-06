/***************************************************************************************
 * Let And Const
 */

// ES5----------------------------------
/*
var name5 = 'Jane Smith';
var age5 = 23;

name5 = 'Jane Miller';
console.log(name5);

// ES6-------------------------------------
const name6 = 'Jane Smith';
let age6 = 23;

name6 = 'Jane Miller';   // ERROR: Assignment to constant variable.
console.log(name6);

*/
// ES5--------------------------------------
/*
function driversLicence5(passedTest) {

    if (passedTest) {
        // console.log(firstname);  // undefined
        var firstname = 'John';
        var yearOfBirth = 1990

        // console.log(firstname + 'born in ' + yearOfBirth + ' is now officially allowed to drive a car');
    }
    console.log(firstname + ' born in ' + yearOfBirth + ' is now officially allowed to drive a car');

}

driversLicence5(true);
*/
// ES6 --------------------------------------
/*
function driversLicence6(passedTest) {

    if (passedTest) {
        let firstname = 'John';
        const yearOfBirth = 1990

        // console.log(firstname + ' born in ' + yearOfBirth + ' is now officially allowed to drive a car');
    }
    console.log(firstname + ' born in ' + yearOfBirth + ' is now officially allowed to drive a car');
}
*/
// ES6 --------------------------------------
/*
function driversLicence6(passedTest) {
    // console.log(firstname);  // Cannot access 'firstname' before initialization

    let firstname;
    // const yearOfBirth; // Error: Missing initializer in const declaration
    const yearOfBirth = 1990;

    if (passedTest) {
        firstname = 'John';
        // yearOfBirth = 1990; // Error: Missing initializer in const declaration

    }
    console.log(firstname + ' born in ' + yearOfBirth + ' is now officially allowed to drive a car');
}

driversLicence6(true);
*/
/*
var i = 23;
for (var i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4 
}

console.log(i); // 5
*/

/*
let i = 23;
for (let i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4 
}

console.log(i); // 23
*/


/***************************************************************************************
 * Blocks and IIFEs
 */

// ES5 ----------------------------------------------
/*
(function () {
    var c = 3;
})();

console.log(c); //: c is not defined

// ES6 ----------------------------------------------
{
    // These value are not accessiable form outside of the block
    const a = 1;
    let b = 2;
    var c = 3;
}

// console.log(a + b); //: a is not defined
console.log(c); // 3

*/


/***************************************************************************************
 * Strings
 */

/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2016 - year;
}

// Template Literals------------------------------------------
// ES5-----------------------------------------
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');
// ES6-----------------------------------------
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${ calcAge(yearOfBirth)} years old.`);


const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('th'));
console.log(n.includes(' '));
console.log(`${firstName} `.repeat(5));
*/

/***************************************************************************************
 * Arrow Function
 */

/*
const years = [1990, 1965, 1982, 1937];
// ES5-----------------------------------------

var ages5 = years.map(function (el) {
    return 2016 - el;
});
console.log(ages5);

// ES6-----------------------------------------
let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index+1}: ${2016-el}`);

console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;

    return `Age element ${index+1}: ${2016-el}`;

});

console.log(ages6);
*/


/***************************************************************************************
 * Arrow Function and 'this' keyword
 */

// ES5------------------------------------
/*
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        var $this = this;
        document.querySelector('.green').addEventListener('click', function () {
            // var str = 'This is box number ' + this.position + ' and it is ' + this.color; // undefined
            var str = 'This is box number ' + $this.position + ' and it is ' + $this.color;
            alert(str);
        });
    }
}

// box5.clickMe();

// ES6------------------------------------
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        document.querySelector('.green').addEventListener('click', () => {
            // var str = 'This is box number ' + $this.position + ' and it is ' + $this.color; // undefined
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}

// box6.clickMe();

// ES6------------------------------------
const box66 = {
    color: 'green',
    position: 1,
    // Error-- undefined
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color; // undefined

            alert(str);
        });
    }
}

// box66.clickMe();
*/
/*
function Person(name) {
    this.name = name;
}

// ES5--------------------------------------------
Person.prototype.myFriends5 = function (friends) {

    var arr = friends.map(function (el) {
        return this.name + ' is friends with ' + el;
    }.bind(this));

    console.log(arr);

}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

// ES6--------------------------------------------

Person.prototype.myFriends6 = function (friends) {

    var arr = friends.map(el => `${this.name} is friend with ${el}`)
    console.log(arr);

}

new Person('Mike').myFriends6(friends);

*/

/***************************************************************************************
 * Destructuring
 */


// ES5 ---------------------------------------------------------
/*
var john = ['John', 26];
var name = john[0];
var age = john[1];


// ES6 ---------------------------------------------------------
const [name, age] = ['john', 26];

console.log(name);
console.log(age);


const obj = {
    firstName: 'John',
    lastName: 'Smith'
}

const {
    firstName,
    lastName
} = obj;
console.log(firstName);
console.log(lastName);

const {
    firstName: a,
    lastName: b
} = obj;

console.log(a);
console.log(b);


// ES5 ---------------------------------------------------------
function calcAgeRetirement(year) {
    const age = new Date().getFullYear()  - year;
    return [age, 65 - age];

}

const [age2, retirement] = calcAgeRetirement(1990);

console.log(age2);
console.log(retirement);

*/


/***************************************************************************************
 * Arrays
 */

/*
const boxes = document.querySelectorAll('.box');

// ES5 ----------------------------------------------------------------

var boxesArray5 = Array.prototype.slice.call(boxes);
boxesArray5.forEach(function (cur) {
    cur.style.background = 'dodgerblue';
});

// ES6 ----------------------------------------------------------------
const boxesArray6 = Array.from(boxes);
// Array.from(boxes).forEach(cur =>
Array.from(boxes).forEach(cur =>

    cur.style.background = 'dodgerblue'
);
*/

// ES5 ----------------------------------------------------------------
/*
for (var i = 0; i < boxesArray5.length; i++) {
    if (boxesArray5[i].className === 'box blue') {
        continue;
        // break;
    }
    boxesArray5[i].textContent = 'I change to blue!';
}

// ES5 ----------------------------------------------------------------
for (const cur of boxesArray6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I change to blue!';

}

// ES5 -------------------------------------------------------------------------
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function (current) {
    return current >= 18;
});

console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6 -------------------------------------------------------------------------
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));

*/

/***************************************************************************************
 * Spread operator
 */

/*
// NORMAL -------------------------------------------------------------------------
function addFourAges(a, b, c, d) {
    return a + b + c + d;
}
var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5 -------------------------------------------------------------------------
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);


// ES5 (Function Structure)-------------------------------------------------------------------------
const sum3 = addFourAges(...ages);
console.log(sum3);

// Array Structures -----------------------------------
const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familyMiller, 'Lily', ...familySmith];
console.log(bigFamily);

// Node List Structures -----------------------------------
const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');

const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');

*/

/***************************************************************************************
 * Rest Parameters
 */

// ES5 ----------------------------------------------------------------
/*
function isFullAge5() {

    // In ES5, if we want to receive an undefined arguments number of arguments, 
    // then we simply don't define any parameters for our function,
    // then just use the arguments keyword.
    // And remember the arguments keyword, or variable is very similar to the this variable
    // and it's a variable that each exectution context get access too.
    // This is special variable that we have access to in all function

    // console.log(arguments);

    var argsArr = Array.prototype.slice.call(arguments);
    // console.log(argsArr);

    argsArr.forEach(function (cur) {
        console.log((2016 - cur) >= 18)
    });
}

isFullAge5(1990, 1999, 1965);
isFullAge5(1990, 1999, 1965, 2016, 1987);

// ES6 ----------------------------------------------------------------

function isFullAge6(...years) {
    years.forEach(cur => console.log((2016 - cur) >= 18));
}

isFullAge6(1990, 1999, 1965, 2016, 1987);

*/

// ES5 -------------------ADDING ARGUMENT---------------------------------------------
/*
function isFullAge5(limit) {

    // In ES5, if we want to receive an undefined arguments number of arguments, 
    // then we simply don't define any parameters for our function,
    // then just use the arguments keyword.
    // And remember the arguments keyword, or variable is very similar to the this variable
    // and it's a variable that each exectution context get access too.
    // This is special variable that we have access to in all function

    // console.log(arguments);

    var argsArr = Array.prototype.slice.call(arguments, 1);   //**
    // console.log(argsArr);

    argsArr.forEach(function (cur) {
        console.log((2016 - cur) >= limit)
    });
}

isFullAge5(16, 1990, 1999, 1965);
isFullAge5(1990, 1999, 1965, 2016, 1987);

// ES5 --------------------ADDING ARGUMENT--------------------------------------------

function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log((2016 - cur) >= limit));
}

isFullAge6(16, 1990, 1999, 1965, 2016, 1987);

*/

/***************************************************************************************
 * Default Parameters
 */


// ES5 ----------------------------------------------------------------
/*
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

    lastName === undefined ? lastName = 'Smith' : lastName;
    nationality === undefined ? nationality = 'American' : nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983,'Diaz','Spanish');
*/

// ES6 ----------------------------------------------------------------
/*
function SmithPerson({
    firstName,
    yearOfBirth,
    lastName = 'Smith',
    nationality = 'American'
}) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
// var emily = new SmithPerson('Emily', 1983,'Diaz','Spanish');

let emilyData = {
    firstName: 'Emily',
    yearOfBirth: 1938,
    nationality: 'Spanish',
    lastName: 'Diaz',
}
var emily = new SmithPerson(emilyData);

*/


/***************************************************************************************
 * Maps
 */

/*
const question = new Map();

// set(): adding some data 
question.set('question', 'What is the official name of the lastest major JavaScript version?');

question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');

question.set('correct', 3);

question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, please try again!!');


// console.log(question.entries());
console.log(question.get('question'));

// console.log(question.size);

// question.delete(4);

if (question.has(4)) {
    // question.delete(4);
    // console.log('Answer 4 is here');
}

// question.clear();


// question.forEach((value, key) => {
//     console.log(`This is ${key}, and it's set to ${value}`);
// });

for (let [key, value] of question.entries()) {
    if (typeof (key) === 'number') {
        console.log(`Answer ${key}: ${value}`)
    }
}
const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));

*/



/***************************************************************************************
 * Classes
 */

// ES5 ----------------------------------------------------------------
/*
var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job

}

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');

// ES6 ----------------------------------------------------------------
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        const age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    static greeting() {
        console.log('Hey there!');
    }
}

const john6 = new Person6('John', 1990, 'techer');

Person6.greeting();
*/


/***************************************************************************************
 * Classes and Subclasses
 */

// ES5 ----------------------------------------------------------------
/*
var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job

}

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function (name, yearOfBirth, job, olympicGames, medals) {

    // call the super class 
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

// Here we want the prototype of the athlete to be the prototype of the person, so that they become connected
Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function () {
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);
johnAthlete5.calculateAge();
johnAthlete5.wonMedal();

// ES6 ----------------------------------------------------------------
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        const age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    wonMedal() {
        this.medals++
        console.log(this.medals);
    }
}

var johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);
johnAthlete6.wonMedal();
johnAthlete6.calculateAge();

*/


/***************************************************************************************
 * CODING CHALLENGE
 */

/*
Suppose that your're working in a small town
adminidtration, and you're in charge of two 
town elements:
1. Parks
2. Streets

It's a very small town, so right now there 
are only 3 parks and 4 streets. All parks 
and streets have a name and a build year.

At an end-of-year meeting, your boss wants a 
final report with the following:
1. Tree density of each park in the town 
(formulaL number of trees/park area)
2. Average age of each town's park (formula: 
    sum of all ages/ number of parks)
3. The name of the park that has more than 
1000 trees
4. Total and average length of the town's 
streets
5. Size classification of all streets:
tiny/small/noraml/big/huge. If the size is 
unknown, the default is noraml


All the report data should be printed to the 
console.

HINT: USE some of hte ES6 features: classes, 
subclasses, template strings, default parameters, maps, arrow functions,
destructuring, etc

*/

class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}


class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area; // km2
        this.numTrees = numTrees;
    }

    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
}


class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');

        console.log(`${this.name}, build ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}

const allParks = [
    new Park('Green Park', 1987, 0.2, 215),
    new Park('National Park', 1894, 2.9, 3541),
    new Park('Oak Park', 1953, 0.4, 949)
];

const allStreets = [
    new Street('Ocean Avenue', 1999, 1.1, 4),
    new Street('Evergreem', 2008, 2.7, 2),
    new Street('4th Street', 2015, 0.8),
    new Street('Sunset Boulevard', 1982, 2.5, 5)
];


function calc(arr) {
    // here 0 is initial value for previous value
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

    // [3, 5, 6]  // 0 + 3; = 3 + 5; = 8 + 6; = 14

    return [sum, sum / arr.length];

}


function reportParks(p) {
    console.log('------PARKS REPORTS-----------');

    // Denstity 
    p.forEach(el => el.treeDensity())

    // Average Age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);

    console.log(`Our ${p.length} parks have an average of ${avgAge}`);

    // Which park has more than 1000 trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);

    console.log(`${p[i].name} has more than 1000 trees`);


}

function reportStreets(s) {

    console.log('------STREETS REPORTS-----------');

    // Total and average length of the town's streets

    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);

    // Classify sizes
    s.forEach(el => el.classifyStreet());


}

reportParks(allParks);
reportStreets(allStreets);
