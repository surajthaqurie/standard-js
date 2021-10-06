'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////


/**
 * ~ Simple Array Methods --------------------------------------------------------------
 **/
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// * Slice: we can extract part of any array without changing the original array. it does not mutates the original array
console.log(arr.slice(2));
console.log(arr.slice(2, 4));

console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
// Shallow Copy
console.log(arr.slice());
console.log([...arr]);


// * Splice: (delete) works in almost the same way as slice, But the fundamental difference is that it does actually change the original array. So it mutates the original array.
// console.log(arr.splice(2)); 
console.log(arr.splice(-1));
console.log(arr);
console.log(arr.splice(1, 2)); // (second) number of elements that we want to delete
console.log(arr);

// * Reserve: it mutates the original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// * Concat: concatenate two arrays. it does not mutates the original array
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// * Join:
console.log((letters.join(' - ')));
*/

/**
 * ~ Looping Arrays --------------------------------------------------------------
 **/

// * forEach() With array -----------------------------------------------------------
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for-of loop
// for (const movement of movements) {  // elements only
for (const [i, movement] of movements.entries()) { // index and element
  if (movement > 0) {
    console.log(`Movement ${i+1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i+1}: You withdrew ${Math.abs(movement)}`);

  }
}
console.log('------forEach-----');
movements.forEach(function (mov, i, arr) {
  // console.log(arr);
  if (mov > 0) {
    console.log(`Movement ${i+1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i+1}: You withdrew ${Math.abs(mov)}`);
  }
});
*/

// * forEach() With Map and Sets -----------------------------------------------------------
/*
// - Maps ------------------------------
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// - Sets ------------------------------
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);  // key = value, there is no keys or indexes in sets
});
*/


/**
 * ~ Data Transformations: Map, Filter, Reduce --------------------------------------------------------------
 **/

// * Map() -----------------------------------------------------------
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;

// for-of loop
const movementsUSDfor = []
for (const mov of movements) movementsUSDfor.push(mov * euroToUsd);
console.log(movementsUSDfor);

const movementsUSD = movements.map(function (mov) {
  return mov * euroToUsd;
});

console.log(movements);
console.log(movementsUSD);

// Arrow function
const movementUSDArr = movements.map(mov => mov * euroToUsd);
console.log(movementUSDArr);

// 3 parameters based example
const movementsDescriptions = movements.map((mov, i, arr) =>
  // if (mov > 0) {
  //   return (`Movement ${i+1}: You deposited ${mov}`);
  // } else {
  //   return (`Movement ${i+1}: You withdrew ${Math.abs(mov)}`);
  // }
  `Movement ${i+1}: You ${mov > 0 ? 'deposited': 'withdrew'} ${Math.abs(mov)}`

);
console.log(movementsDescriptions);
*/

// * Filter() -----------------------------------------------------------
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
// for-of loop
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
*/

// * Reduce() -----------------------------------------------------------
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// for-of loop
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Accumulator -> SNOWBALL
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration number ${i}: ${acc}`);

  return acc + cur;
}, 0); // initial value of the accumulator
console.log(balance);

// Accumulator -> SNOWBALL
const balanceArr = movements.reduce((acc, cur, i, arr) => acc + cur, 0);
console.log(balanceArr);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);

console.log(max);
*/

// * The Magic Of Chaining Methods -----------------------------------------------------------

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;
console.log(movements);

// Pipeline
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  // .map(mov => mov * euroToUsd) 
  .map((mov, i, arr) => {
    // console.log(arr);   // Easy to debug
    return mov * euroToUsd;
  })
  .reduce((acc, curr) => acc + curr, 0);

console.log(totalDepositsUSD);
*/


/**
 * ~ BANKIST APP --------------------------------------------------------------
 **/

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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


// * Display Movements ----------------------------------------
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  // .textContent = 0;

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {

    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
       <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <!-- <div class="movements__date">3 days ago</div> -->
          <div class="movements__value">${mov}€</div>
        </div>
  `;
    containerMovements.insertAdjacentHTML('afterbegin', html);

  });
}
// displayMovements(account1.movements);

// * Calculate and display the TOTAL Balance ----------------------------
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  // acc.balance = balance;
  labelBalance.textContent = `${acc.balance}€`;
}
// calcDisplayBalance(account1.movements);


// * Calculate and display the Summary ----------------------------
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
}
// calcDisplaySummary(account1.movements);

// * Computing username ----------------------------------------
const createUsernames = function (accs) {

  // const username = user
  //   .toLowerCase()
  //   .split(' ')
  //   .map(name => name[0])
  //   .join('');

  // return username;

  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
}
createUsernames(accounts); // stw
// console.log(accounts);


const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
}

// Event Handlers
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  // console.log(currentAccount);

  // if (currentAccount && currentAccount.pin === Number(inputLoginPin.value)) console.log('Login');
  if (currentAccount?.pin === Number(inputLoginPin.value)) { // Optional chaining
    // console.log('Login');

    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);

  } else {
    containerApp.style.opacity = 0;
    alert(`Wrong information!!`);

  }
});


btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  // console.log(amount, receiverAcc);

  inputTransferAmount.value = inputTransferTo.value = ''

  if (amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount
    && receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }

});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {

    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

// * findIndex() -----------------------------------------------------------
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {

    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    // console.log(index);
    // .indexOf(23)

    // Delete Account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;

  }
  // Clear input fields
  inputCloseUsername.value = inputClosePin.value = '';

});

// Sorting
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/**
 * ~ Some other IMP methods --------------------------------------------------------------
 **/

// * find() -----------------------------------------------------------

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

// for-of loop
for (const acc of accounts) {
  if (acc.owner === 'Jessica Davis') {
    console.log(acc);
  }
}
*/

// * includes() -----------------------------------------------------------
// Equality
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
console.log(movements.includes(-130));
*/

// * some() -----------------------------------------------------------
// Condition
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);
*/

// * every() -----------------------------------------------------------
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

console.log(movements.every(mov => mov > 0));

console.log(account4.movements);
console.log(account4.movements.every(mov => mov > 0));

// Separate callback
const deposit = mov => mov > 0;
console.log(account4.movements.some(deposit));
console.log(account4.movements.every(deposit));
console.log(account4.movements.filter(deposit));
*/

// * flat() -----------------------------------------------------------
/*
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// Chaining
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, cur) => acc + cur, 0);
console.log(overallBalance);
*/

// * flatMap() -----------------------------------------------------------
/*
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, cur) => acc + cur, 0);
console.log(overallBalance2);
*/

// * sort() -----------------------------------------------------------

/*
// String
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

// Numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// console.log(movements.sort());   // sorted as string

// return < 0 , A, B (Keep order)
// return < 0 , B, A (Switch order)

// Ascending
movements.sort((a, b) => {
  if (a > b)
    return 1;
  if (a < b)
    return -1;
});
console.log(movements);

movements.sort((a, b) => a - b);
console.log(movements);


// Descending
movements.sort((a, b) => {
  if (a > b)
    return -1;
  if (a < b)
    return 1;
});
console.log(movements);

movements.sort((a, b) => b - a);
console.log(movements);
*/


/**
 * ~ More ways of Creating and Filling Arrays --------------------------------------------------------------
 **/

// * Empty arrays + fill() -----------------------------------------------------------
/*
console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);

// console.log(x.map(() => 5));   // nothings happens
x.fill(1);
x.fill(1, 3, 5);
console.log(x);
*/

// * filling the array -----------------------------------------------------------
/*
const arr = [1, 2, 3, 4, 5, 6, 7];
arr.fill(23, 4, 6);  // value, start to fill and end parameterNot zero based)
console.log(arr);
*/

// * from() -----------------------------------------------------------
/*
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

// Changing (querySelectorAll) NodeList to array.
labelBalance.addEventListener('click', function () {
  const movementUI = Array.from(document.querySelectorAll('.movements__value'),
    el => el.textContent.replace('€', ''));
  console.log(movementUI);

  // method 2
  const movementUI2 = [...document.querySelectorAll('.movements__value')];  // then map separately
  console.log(movementUI2);
})
*/


///////////////////////////////////////////
// ~ Coding Challenge --------------------------------------------------
/*
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(dog => dog.recFood = Math.trunc(dog.weight ** 0.75 * 28));
console.log(dogs);

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(`Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recFood ? 'much!' : 'little!'}`);

// 3. part 1
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

// 3. part 2
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 4.
// "Matilda and Alice and Bob's dogs eat too much!"
// "Sarah and John and Michael's dogs eat too little!" 
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6.
const checkEatingOk = dog =>
  dog.curFood > dog.recFood * 0.9
  &&
  dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOk));

// 7.
console.log(dogs.filter(checkEatingOk));

// 8. numbers in objects
const dogSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogSorted);
*/
