// console.log("Hello world from external Script");

/***************************************************************************************
 * Variables and data types
 */

/* 
var firstName = "John";
console.log(firstName); // John

var lastName = "Smith";
var age = 28;

var fullAge = true;
console.log(fullAge); // true

var job;
console.log(job); // undefined

job = "Teacher";
console.log(job); // Teacher

*/

/***************************************************************************************
 * Variable mutation and type coercion
 */

/*

var firstName = "John";
var age = 28;

// Type coercion ------------------------------------------------
console.log(firstName + " " + age);

var job, isMarried;
job = "teacher";
isMarried = false;

console.log(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried
);

// Variable Mutation ------------------------------------------------
age = "twenty eight";
job = "driver";

alert(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried
);

var lastname = prompt("what is his last Name?");
console.log(firstName + " " + lastname);

*/

/***************************************************************************************
 * Basic Operators
 */

/*
var year, yearJhon, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math Operators ------------------------------------------------ 
yearJhon = now - ageJohn;
yearMark = now - ageJohn;

console.log(yearJhon);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical Operators ------------------------------------------------
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator ------------------------------------------------
console.log(typeof johnOlder);
console.log(typeof ageMark);
console.log(typeof "Mark is older than John");

var x;
console.log(typeof x);

*/

/***************************************************************************************
 * Operator precedence
 */

/*
var now = 2018;
var yearJhon = 1989;
var fullAge = 18;

// Multiple operators ------------------------------------------------
var isFullAge = now - yearJhon >= fullAge; // true
console.log(isFullAge);

// Grouping ------------------------------------------------
var ageJohn = now - yearJhon;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments ------------------------------------------------
var x, y;

x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators
// x = x * 2;
x *= 2;
console.log(x);
x += 10;
console.log(x);

x = x + 1;
console.log(x);

x += 1;
console.log(x);

x++;
console.log(x);
x--;
console.log(x);
*/

/***************************************************************************************
 * CODING CHALLENGE 1
 */

/*
  Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
  BMI = mass / height^2 = mass / (height * height).
  (mass in kg and height in meter).

  1. Store Marks's  and John's mass and height in variables
  2. Calulate both their BMIs
  3. Create a bollean variable containing information about whether Mark has a higher BMI thn John.
  4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true")

  Good Luck :)
*/

/*
var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJonh = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJonh / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;

console.log("Is marks's BMI higher than John's? " + markHigherBMI);
*/

/***************************************************************************************
 * If / else statements
 */

/*
var firstName = "john";
var civilStatus = "single";

if (civilStatus === "married") {
  console.log(firstName + " is married!");
} else {
  console.log(firstName + " will hopefully marry soom :)");
}

var isMarried = true;
if (isMarried) {
  console.log(firstName + " is married!");
} else {
  console.log(firstName + " will hopefully marry soom");
}

var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJonh = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJonh / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
  console.log("Mark's BMI is higher than John's");
} else {
  console.log("John's BMI is higher than mark's");
}
*/

/***************************************************************************************
 * Boolean logic
 */

/*
var firstName = "John";
var age = 16;

if (age < 13) {
  console.log(firstName + "is a boy.");
} else if (age >= 13 && age < 20) {
  console.log(firstName + "is a teenagar.");
} else if (age >= 20 && age < 30) {
  console.log(firstName + "is a young man.");
} else {
  console.log(firstName + "is a man.");
}
*/

/***************************************************************************************
 * The Ternary Operator and Switch Statements
 */

// Ternary operator ------------------------------------------------
/*
var firstName = "John";
var age = 16;

age >= 18
  ? console.log(firstName + " drinks beer")
  : console.log(firstName + " drinks juice");

var drink = age >= 18 ? "beer" : "juice";
console.log(drink);
*/
/*
if (age >= 18) {
  var drink = "beer";
} else {
  var drink = "juice";
} 
*/

// Switch Statement ------------------------------------------------
/*
var job = "teacher";
switch (job) {
  case "teacher":
  case "instructor":
    console.log(firstName + " teaches kids how to code.");
    break;

  case "driver":
    console.log(firstName + " drives an uber in Lisbon.");
    break;

  case "designer":
    console.log(firstName + " designs beautiful websites.");
    break;

  default:
    console.log(firstName + " does something else.");
}

var firstName = "John";
var age = 16;
*/

/*
if (age < 13) {
  console.log(firstName + "is a boy.");
} else if (age >= 13 && age < 20) {
  console.log(firstName + "is a teenagar.");
} else if (age >= 20 && age < 30) {
  console.log(firstName + "is a young man.");
} else {
  console.log(firstName + "is a man.");
}
*/

/*
switch (true) {
  case age < 13:
    console.log(firstName + " is a boy.");
    break;
  case age >= 13 && age < 20:
    console.log(firstName + "is a teenagar.");
    break;
  case age >= 20 && age < 30:
    console.log(firstName + "is a young man.");
    break;
  default:
    console.log(firstName + "is a man.");
}

*/

/***************************************************************************************
 * Truthy and Falsy values and equality operators
 */

// Falsy values: undefined, null ,0, '', NaN, {}
// Truthy values: NOT falsy values

/*
var height;
if (height || height === 0) {
  console.log("Variable is defined");
} else {
  console.log("Variable has NOT been defined");
}

// equality operators ------------------------------------------------
height = 23;
if (height === "23") {
  console.log("The == operator does type coercion!");
}

*/

/***************************************************************************************
 * CODING CHALLENGE 2
 */

/*
John and Mike both play basketball in different teams. In the lastest 3 games, John's team scored 89,
120 and 103 points, while Mike's team scored 166, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console.
Also include tha average score in the output.
3. Then change the scores to show different winners.
Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team 
scored 97, 134 and 105 points. Like before, log the 
average winner to the console. HINT: you will  need 
the && operator to take the decision. If you can't 
solve this one, just watch the solution, it's no problems ;)
5. Like before, chnage the scores to generate different winners, keeping in mind there might be
draws.

GOOG LUCK :)
*/

/*
var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);
*/
/*
if (scoreJohn > scoreMike) {
  console.log("John's team wins with " + scoreJohn + " points");
} else if (scoreMike > scoreJohn) {
  console.log("Mike's team wins with " + scoreMike + " points");
} else {
  console.log("There is a draw");
}
*/
/*
if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
  console.log("John's team wins with " + scoreJohn + " points");
}
else if(scoreMike> scoreJohn&&scoreMike>scoreMary){
  console.log("Mike's team wins with " + scoreMike + " points");

}else if(scoreMary> scoreJohn && scoreMary>scoreMike){
  console.log("Mary's team wins with " + scoreMary + " points");

}else {
  console.log("There is a draw");
}
*/

/***************************************************************************************
 * Functions
 */

/*
function calculateAge(birthYear) {
  return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  if (retirement > 0) {
    console.log(firstName + " retires in " + retirement + " years.");
  } else {
    console.log(firstName + " is already retired.");
  }
}

yearsUntilRetirement(1990, "John");
yearsUntilRetirement(1948, "Mike");
yearsUntilRetirement(1969, "Jane");

*/

/***************************************************************************************
 * Function Statements and Exprssions
 */

// Function declatation ------------------------------------------------
// function whatDoYouDo(job,firstName){}

// Function Expression ------------------------------------------------
/*
var whatDoYouDo = function (job, firstName) {
  switch (job) {
    case "teacher":
      return firstName + " teaches kids how to code";
    case "driver":
      return firstName + " drives a cab in Lisbon";

    case "designer":
      return firstName + " designs beautiful websites";

    default:
      return firstName + " does something else";
  }
};

console.log(whatDoYouDo("teacher", "John"));
console.log(whatDoYouDo("designer", "Jane"));
console.log(whatDoYouDo("retired", "Mark"));
*/

/***************************************************************************************
 * Arrays
 */

/*
// Initialize new Array ------------------------------------------------
var names = ["Jonh", "Mark", "Jane"];
var year = new Array(1990, 1969, 1948);

console.log(names);
console.log(names[2]);
console.log(names.length);

// Mutate Array data ------------------------------------------------
names[1] = "Ben";
names[names.length] = "Jonny";
names[6] = "Mary";

console.log(names);

// Different data types ------------------------------------------------
var john = ["John", "Smith", 1990, "teacher", false];

john.push("blue");
john.unshift('Mr.')
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));
console.log(john.indexOf(23)); // -1

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John is designer'
console.log(isDesigner);
*/

/***************************************************************************************
 * CODING CHALLENGE 3
 */

/*
John and his family went on a holiday and went to 3 
different restaurants. The bills were $124, $48 and $268

To top the waiter a fair amount, John created a
simple tip calculator (as a function). He likes to 
tip 20% of the bill whn th bill is less than $50,
15% when the bill is between $50 and $200, and 10%
if the bill is more than $200.

In the end, John would like to have 2 arrsys:
1) Containing all three tips (ne for each bill)
2) Containg a;; three final paid amounts (bill + tip)

(NOTE: To calculate 20% of a value, simply multiply
  if with 20/100 = 0.2)

  GOOD LUCK :D

*/
/*
function tipCalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = .2;
  } else if (bill >= 50 && bill < 200) {
    percentage = .15;
  } else {
    percentage = .1;
  }


  return percentage * bill;
}
// console.log(tipCalculator(100));

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2])
]
var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(tips, finalValues);

*/

/***************************************************************************************
 * Object and properties
 */

/* 
// Object literal ------------------------------------------------
var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false
};

console.log(john);
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);


john.job = 'designer'
john['isMarried'] = true;
console.log(john);

// new Object Syntax ------------------------------------------------
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/***************************************************************************************
 * Object and Methods
 */
/*
var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1990,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false,
  calcAge: function () {
    this.age = 2018 - this.birthYear;
  },
};

// console.log(john.calcAge());
// john.age = john.calcAge();

john.calcAge();
console.log(john)
*/

/***************************************************************************************
 * CODING CHALLENGE 4
 */

/*
 Let's remember the first codin challenge where Mark 
 and John compared their BMIs. Let's now implement
 the sme functionality with objects and methods.

 1. For each of them, create an object with 
 properties for their full name, mass, and height

 2. Then, add a method to each object to calculate
 the BMI. Save the BMI to the object and also return 
 it form the method

 3. In the end, log the console who has the 
 highest BMI, together with the full name and the 
 respective BMI. Don't forget they might have the 
 same BMI

 Remember: BMI = mass / height^2 = mass / (height * 
  height). (mass in kg and height in meter).

  GOOD LUCK :)
 */


/*
var john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  }
}

var mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  }
}

john.calcBMI();
mark.calcBMI();
// console.log(john, mark);

if (john.bmi > mark.bmi) {
  console.log(john.fullName + ' has a higher BMI of ' + john.bmi)
} else
if (mark.calcBMI() > john.calcBMI()) {
  console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi)
} else {
  console.log('They have the same BMI');
}
*/


/***************************************************************************************
Loops and iteration 
*/

var john = ["John", "Smith", 1990, "teacher", false, 'blue'];

// FOR LOOP ------------------------------------------------
/*
for (var i = 1; i <= 10; i += 2) {
  console.log(i);
}

for (var i = 0; i < john.length; i++) {
  console.log(john[i])
}
*/

// WHILE LOOP ------------------------------------------------
/*
var i = 0;
while (i < john.length) {
  console.log(john[i]);
  i++;
}
*/

// DO WHILE LOOP ------------------------------------------------
/*
let i = 0;
do {
  console.log(i);
  i++;
}
while (i <= 10);
*/

// Continue and break statements ------------------------------------------------
/*
var john = ["John", "Smith", 1990, "teacher", false];
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') continue;
  console.log(john[i])
}

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') break;
  console.log(john[i]);
}
*/

// Looping Backward ------------------------------------------------
/*
for (var i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
} 
*/


/***************************************************************************************
 * CODING CHALLENGE 5
 */


/*
Remember the tip calculator challenge? let's create
a more advance version using everything we learned!

This time, John and his family went to 5 different 
restaurants. The bills were $124, $48, $268, $180
and $42.

John likes to tip 20% of the bill when the bill is 
less than $50, 15% when tha bill is between $50and 
$200, and 10% if the bill is more than $200. 

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill
values

2. Add a method to calculate the tip

3. This method should include a loop to iterate over
all the paid bills and do th tip clculations

4. As an output, create 1) a new array containing 
all tips, and 2) an array containing final paid 
amounts (bill + tip). HINT: Start with two empty
arrays [] as properties and then fill them up in the
loop.

EXTRA AFTER FINISHING: Mark's family also went to a
holiday, going to 4 different restaurants. The bills
were $77, $375, $110 and $45.

Mark likes to tip 20% of the bill when the bill is
less than $100, 10% when tha bill is between $100
and $300, and 25% if the bill is more than $300
(diffrenet than John).

5. Implement the same functionality as before, this
time using Mark's tipping rules

6. Create a function (not a method) to calculate the
average of a given array of tips. HINT: Loop over
the array, and in each iteration store tha current
sum in a variable (starting form 0). After you have
the sum of the array, divide it by number 
of elements in it (that's how you calculate the 
average)

7. Calculate the average tip for each family

8. Log to the console which family paid the highest
tips on avarage

GOOD LUCK :D
*/

/*
var john = {
  fullName: 'John Smith',
  bills: [128, 48, 268, 180, 42],
  calcTips: function () {
    this.tips = [];
    this.finalValues = [];


    for (var i = 0; i < this.bills.length; i++) {
      // Determine percentage based on tipping rules
      var percentage;
      var bill = this.bills[i];

      if (bill < 50) {
        percentage = .2;
      } else if (bill >= 50 && bill < 200) {
        percentage = .15;
      } else {
        percentage = .1
      }

      // Add result to the corresponding array
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;

    }
  }

}

var mark = {
  fullName: 'Mark Miller',
  bills: [77, 475, 110, 45],
  calcTips: function () {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {
      // Determine percentage based on tipping rules
      var percentage;
      var bill = this.bills[i];

      if (bill < 100) {
        percentage = .2;
      } else if (bill >= 100 && bill < 300) {
        percentage = .1;
      } else {
        percentage = .25;
      }

      // Add result to the corresponding array
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;

    }
  }

}

function calcAverage(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}

// DO the calculation
john.calcTips();
mark.calcTips();
console.log(john, mark);

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
  console.log(john.fullName + "'s family pays higher tips, with an average of $" + john.average)
} else {
  console.log(mark.fullName + "'s family pays higher tips, with an average of $" + mark.average)

}
*/