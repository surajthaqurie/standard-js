// Remember, we're gonna use strict mode in all scripts now!
'use strict';


/*
const x = '23';

const calcAge = birthYear => 2037 - birthYear;

console.log(calcAge(1991));
*/

/**
 * ~ Problem Solving --------------------------------------------------------------------
 */
// PROBLEM 1:
/* We work for a company building a smart home
thermometer. Our most recent task is this: "Given an
array of temperatures of one day, calculate the 
temperature amplitude. Keep in mind that sometimes 
there might be a sensor error."
*/
/*

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 8, 5];


// 1) Understanding the problem

// - What is temp amplitude? Answer: difference between highest and lowest temp

// - How to compute max and min temperatures?

// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems

// - How to ignore error?

// - Find max value in temp array

// - Find min value in temp array

// - Subtract min form max (amplitude) and return it


const calcTempAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];
    
    // Googling
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];

        if (typeof curTemp !== 'number') continue;
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;

};

calcTempAmplitude([3, 7, 4]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 array of temps

// 1) Understanding the problem
// - With 2 array, should we implement functionality twice? No! just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 array?



const calcTempAmplitudeNew = function (t1, t2) {

    // Googling
    const temps = t1.concat(t2);
    console.log(temps);

    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];

        if (typeof curTemp !== 'number') continue;
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;

};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/

/**
 * ~ Debugging With Console and Breakpoints --------------------------------------------------------------------
 */

/*
// Debugging With Console ------------
const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        // C) FIX
        value: Number(prompt('Degrees celsius:'))
    }

    // B) FIND
    // console.log(measurement);
    console.table(measurement);

    console.log(measurement.value);

    // console.warn(measurement.value);
    // console.error(measurement.value);

    // debugger;  // JavaScript has the debugger statement, and then when the browser sees this debugger it automatically open uo the debugger tool
    const kelvin = measurement.value + 273;
    return kelvin;
}

// A) IDENTIFY
console.log(measureKelvin());

*/

/**
 * ~ Coding Challenge --------------------------------------------------------------------
 */

/*
 Given an array of forecasted maximum temperatures,
 the thermometer displays a string with these 
 temperatures.

 Example: [17, 21, 23] will print "... 17°C in 1 days .
 .. 21°C in 2 days ... 23°C in 3 days ..."

 Create a function 'printForecast' which takes in an 
 array 'arr' and logs a string like the above to the 
 console.

 Use the problem-solving framework: Understand the 
 problem and break it it up into sub-problems!

 TEST DATA 1: [17, 21, 23]
 TEST DATA 2: [12, 5, -5, 0, 4]
*/


// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with °C
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`...${data1[0]}°C ...${data1[1]}°C ...${data1[2]}..`);

const printForecast = function (arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {

        str += `${arr[i]}°C in ${i + 1} days ... `;
    }
    console.log('... ' + str);
}

printForecast(data1);
printForecast(data2);