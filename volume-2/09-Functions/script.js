'use strict';
/**
 * ~ Default parameter --------------------------------------------------------------
 **/

/*
const bookings = [];

const createBooking = function (flightNum, numPassenger = 1, price = 199 * numPassenger) {

    // ES6
    // numPassenger = numPassenger || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassenger,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

// Skip the parameter
createBooking('LH123', undefined, 1000);
*/

/**
 * ~ Passing Arguments(value and reference) --------------------------------------------------------------
 **/

/*
const flight = 'LH234';
const jonas = {
    name: 'Jonas Schedtmann',
    passport: 24739479284
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;
    if (passenger.passport === 24739479284) {
        // alert('Checked In');
        console.log('Checked In');

    } else {
        // alert('Wrong passport');
        console.log('Wrong passport');

    }

}
checkIn(flight, jonas); // flightNum = flight

console.log(flight);
console.log(jonas);

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 10000000000);
}

newPassport(jonas);
checkIn(flight, jonas);
*/


/**
 * ~ First-Class and Higher-Order Functions --------------------------------------------------------------
 **/

// * Functions accepting callback functions -----------------------------------
/*
const onWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// Higher-order function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`)
}


// Passing function value not calling
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', onWord);


// Js uses callbacks all the time
const high5 = function () {
    console.log('👋');
}

document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);
*/

// * Functions returning functions -----------------------------------
/*
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

// challenge
const greetArrow = (greeting) => {
    return (name) => {
        console.log(`${greeting} ${name}`);

    }
}
greetArrow('Hi')('Jonas');


const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Namaste')('Jonas');
*/

/**
 * ~ Call(), Apply() and Bind() --------------------------------------------------------------
 **/

/*
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    booking: [],
    // book: function(){}
    book(flightNum, name) {
        console.log((`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`));

        this.booking.push({
            flight: `${this.iataCode}${flightNum}`,
            name
        });
    }
};


lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa.booking)


const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    booking: [],
};

// Borrowing method 
eurowings.book = lufthansa.book;
eurowings.book(23, 'New Schmedtmann');
console.log(eurowings.booking);

// * Call() method -----------------------------------
const book = lufthansa.book;
// book(23, 'Sara Williams');   // regular function call; this keyword is undefined

book.call(eurowings, 23, 'Sara Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    booking: []
}

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// * Apply() method -----------------------------------
const flightData = [583, 'George Cooper'];

book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData); // similar as apply method with call method and spread operator

// * Bind() method -----------------------------------

// const book = lufthansa.book;
// - book.call(eurowings, 23, 'Sara Williams');
const bookEW = book.bind(eurowings); // return new function
const bookLH = book.bind(lufthansa);
const bookX = book.bind(swiss);

bookEW(23, 'Steven Williams');
console.log(eurowings);

// - per-setting one parameter 
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// - per-setting more parameter 
// book.call(eurowings, 23, 'Sara Williams');
const bookEWPre = book.bind(eurowings, 23, 'Sara Williams');
bookEWPre();


// - With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);

    this.planes++;
    console.log(this.planes);
}

// lufthansa.buyPlane(); 
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


// - Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); // bind but if there is no use of this keyword then simply use 'null'
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

// Practices
const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    }
}

const addVat2 = addTaxRate(0.23);
console.log(addVat2(100));
console.log(addVat2(23));
*/


/////////////////////////////////////////////////////
// Coding Challenge #1

/*
Let's build a simple poll app!

A poll has question, an array of options from which 
people can choose, and an array with the number of 
replies for each option. This data is stored in the 
starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 
'poll' object. The method does 2 things:
    1.1 Display a prompt window for the user to input 
    the number of the selected option. The prompt 
    should look like this:
        What is your favorite programming language?
        0: JavaScript
        1: Python
        2: Rust    
        3: C++
         (Write option number)

    1.2. Based on the input number, update the answers 
    array. For example, if the option is 3, increase 
    the value AT POSITION 3 of the array by 1. Make 
    sure to check if the input is a number and if the
    number makes sense (e.g answer 52 wouldn't make 
    sense, right?)

2. Call this method whenever the user clicks the 
"Answer pool" button.

3. Create a method 'displayResults' which displays
the poll results. The methods takes a string as an 
input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the 
results array as it is, using console.log(). This
should be the default option. If type is 'string',
display a string like "Poll results are 13, 2, 4, 1".

4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this 
and the last section ;)

BONUS: Use the 'displayResults' method to display the 
2 array in the test data. Use both the 'array' and
the 'string' option. Do NOT put the arrays in the
poll object! So what should the this keyword look like 
in this situation?


BONUS TEST DATA 1: [5, 2, 3];
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1];

GOOD LUCK :)
*/

/*
const poll = {
    question: 'What is your favorite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],

    // This generates [0, 0, 0, 0]. More in the next section
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        // Gets the answer
        const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));
        // console.log(answer);

        // Register answer
        typeof answer === 'number' && answer < this.options.length && this.answers[answer]++;
        // console.log(this.answers);

        this.displayResults();
        this.displayResults('string');
    },
    displayResults(type = 'array') {
        if (type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            // Poll results are 13, 2, 4, 1
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    }

}

// poll.registerNewAnswer();

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));


poll.displayResults.call({
    answers: [5, 2, 3] // new "this" keyword
}, 'string'); // Arguments

poll.displayResults.call({
    answers: [1, 5, 3, 9, 6, 1] // new "this" keyword
});

poll.displayResults.call({
    answers: [1, 5, 3, 9, 6, 1] // new "this" keyword
}, 'string');  // Arguments

// [5, 2, 3];
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1];
*/

/**
 * ~ IIFE --------------------------------------------------------------
 **/

/*
const runOnce = function () {
    console.log('This will run again')
}
runOnce();


// IIFE
(function () {
    console.log('This will never run again');
    const isPrivate = 23;

    return {
        data: isPrivate
    }

})();

// console.log(isPrivate);

(() => console.log('This will ALSO never run again'))();


// Block-Scoped IIFE
{
    const isPrivate = 23;
    var notPrivate = 46
}
// console.log(isPrivate);
console.log(notPrivate);
*/


/**
 * ~ Closures --------------------------------------------------------------
 **/

/*

// closure with returning function
const secureBooking = function () {
    let passengerCount = 0;
    let pass = 1;

    return function () {
        passengerCount++;
        console.log(passengerCount + ' passengers with key ' + pass);
        pass++;
    };
};

const booker = secureBooking();
booker();
booker();

console.dir(booker);

// closure Without returning function
// Example 1 -----------------------
let f;
const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2);
    };
};

// g();
// f(); // 46

// re-boring closure 
const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2);
    };
};

g();
f(); // 46
console.dir(f);
// Re-assigning f function
h();
f(); // 1554
console.dir(f);

// Example 2 -----------------------
const boardPassengers = function (n, wait) {
    const perGroup = n / 3;

    setTimeout(function () {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} second`);
}

const perGroup = 1000;
boardPassengers(180, 3);
*/

/////////////////////////////////////////////////////
// Coding Challenge #2
/*
This is more of a thinking challenge than a coding 
challenge :D

Take the IIFE below and at the end of the function,
attach an event listener that changes the color of 
the selected h1 element (header) to blue, each time the 
BODY element is clicked. Do NOT select the h1
element again!

And now explain to YOURSELF (or someone around you)
Why this worked! Take all the time you need. Think 
about WHEN exactly the callback function is executed.
and what that means for the variables involved in this
example.

GOOD LUCK :)
*/


(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function () {
        header.style.color = 'blue';
    });
})();