'use strict';


/*
  ~ Constructor Functions and The New Operator --------------------------------------------------------------
 */

/*
// * Function declaration ----------------------------
// function Person(firstName, birthYear) {
//     // console.log(this);  -> {}
//     // Instance properties
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// }

// * Function Expression ----------------------------
const Person = function (firstName, birthYear) {
    // console.log(this);  -> {}

    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // BAD PRACTICE: Never create a method inside the constructor function,
    // because if we have thousand object than we would essentially create a thousand copies
    // of this method
    this.calcAge = function () {
        console.log(2037 - this.birthYear);
    }
}

// instance
const jonas = new Person('Jonas', 1991);
console.log((jonas));

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

// instance
const matilda = new Person('Matilda', 2017);

// instance
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

const jay = 'jay';
console.log(jonas instanceof Person); // true
console.log(jay instanceof Person); // false
*/

/*
  ~ Prototypes --------------------------------------------------------------
*/

/*
const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
}

// instance
const jonas = new Person('Jonas', 1991);
console.log((jonas));

// instance
const matilda = new Person('Matilda', 2017);

// instance
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

const jay = 'jay';
console.log(jonas instanceof Person); // true
console.log(jay instanceof Person); // false

// * Prototypes ---------------------------------------
console.log(Person.prototype);

// - Methods(function) ---------------------------------
// now there is only one copy of this function
Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
}

jonas.calcAge();
matilda.calcAge();
jack.calcAge();

// checking prototype
console.log(jonas.__proto__);  // step 3

// its sets the __proto__ property to the prototype property of the constructor function.
console.log(jonas.__proto__ === Person.prototype);  // true
console.log(Person.prototype.isPrototypeOf(jonas));  // true
console.log(Person.prototype.isPrototypeOf(matilda));  // true

console.log(Person.prototype.isPrototypeOf(Person));  // false
// .prototypeOfLinkedObject

// - Property --------------------------------------
Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));  // true: instance property
console.log(jonas.hasOwnProperty('species'));  // false


// - Prototype Chain ---------------------------------
console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);  // null [Object.prototype]

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3]; // new Array = [];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);  // true
console.log(arr.__proto__.__proto__);

// ! Adding new method return is important: BAD Practice
Array.prototype.unique = function () {
    return [...new Set(this)];
}
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x = 1);  // Function is an object
*/

/*
  ~ Coding Challenge 1 --------------------------------------------------------------
*/

/*
1. Use a constructor function to implement a Car. A
car has a make and a speed property. The speed
property os the current speed of the car in km/h;

2. Implement an 'accelerate' method that will increase
the car's speed by 10, and log the new speed to the
console.

3. Implement a 'brake' method that will decrease the
car's speed by 5, and log the new speed to the
console;

4. Create 2 car objects and experiment with calling
'accelerate' and 'brake' multiple times on each of
them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

Good Luck :D
*/
/*
const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);


Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}
Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
 */

/*
 ~ ES6 Classes --------------------------------------------------------------
*/

/*
// Class Expression
// const PersonCL = class { }

// Class declaration
class PersonCL {
    constructor(firstName, birthYear) {
        // console.log(this);  -> {}

        this.firstName = firstName;
        this.birthYear = birthYear;
    }
    //  Method will be added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }
    greet() {
        console.log(`Hey ${this.firstName}`);
    }
}

const jessica = new PersonCL('Jessica', 1996);
console.log(jessica);

jessica.calcAge();

console.log(jessica.__proto__ === PersonCL.prototype); // true

// * Creating new function dynamically -------------------------
// PersonCL.prototype.greet = function () {
//     console.log(`Hey ${this.firstName}`);
// }

jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode.

 */

/*
~ Setter And Getter --------------------------------------------------------------
*/

// Not mandatory to specify a setter when we have a getter for the same property.

// * Regular Object --------------------------------------
/*
const account = {
    owner: 'Jonas',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },
    // Any setter method needs to have exactly one parameter
    set latest(mov) {
        return this.movements.push(mov);
    }
};

console.log(account.latest);  // getter
account.latest = 50; // setter

console.log(account.movements);
 */

// * Classes -----------------------------------------
/*
class PersonCL {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    calcAge() {
        console.log(2037 - this.birthYear);
    }
    greet() {
        console.log(`Hey ${this.fullName}`);
    }
    // Getter
    get age() {
        return 2037 - this.birthYear;
    }

    // Set a property that already exists
    set fullName(name) {
        console.log(name);
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name`);
    }
    get fullName() {
        return this._fullName;
    }
}

const jessica = new PersonCL('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();

// getter
console.log(jessica.age);

const walter = new PersonCL('Walter White', 1965);
*/

/*
~ Static Method --------------------------------------------------------------
*/
/*
// * On Constructor Functions ------------------------------
const Person = function (firstName, birthYear) {
    // console.log(this);  -> {}

    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

}
// instance
const jonas = new Person('Jonas', 1991);
console.log((jonas));

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
}

jonas.calcAge();

// Static Method: It is not inherit because it is not in prototype of the object
Person.hey = function () {

    console.log('Hey there');
    // console.log(this); // Person constructor Function
}

Person.hey();
// jonas.hey(); // not Inherit [Uncaught TypeError: jonas.hey is not a function]

// * On Class ------------------------------
class PersonCL {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    // Instance Methods
    calcAge() {
        console.log(2037 - this.birthYear);
    }
    greet() {
        console.log(`Hey ${this.fullName}`);
    }
    // Getter
    get age() {
        return 2037 - this.birthYear;
    }

    // Set a property that already exists
    set fullName(name) {
        console.log(name);
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name`);
    }
    get fullName() {
        return this._fullName;
    }
    // Static Method
    static hey() {
        console.log('Hey there');
        console.log(this); // Person Classes
    }
}

const jessica = new PersonCL('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();

PersonCL.hey();
jessica.hey();  // not Inherit [Uncaught TypeError: jonas.hey is not a function]
 */

/*
~ Object.create() --------------------------------------------------------------
*/
/*
const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};

// It returns brand new empty object.
// ANd the prototype of that object will be object is passed in.
const steven = Object.create(PersonProto);
console.log(steven);

steven.name = 'Steven';
steven.birthYear = 2002;

steven.calcAge();

console.log(steven.__proto__);
console.log(steven.__proto__ === PersonProto);  // true

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
*/

/*
  ~ Coding Challenge 2 --------------------------------------------------------------
*/

/*
1. Re-create the challenge 1, but this time using an ES6
class;

2. Add a getter called 'speedUS' which returns the
current speed in mi/h (divide by 1.6)

3. Add a setter called 'speedUS' which sets the
current speed in mi/h (but converts it to km/h before
storing the value, by multiplying the input by 1.6)

4. Create a new car and experiment with the
accelerate and brake methods, and with the getter and
setter,

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK :D
*/

/*
class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
    break() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    get speedUS() {
        return this.speed / 1.6;
    }
    set speedUS(speed) {
        this.speed = speed * 1.6
    }

}
const ford = new Car('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.break();
ford.speedUS = 50;
console.log(ford);
 */

/*
  ~ Inheritance Between "Classes": Constructor Function --------------------------------------------------------------
*/
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;

  // * Inheritance Property -------------------------------------------
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// * Inheritance Methods (Linking prototype) ---------------------------------------------
Student.prototype = Object.create(Person.prototype);

// Student.prototype = Person.prototype;  // not end up with a prototype chain that we need. not be the exact same objet

// Only After link th prototype because linked prototype create empty function
// We we do this before linked than empty object is override.
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2020, "Computer Science");
console.log(mike);
mike.introduce();

mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student); // true
console.log(mike instanceof Person);  // true
console.log(mike instanceof Object);  //true

Student.prototype.constructor = Student; // without this constructor is point back to Person constructor
console.dir(Student.prototype.constructor);
 */

/*
  ~ Coding Challenge 3 --------------------------------------------------------------
*/

/*
1. Use a constructor function to implement an
Electric Car (called EV) as a CHILD "class" of Car.
Besides a make and current speed, the EV also has the
current battery charge in % ('charge property').

2. Implement a 'chargeBattery' method which takes an
argument 'chargeTo' and sets the battery charge to
'chargeTo';

3. Implement an 'accelerate' method tha will
increase the car's speed by 20, and decrease the
charge by 1%. Then log a message like this: 'Tesla
going at 140 km/h, with a charge of 22%;

4. Create an electric car object and experiment with
calling ' accelerate', 'brake' and 'chargeBattery'
(charge to 90%). Notice what happens when you
'accelerate' !HINT: Review the definition of
polymorphism ;).

DATA CAR 1: 'Tesla' going ar 120 km/h, with a charge
of 23%

GOOD LUCK :)
*/
/*
const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}
Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

const EV = function (make, speed, charge) {

    Car.call(this, make, speed);
    this.charge = charge;
}

// Link the prototype
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
}

const tesla = new EV('Tesla', 120, 30);
// console.log(tesla);

// * Polymorphism: override the parent function -------------------
EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} is going at ${this.speed} km/h, with the charge of ${this.charge}`);

}

tesla.chargeBattery(90);
console.log(tesla);

tesla.brake();
tesla.accelerate();
 */

/*
  ~ Inheritance Between "Classes": ES6 Classes --------------------------------------------------------------
*/
/*
class PersonCL {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    calcAge() {
        console.log(2037 - this.birthYear);
    }
}

// class StudentCL extends PersonCL { }
// const martha = new StudentCL('Martha Jones', 2012);
// no constructor at all but still works inherit the properties

class StudentCL extends PersonCL {
    constructor(fullName, birthYear, course) {
        // Always needs to happens first!
        super(fullName, birthYear);
        this.course = course;
    }
    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }
    // * Polymorphism: override to the parent function -------------------
    calcAge() {
        console.log(`I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 10} `)
    }
}
const martha = new StudentCL('Martha Jones', 2012, 'Computer Science');
martha.introduce();

martha.calcAge();
*/

/*
  ~ Inheritance Between "Classes": Object.create() --------------------------------------------------------------
*/
/*
const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};

const steven = Object.create(PersonProto);
const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
}

StudentProto.introduce = function () {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
}
// * Polymorphism: override to the parent function -------------------
StudentProto.calcAge = function () {
    console.log(`I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 10} `)
}

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();

jay.calcAge();
 */


/*
  ~ Another Class Example --------------------------------------------------------------
*/
/*
class Account {
    constructor(owner, currency, pin, movements) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this.movements = [];
        this.locale = navigator.language;

        console.log(`Thanks for opening an account ${owner}`);
    }

    // Public Interface of the object
    deposit(val) {
        this.movements.push(val);
    }

    withdraw(val) {
        this.deposit(-val);
    }

    approveLoan(val) {
        return true;
    }

    requestLoan(val) {
        if (this.approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
        }
    }
}

const ac1 = new Account('Jonas', 'EUR', 1111);

// ac1.movements.push(250);
// ac1.movements.push(-140);

ac1.deposit(250);
ac1.withdraw(140);

ac1.requestLoan(1000);
ac1.approveLoan(1000);  // We need privacy here

console.log(ac1);
console.log(ac1.pin);  // We need privacy here
*/

/*
  ~ Encapsulation: Protected Properties And Methods --------------------------------------------------------------
*/
/*
class Account {
    constructor(owner, currency, pin, movements) {
        this.owner = owner;
        this.currency = currency;

        // Protected Property
        this._pin = pin;
        this._movements = [];
        this.locale = navigator.language;

        console.log(`Thanks for opening an account ${owner}`);
    }

    // Public Interface of the object
    getMovements() {
        return this._movements;
    }
    deposit(val) {
        this._movements.push(val);
    }

    withdraw(val) {
        this.deposit(-val);
    }

    _approveLoan(val) {
        return true;
    }

    requestLoan(val) {
        if (this._approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
        }
    }
}

const ac1 = new Account('Jonas', 'EUR', 1111);

// ac1._movements.push(250);
// ac1._movements.push(-140);

ac1.deposit(250);
ac1.withdraw(140);

ac1.requestLoan(1000);
// ac1.approveLoan(1000);  // We need privacy here

console.log(ac1.getMovements());

console.log(ac1);
// console.log(ac1.pin);  // We need privacy here
*/

/*
  ~ Encapsulation: Private Class Field And Methods --------------------------------------------------------------
*/
/*
// - 1) Public fields
// - 2) Private fields
// - 3) Public methods
// - 4) Private methods
// - (there is also the static version)

class Account {
    // 1) Public fields (instance)
    locale = navigator.language;
    // _movements = [];

    // 2) Private fields (available on instances themselves not one the prototype)
    #movements = [];
    #pin;


    constructor(owner, currency, pin, movements) {
        this.owner = owner;
        this.currency = currency;

        // Protected Property
        // this._pin = pin;

        this.#pin = pin;

        // this.#movements = [];
        // this.locale = navigator.language;

        console.log(`Thanks for opening an account ${owner}`);
    }

    // Public Method
    // Public Interface of the object
    getMovements() {
        return this.#movements;
    }
    deposit(val) {
        this.#movements.push(val);
    }

    withdraw(val) {
        this.deposit(-val);
    }
    requestLoan(val) {
        // if (this.#approveLoan(val)) {
        if (this._approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
        }
    }

    // 4) Private methods
    // #approveLoan(val) {
    _approveLoan(val) {
        return true;
    }
    static helper() {
        console.log('Hey');
    }
}

const ac1 = new Account('Jonas', 'EUR', 1111);

ac1.deposit(250);
ac1.withdraw(140);

ac1.requestLoan(1000);

console.log(ac1.getMovements());

console.log(ac1);

// console.log(ac1._approveLoan(1000))

// console.log(ac1.#approveLoan(1000));  // Private field '#approveLoan' must be declared in an enclosing class
// console.log(ac1.#movements); // Private field '#movements' must be declared in an enclosing class
// console.log(ac1.#pin);  //  Private field '#pin' must be declared in an enclosing class

Account.helper();
*/

/*
  ~ Chaining Methods --------------------------------------------------------------
*/
/*
class Account {
    // 1) Public fields (instance)
    locale = navigator.language;
    // _movements = [];

    // 2) Private fields (available on instances themselves not one the prototype)
    #movements = [];
    #pin;


    constructor(owner, currency, pin, movements) {
        this.owner = owner;
        this.currency = currency;

        // Protected Property
        // this._pin = pin;

        this.#pin = pin;

        // this.#movements = [];
        // this.locale = navigator.language;

        console.log(`Thanks for opening an account ${owner}`);
    }

    // Public Method
    // Public Interface of the object
    getMovements() {
        return this.#movements;
    }
    deposit(val) {
        this.#movements.push(val);
        return this;
    }

    withdraw(val) {
        this.deposit(-val);
        return this;

    }
    requestLoan(val) {
        // if (this.#approveLoan(val)) {
        if (this._approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
            return this;
        }
    }

    // 4) Private methods
    // #approveLoan(val) {
    _approveLoan(val) {
        return true;
    }
    static helper() {
        console.log('Hey');
    }
}

const ac1 = new Account('Jonas', 'EUR', 1111);

ac1.deposit(250);
ac1.withdraw(140);

ac1.requestLoan(1000);

console.log(ac1.getMovements());

console.log(ac1);

Account.helper();

// Chaining
ac1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);

console.log(ac1.getMovements());
*/


/*
  ~ Coding Challenge 4 -----------------------------------------------------------------
*/

/*
1. Recreate challenge #3, but this time using ES6
classes: create an 'EVCl' child class of the 'CARCl'
class

2. Make the 'charge' property private;

3. Implement the ability to chain the 'accelerate'
and 'chargeBattery' methods of this class, and also
update the 'brake' method in the Car class. They
experiment with chaining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge
of 23%

GOOD LUCK :D
*/

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
        return this;
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }

}

class EVCl extends CarCl {
    #charge;
    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }
    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;

    }
    accelerate() {
        this.speed += 20;
        this.#charge--;

        console.log(`${this.make} is going at ${this.speed} km/h, with charge of ${this.#charge}`);

        return this;

    }
}

const rivian = new EVCl('Rivian', 120, 23);
// console.log(rivian);

// console.log(rivian.#charge); // Private field '#charge' must be declared in an enclosing class

rivian
    .accelerate()
    .accelerate()
    .accelerate()
    .brake()
    .chargeBattery(50)
    .accelerate();

console.log(rivian.speedUS);