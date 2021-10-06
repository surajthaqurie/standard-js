/**
 * ~ Value and Variables --------------------------------------------------
 */

/*

let js = "amazing";
if (js === "amazing") alert('JavaScript is Fun');

console.log(40 + 8 + 23 - 10);
console.log("jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// let 3year = 3;  //. Starts with number : Error
// let jonas&matilda = 'jam'; //. Symbols: Error
// let new = 27; //. Reserved keyword: Error
// let function = 25;  //. Reserved keyword: Errr

// - Only two symbol are allowed
let $ = 23;
let _ = 25;
console.log($, _);
*/


/**
 * ~ Data Types --------------------------------------------------------------
 */

/*
let javascriptIsfun = true;
console.log(javascriptIsfun);


console.log(typeof true);
console.log(typeof javascriptIsfun);
console.log(typeof 23);
console.log(typeof 'Jonas');


let year;
console.log(year);
console.log(typeof year);

console.log(typeof null) //~ object

javascriptIsfun = 'Yes!'
console.log(typeof javascriptIsfun);

year = 1991;
console.log(typeof year);
*/


/**
 * ~ Let, Const and Var --------------------------------------------------------------
 */

/*
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990 //. Error not changeable

// const job;  //. Error: Missing initializer in const declaration


var job = "programming";
var job = 'teacher';

lastName = 'Schmedthmann';
console.log(lastName);
*/


/**
 * ~ Basic Operators --------------------------------------------------------------
 */
/*
// - Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

// 2**3 means 2 to the power of 3 = 2 * 2 * 2
console.log(ageJonas * 3, ageJonas / 2, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Schmedtmann';

console.log(firstName + ' ' + lastName);

//- Assignment operators
let x = 10 + 5; //~ 15
x += 10; //~ x = x + 10 = 25
x *= 4; //~ x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// - Comparison operators: to produce Boolean value
console.log(ageJonas > ageSarah); //. >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

let y, z;
y = z = 25 - 10 - 5; //. y = z = 10, y = 10
console.log(y, z);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/


/**
 * ~ String and Template Literals --------------------------------------------------------------
 */

/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

let jonas = "i'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);
jonas = `i'm ${firstName}, a ${year-birthYear} year old ${job}!!`;
console.log(jonas);

/ - Multiline String
console.log('String with \n\ multiple \n\ line\'(s)');
console.log(`String with
multiple
lines`);
*/


/**
 * ~ if/else --------------------------------------------------------------
 */

/*
const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);

}

const birthYear = 1998;
let century;

if (birthYear <= 200) {
    century = 20;
} else {
    century = 21;
}
console.log(century);  // 21

*/

/**
 * ~ Type Conversion and Coercion --------------------------------------------------------------
 */

/*
//  Type Conversion: Number
const inputYear = ' 1991';
console.log(Number(inputYear), inputYear);

console.log(Number(inputYear) + 18);

console.log(Number('Jonas')); // NaN: Not a Number
console.log(typeof NaN); // number

// Type Conversion: String
console.log(String(23));


// Type Coercion : String
console.log('I am ' + 23 + ' year old');

// Type Coercion : Number
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' / '2');

console.log('23' > '18');

let n = '1' + 1; // '11'
n -= 1;
console.log(n); // 10

console.log(2 + '3' + 5); // 2 + '35' = '235'
console.log('10' - '4' - '3' - 2 + '5'); // '15'

*/

/**
 * ~ Truthy and Falsy values --------------------------------------------------------------
 */

/**
 * ! 5 Falsy values
 * ~ 0
 * - ''
 * * undefine
 * ! null
 * - NaN
 */

/*
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

console.log(Boolean('Jonas'));
console.log(Boolean({})); // true

const money = 100;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}

let height;
if (height) {
    console.log('YaY! Height is defined')
} else {
    console.log('Height is UNDEFINED')
}
*/

/**
 * ~ Interaction --------------------------------------------------------------
 */

/*
const favorite = prompt("What's your favorite number");
console.log(favorite);
console.log(typeof (favorite)); // string


alert('Hello man What\'s up');

const con = confirm('Are your sure ??');
console.log(con); // Yes = true and No = false
console.log(typeof (con)); // boolean

*/

/**
 * ~ Equality Operators (== / ===) --------------------------------------------------------------
 */

/*
const age = 18;

// loose equality operator
console.log(age == '18'); // true

// strict equality operator
console.log(age === '18'); // false
console.log(age === 18); // true

if (age === 18) console.log('You just became an adult');

const favorite = Number(prompt("What's your favorite number"));
console.log(favorite);
console.log(typeof (favorite)); // string

if (favorite === 23) {
    console.log('Cool! 23 is an amazing number!');

} else if (favorite === 7) {
    console.log('7 is also a cool number');
} else if (favorite === 9) {
    console.log('9 is also a cool number');
} else {
    console.log('Number is not 23 or 7 or 9');
}
*/

/**
 * ~ different Operators (!= / !==) --------------------------------------------------------------
 */
/*
let test = '23;'
console.log(test != 23); // false
console.log(test != 23); // true
*/

/**
 * ~ Boolean Logic &&, || and !) --------------------------------------------------------------
 */
/*
let age = 16;
console.log(!age); // false

const hasDriversLicense = true; // A
const hasGoodVision = false; // B

console.log(hasDriversLicense && hasGoodVision); // false
console.log(hasDriversLicense || hasGoodVision); // true
console.log(!hasDriversLicense); // false

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...')
}

const isTired = true; // c
console.log(hasDriversLicense || hasGoodVision || isTired); // true
console.log(hasDriversLicense && hasGoodVision && isTired); // false

if (hasDriversLicense && hasGoodVision && !isTired) { //true&&true&&false - false
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...')
}
*/

/**
 * ~ Switch Statement --------------------------------------------------------------
 */

/*
const day = 'wednesday';
switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');

} else if (day === 'tuesday') {
    console.log('Prepare theory videos');

} else if (day === 'wednesday' || day == 'thursday') {
    console.log('Write code examples');

} else if (day === 'friday') {
    console.log('Record videos');

} else if (day === 'saturday' || day == 'sunday') {
    console.log('Enjoy the weekend :D');

} else {
    console.log('Not a valid day!');

}
*/

/**
 * ~ Statements and Expressions --------------------------------------------------------------
 */

/*
// Expressions
3 + 4;
1991;
true && false && !false;

// Statements
if (23 > 10) {
    const str = '23 is bigger';
}
const me = 'Jonas';
console.log(`I'm ${2037-1191} years old ${me}`);
*/

/**
 * ~ The Conditional (Ternary) Operator --------------------------------------------------------------
 */

/*
const age = 18;
age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

const drink = age >= 18 ? 'beer' : 'water';

console.log(`'I like to drink ${drink}`);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(`I like to drink ${drink2}`);

// *Multi Ternary---------------
const drink3 = age >= 18 ? 'I like wine' : // 1st-if(age >= 18) | (if(age >= 18))
    age <= 10 ? 'i like milk' : //  1st-else and 2nd-if(age <= 10)| (else if(age <= 10))
    'I like water'; // 2nd if-else | (else)

console.log(drink3);

console.log(`I like to drink ${age >= 18 ? 'beer' : 'water'} `);

*/