'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-12-23T07:42:02.383Z',
    '2021-09-17T14:49:29.992Z',
    '2021-09-18T14:49:29.992Z',
    '2021-09-21T14:49:29.992Z',
    '2021-09-21T14:49:29.992Z',
    '2021-09-23T14:49:29.992Z',
    '2021-09-24T14:49:29.992Z',
    '2021-09-25T14:49:29.992Z'
  ],
  currency: 'USD',
  locale: 'en-US'  // 'ne-NP'
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-12-23T07:42:02.383Z',
    '2021-09-17T14:49:29.992Z',
    '2021-09-18T14:49:29.992Z',
    '2021-09-21T14:49:29.992Z',
    '2021-09-21T14:49:29.992Z',
    '2021-09-23T14:49:29.992Z',
    '2021-09-24T14:49:29.992Z',
    '2021-09-25T14:49:29.992Z'
  ],
  currency: 'EUR',
  locale: 'pt-PT',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {

  const calcdaysPassed = (date1, date2) => Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcdaysPassed(new Date(), date);
  // console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);;
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;

  return new Intl.DateTimeFormat(locale).format(date);
}

// Formatting Numbers
const formatCur = function (value, locale, currency) {

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: `${currency}`
  }).format(value);
}

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    // Formatting Numbers
    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1
      } ${type}</div>
      <div class="movements__date">${displayDate}</div>
      <!--  <div class="movements__value">${mov.toFixed(2)}€</div> -->
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  // labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);;

};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  // labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  // Formatting Numbers
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  // labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  // Formatting Numbers
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  // labelSumInterest.textContent = `${interest.toFixed(2)}€`;

  // Formatting Numbers
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};


// LogOut
const startLogOutTimer = function () {

  const tick = function () {
    const min = `${Math.trunc(time / 60)}`.padStart(2, 0);
    const sec = `${time % 60}`.padStart(2, 0);

    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      // Display UI and message
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }
    // Decrease 1s
    time--;
  };

  // Set time to 5 minutes
  let time = 120;

  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
}

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// // Fake Always Logged In
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;


btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === +(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]
      }`;
    containerApp.style.opacity = 100;

    // Create current date and time 
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long',  // long, numeric, 2-digit, short, narrow
      year: 'numeric',  // numeric, 2-digit, short, narrow
      weekday: 'long'  //  short, narrow
    }

    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now);  // US

    // const year = now.getFullYear();
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;
    // Day/Month/Year

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Timer 
    if (timer) clearInterval(timer)
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add Transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset the timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  // Rounding
  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // SetTimeout
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // Add Loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      // Reset the timer
      clearInterval(timer);
      timer = startLogOutTimer();

    }, 2500)
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


/**
 * ~ Converting and Checking Numbers --------------------------------------------------------------
 **/

/*
console.log(23 === 23.0);  // true

// Decimal base 10 - 0 to 9  (1/10 = 0.1, 3/10 = 3.333333333)
// Binary base 2 - 0 to 1

console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

// * Conversion -----------------------------------------------------------
console.log(Number('23'));
console.log(+'23');   // 23  it automatically converts all the operands to numbers

// * Parsing -----------------------------------------------------------
// parseInt()
console.log(Number.parseInt('30px'));  // 30
console.log(Number.parseInt('   30px  '));  // 30
console.log(Number.parseInt('e23')); // Nan
console.log(Number.parseInt('30px', 10));  // base - 10

// parseFloat
console.log(Number.parseInt('2.5rem'));  // 2
console.log(Number.parseFloat('2.5rem'));  // 2.5
console.log(Number.parseFloat('  2.5rem  '));  // 2.5

// so-called global
console.log(parseFloat('  2.5rem  '));  // 2.5

// isNan(): is not a number
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20x')); // true
console.log(Number.isNaN(23 / 0)); // it gives infinity value: false

// isFinite():
console.log(Number.isFinite(20));  // true
console.log(Number.isFinite('20'));  // false
console.log(Number.isFinite(+'20x')); // false
console.log(Number.isFinite(23 / 0)); // false

// isInteger():
console.log(Number.isInteger(20));  // true
console.log(Number.isInteger('20'));  // false
console.log(Number.isInteger(+'20x')); // false
console.log(Number.isInteger(23 / 0)); // false
*/

/**
 * ~ Math and Rounding --------------------------------------------------------------
 **/
/*
// Math.sqrt()
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

// Math.max()
console.log(Math.max(5, 8, 23, 11, 2)); // 23
console.log(Math.max(5, 8, '23', 11, 2)); // 23
console.log(Math.max(5, 8, '23px', 11, 2)); // NaN

// Math.max()
console.log(Math.min(5, 8, 23, 11, 2)); // 2

// Math.PI()
console.log(Math.PI * Number.parseFloat('10px') ** 2);

// Math.random()
console.log(Math.random()); // number between zero to one
console.log(Math.random() * 6); // number between zero to six
console.log(Math.trunc(Math.random() * 6)); // remove decimal parts
console.log(Math.trunc(Math.random() * 6) + 1);  // number from one upto six

// - Random number generator -----------------------------
// const randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + 1) + min;
const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;

// 0...1 -> 0...(max - min) -> min...max
console.log(randomInt(10, 20));

// * Rounding integers -----------------------------------------------------------
// Math.trunc(): remove the any decimal part
console.log(Math.trunc(23.3));  // 23

// Math.round(): round to the nearest integer
console.log(Math.round(23.3)); // 23
console.log(Math.round(23.5)); // 24
console.log(Math.round(23.9)); // 24

// Math.ceil(): round up
console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24

// Math.floor(): round down
console.log(Math.floor(23.3)); // 23
console.log(Math.floor(23.9)); // 23

// All of these method they also to type coercion.
console.log(Math.floor('23.9')); // 23

// - Negative Number ---------------------------
console.log(Math.trunc(-23.3));  // -23
console.log(Math.floor(-23.3));  // -24
console.log(Math.ceil(-23.3)); // -23


// * Rounding decimals -----------------------------------------------------------
console.log((2.7).toFixed(0)); // 3
console.log((2.7).toFixed(3)); // 2.700
console.log((2.345).toFixed(2)); // 2.35
console.log((2.345).toFixed(5)); // 2.34500

// type coercion
console.log(+(2.345).toFixed(2)); // 2.35
 */

/**
 * ~ The Remainder Operator --------------------------------------------------------------
 **/

/*
console.log(5 % 2); // 1
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3); // 2
console.log(8 / 3); // 8 = 2 * 3 + 2

console.log(6 % 2); // 0
console.log(6 / 2); // 6 = 2 * 3 + 0

console.log(7 % 2); // 1
console.log(7 / 2); // 7 = 2 * 3 + 1

// Odd - Even
const isEven = n => n % 2 === 0;
console.log(isEven(8)); // true
console.log(isEven(13)); // false
console.log(isEven(514));  // true


labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    // 0, 2, 4, 6
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    // 0, 3, 6, 9
    if (i % 3 === 0) row.style.backgroundColor = 'blue';

  });
});
*/

/**
 * ~ Working with bigInt --------------------------------------------------------------
 **/

/*
// This the number that JavaScript can safely represent.
console.log(2 ** 53 - 1);  // 9007199254740991 (2: base - 2; 53: 53 digits; 1: number starts from 0)
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// Unsafe numbers: we might lose precision(some numbers works some not)
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

// n: transfer a regular number into a bigint
console.log(121154898545222222221000000000005550000n);
// This constructor function should probably only be used with small small.
console.log(BigInt(121154898545222222221000000000005550000)); // not accurate
console.log(BigInt(1215451321543454)); // for small number: accurate

// * Operations --------------------------------------------------------
console.log(10000n + 10000n);
console.log(36286375637263756235946136541n * 56612549n);

const huge = 1235605486157489265121n;
const num = 23;
// console.log(huge * num);  // Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions

console.log(huge * BigInt(num));


console.log(typeof 20n); // bigint

// * Exceptions --------------------------------------------------------

// logical operator
console.log(20n > 15); // true
console.log(20n > 20);  // false

console.log(20n == 20); // true
console.log(20n === 20); // false

// String concatenations: huge also becomes string
console.log(huge + ' is REALLY Big!!!');

// Math operations: Uncaught TypeError: Cannot convert a BigInt value to a number at Math.sqrt
// console.log(Math.sqrt(16n));

// Division: cuts the decimals parts
console.log(12n / 3n); // 4n
console.log(12 / 3); // 4

console.log(10n / 3n); // 3n
console.log(10 / 3);  // 3.3333333333333335
*/


/**
 * ~ Date And Time --------------------------------------------------------------
 **/

/*
// * Creating date --------------------------------------------------------
const now = new Date();
console.log(now);

console.log(new Date('Sat Sep 25 2021 17:36:53'));
console.log(new Date('December 24,2015'));

console.log(new Date(account1.movementsDates[0]));

// month is JavaScript Zero Base
console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));

// Pass amount of milliseconds to the beginning of the UNIX time.
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// * Working with dates -----------------------------------------------------
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());

console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());

// date international standard string
console.log(future.toISOString());

// Get timestamp (milliseconds) since January 1, 1970
console.log(future.getTime());
console.log(new Date(2142236280000));

// current timestamp
console.log(Date.now());

future.setFullYear(2040);
console.log(future);

// * Operations date --------------------------------------------------------

const future = new Date(2037, 10, 19, 15, 23);
// console.log(Number(future));  // 2142236280000
console.log(+(future)); // 2142236280000

const calcdaysPassed = (date1, date2) => Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

const days1 = calcdaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14, 10, 8));
console.log(days1);  // millisecond
*/

/**
 * ~ International(INTL) APIs --------------------------------------------------------------
 **/

/*
// * Dates  --------------------------------------------------------
const now = new Date();
// console.log(now);

const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',  // numeric, 2-digit, short, narrow
  year: 'numeric',  // numeric, 2-digit, short, narrow
  weekday: 'long'  //  short, narrow
}

// getting locale from the browser
const locale = navigator.language;
console.log(locale); // en-US

labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);  // US

// labelDate.textContent = new Intl.DateTimeFormat('en-US', options).format(now);  // US
// labelDate.textContent = new Intl.DateTimeFormat('pt-PT', options).format(now);  // Portugal
// labelDate.textContent = new Intl.DateTimeFormat('en-GB').format(now);  // Uk
// labelDate.textContent = new Intl.DateTimeFormat('ar-Sy').format(now);  // Arabic

// * Numbers  --------------------------------------------------------
const num = 3884764.23;

const options = {
  style: "currency", // percentage, currency, unit
  unit: 'mile-per-hour', // celsius, mile-per-hour
  currency: 'EUR',
  // useGrouping: false   // separator(,)

}

console.log('US        ', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany   ', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Syria     ', new Intl.NumberFormat('ar-SY', options).format(num));
console.log('India     ', new Intl.NumberFormat('en-IN', options).format(num));

console.log(navigator.language + '     ', new Intl.NumberFormat(navigator.language).format(num));
*/


/**
 * ~ Timers --------------------------------------------------------------
 **/

/*
// * setTimeout() --------------------------------------------------
setTimeout(() => {
  console.log('Here is your pizza');
}, 2000);

console.log('Waiting.....');


setTimeout((ing1, ing2) => {
  console.log('Waiting.....');

  console.log(`Here is your pizza with ${ing1} and ${ing2}`);
}, 3000, 'olives', 'spinach');

const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout((ing1, ing2) => {
  console.log('Waiting.....');

  console.log(`Here is your pizza with ${ing1} and ${ing2}`);
}, 4000, ...ingredients);

// clearTimeout
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// * setInterval() --------------------------------------------------
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);


const newInterval = setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);

// clearInterval():
clearInterval(newInterval);
*/