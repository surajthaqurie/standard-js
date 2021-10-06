/***************************************************************************************
 *  Hoisting
 */

// Functions
/*
calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
}
// calculateAge(1965);


// retirement(1990); // Error

var retirement = function (year) {
    console.log(65 - (2016 - year));
}

retirement(1990);
*/

// Variable 
/*
console.log(age); // undefined
var age = 23;
// console.log(age);


function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);
*/

/***************************************************************************************
 *  Scope Chain (Scoping)
 */

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c)
    }
}
*/


// Example to show the difference between execution stack and scope chain
/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third();
    }
}

function third() {
    var d = 'John';
    // console.log(a + b + c + d);          // ERROR: b is not defined
    console.log(a + d);                     // Hello!John
}
*/


/***************************************************************************************
 *  The this keyword
 */
// When the object call the method. This keyword only became something as soon as the method gets called

// console.log(this);           // window object

/*
calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    // console.log(this);              // window object
}

var john = {
    name: 'John',
    yearofBirth: 1990,
    calculateAge: function () {
        console.log(this);
        console.log(2016 - this.yearofBirth);

        function innerFunction() {
            console.log(this); // window object
        }
        innerFunction();
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearofBirth: 1984
}

// borrowing funcion: here is no () because we arenot calling the function but we treats the function as varibale
mike.calculateAge = john.calculateAge;

mike.calculateAge();

*/