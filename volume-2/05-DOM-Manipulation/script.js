'use strict';

/**
 * ~ Selecting and Manipulating Elements --------------------------------------------------------------
 */

/*

// Get textContent of the element
console.log(document.querySelector('.message').textContent);

// Set textContent of the element
document.querySelector('.message').textContent = 'Correct Number';


document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

// Set value of the Input element
document.querySelector('.guess').value = 23;
// get value of the Input element
console.log(document.querySelector('.guess').value);
*/

/**
 * ~ Handling Click Events --------------------------------------------------------------
 */

/*
document.querySelector('.check').addEventListener('click', function () {
    const guess = document.querySelector('.guess').value;
    console.log(typeof guess); // string

    console.log(Number(guess)); // number

    if (!guess) {
        document.querySelector('.message').textContent = 'No Number!';
    } else {
        document.querySelector('.message').textContent = Number(guess);

    }
});
*/

/**
 * ~ Keyboard Events --------------------------------------------------------------
 */

// keydown
// keyup
// keypress

document.addEventListener('keydown', function (event) {
    // console.log('a key was pressed');
    console.log(event.key);
    if (event.key === 'Escape') {
        console.log('Escape is pressed');
    }
});
/**
 * ~ Manipulating CSS --------------------------------------------------------------
 */

/*
document.querySelector('body').style.backgroundColor = 'red';

document.querySelector('body').style.cssText = `
background-color : red;
color: 'green';
`;
*/

/**
 * ~ Implementing Game Logic --------------------------------------------------------------
 */

/*
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = '?';
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;

}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // There is no Input
    if (!guess) {
        // document.querySelector('.message').textContent = 'No Number!';
        displayMessage('No Number');

        // When Player Wins
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = 'Correct Number!';
        displayMessage('Correct Number');


        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';


        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }


        // When guess is wrong
    } else if (guess !== secretNumber) {

        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? 'Too high!' : 'Too low!';
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');

            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = 'You lost the game!';
            displayMessage('You lost the game!');

        }


        // When guess is too high
        // } else if (guess > secretNumber) {

        //     if (score > 1) {
        //         document.querySelector('.message').textContent = 'Too high!';
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     } else {
        //         document.querySelector('.message').textContent = 'You lost the game!';
        //     }


        //     // When guess is too low
        // } else if (guess < secretNumber) {
        //     if (score > 1) {
        //         document.querySelector('.message').textContent = 'Too low!';
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     } else {
        //         document.querySelector('.message').textContent = 'You lost the game!';

        //     }
    }
});
*/

/**
 * ~ Coding Challenge 1 --------------------------------------------------------------
 */

/*
Implement a game rest functionality, so that the 
player can make a guess! Here is how:

1. Select the element with the 'again' class and 
attach a click event handler
2. In the handler function, restore initial values of 
the score and number variables
3. Restore the initial conditions of the message, 
number, score and guess input field
4. Also restore the original background color (#222)
and number with (15rem)

GOOD LUCK :)
*/

/*
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Star guessing';

    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

});

*/