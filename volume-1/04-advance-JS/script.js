/***************************************************************************************
 * Function constructor
 */

/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
}

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    // this.calculateAge = function () {
    //     console.log(2016 - this.yearOfBirth)
    // }
}

Person.prototype.calculateAge = function () {
    console.log(2016 - this.yearOfBirth)
}
Person.prototype.lastName = 'Smith'

// Instantiation
var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'reatired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

/***************************************************************************************
 * Primitives vs Objects
 */

/*
// Primitives
var a = 23;
var b = a;

a = 46;
console.log(a); // 46
console.log(b); // 23

// Objects
var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;
obj1.age = 30;

console.log(obj1.age); // 30
console.log(obj2.age); // 30

// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lison'
}

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

// Passes Reference of object not actual object
change(age, obj);

console.log(age); // 27
console.log(obj.city); // San Francisco

*/



/***************************************************************************************
 * Passing Functions as arguments
 */

/*
var years = [1990, 1965, 1937, 2005, 1998];

// GENERIC FUNCTION
function arrayCalc(arr, fn) {
    var arrRes = [];

    for (var i = 0; i < arr.length; i++) {

        arrRes.push(fn(arr[i]));
    }

    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {

        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

// Not going the call the function right here "calculateAge()" we want it to be called later by the arrayCalc function.
// So we juct pass the referance value here
// That's why it's called a callback function. because it called later
// We simply pass this variable which is this function right into this other function
var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);
*/


/***************************************************************************************
 * Function Returing Function
 */

/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function (name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

// Here interviewQuestion return the function here designerQuestion is returned  funtion; So we can call this function here
teacherQuestion('John');
designerQuestion('John');
designerQuestion('Mike');

interviewQuestion('teacher')('Mark');
*/

/***************************************************************************************
 * IIFE(Immediately Invoked Function Expressions)
 */

/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function (goodluck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodluck);
})(5);
*/

/***************************************************************************************
 * Closures
 */

// Inner function able to use the retirement variable and a variable of this function here is already gone ( it has already returned)
// But somehow tha variable are still there and this is the closure.
/*
function retirement(retirementAge) {
    var a = ' years left until retirement.';

    return function (yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

// Here retirement return the function here retirementUS is  returned funtion; So we can call this function here
retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);

// retirement(66)(1990);

function interviewQuestion(job) {
    return function (name) {
        if (job == 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');

        }
    }
}

interviewQuestion('teacher')('John');
*/

/***************************************************************************************
 * Bind, Call and Apply
 */

/*
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style == 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

john.presentation('formal', 'morning');

// CALL---------------------
// Method borrowing because we actually borrowed the method from John to use it here on the Emily object
john.presentation.call(emily, 'friendly', 'afternoon');

// APPLY-----------------------
// john.presentation.apply(emily, ['friendly', 'afternoon']);

// BIND----------------------
// Carrying: just technique in which we create a function based on another function but with some preset parameters
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

*/

/*
var years = [1990, 1965, 1937, 2005, 1998];

// GENERIC FUNCTION
function arrayCalc(arr, fn) {
    var arrRes = [];

    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }

    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);
*/


/***************************************************************************************
 * CODING CHALLENGE
 */

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself 
b) The answers from which the player can choose the correct one (choose an adequate data structure here, 
array, objects, etc.)
c) Correct answer (I would ust a number for this)

2. Create a couple of question using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each 
question should have a number) (HINT: write a method for the Question object for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number 
of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct to nor (Hint: 
write another method for this).

7. Suppose this code would be a plugin for the programmers to use in thier code. So make sure that all 
your code is private and doesn't interfere with the other programmers code (Hint: we learned a special
technique to do exactly that).

// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------
(function () {

    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function (ans) {
        if (ans === this.correct) {
            console.log('Correct answer!');
        } else {
            console.log('Wrong answer');
        }
    }

    var q1 = new Question('Is JavaScript the coolest programming language in the world?',
        ['Yes', 'No'], 0);
    var q2 = new Question('What is the name of this course\'s teacher', ['John', 'Micheal', 'Jonas'], 2);
    var q3 = new Question('What does best describe coding', ['Boring', 'Hard', 'Fun', 'Tediuos'], 2);


    var questions = [q1, q2, q3];
    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer = parseInt(prompt('Please select the correct answer,'));
    questions[n].checkAnswer(answer);

})();

*/


/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: 
write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the 
user writes 'exit' instead of the answer. In this case, DON'T call the function form task 8.

10. Track the user's score to make tha game more fun! So each time an answer is correct, and 1 point to 
the score (Hint: I'm going to use tha power of closures for this, but you don't have to, just do this 
with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.

// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------
(function () {

    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function (ans, callback) {
        var sc;
        if (ans === this.correct) {
            console.log('Correct answer!');

            sc = callback(true);
        } else {
            console.log('Wrong answer. Try again :)');
            sc = callback(false);

        }
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function (score) {
        console.log('Your current score is: ' + score);
        console.log('-----------------------------------------');
    }

    var q1 = new Question('Is JavaScript the coolest programming language in the world?',
        ['Yes', 'No'], 0);
    var q2 = new Question('What is the name of this course\'s teacher', ['John', 'Micheal', 'Jonas'], 2);
    var q3 = new Question('What does best describe coding', ['Boring', 'Hard', 'Fun', 'Tediuos'], 2);

    function score() {
        var sc = 0;
        return function (correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();


    function nextQuestion() {
        var questions = [q1, q2, q3];  

        var n = Math.floor(Math.random() * questions.length);

        questions[n].displayQuestion();
        var answer = prompt('Please select the correct answer,');

        if (answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);

            nextQuestion();
        }
    }

    nextQuestion();

})();

*/