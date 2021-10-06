## Object-Oriented Programming (OOP)

- The object-oriented programming or OOP in short, id a programming paradigm based on the concepts of objects.
- In OOP we can make different object interact with one another.
- In traditional OOP, to generate objects programmatically or to create new objects from our code, we use something called classes.

- **_Class_**:
  - We can think of a class as a blueprint, which can then be used to create new objects based on the rules described in the class.
- **_Instance_**:
  - An instance is a real object that we can use in our code which is created from a class and a class itself is not an object.
  - We can use class to create as many instances as we need in our application (multiple houses from one blueprint).
  - So these objects can have different data in them, but they all share the same functionality.
- The process of creating instance is called **_instantiation_**.

---

**The 4 Fundamental OOP principle**:

And these principle are:

- **_Abstraction_**:

  - Ignoring or hiding details that **_don't matter_**, allowing us to get an **_overview_** perspective of the thing we'er implementing, instead of messing with details that don't really matter to out implementation.

  ***

- **_Encapsulation_**:

  - Keeping properties and methods **_private_** inside the class, so they are **_not accessible from outside the class_**.
  - Some methods can be **_exposed_** ad a public interface(API);
  - We can prevents external code from accidentally manipulating internal properties/state.
  - It allows to change internal implementation without the risk of breaking external code.

  ***

- **_Inheritance_**:

  - Making all properties and methods of a certain class **_available to a child class_**, forming a hierarchial relationship between classes.
  - This allows us to**_ reuse common logic_** and to model real-world relationships.

  ***

- **_Polymorphism_**:
  - A child class can **_overwrite_** a method it inherited from a parent class.

---

## OOP In JavaScript:

- In JavaScript we have something called **_prototypes_**.
- And all objects in JavaScript are **_liked_** to a certain prototype object. So we say that each object has a prototype.

- **_prototypes_**:

  - The prototype object contains methods and properties that all the objects that are linked to that prototype can **_access and use_**.
  - And this behavior us usually called **_prototypal inheritance_**.

- **_prototypal inheritance_**:

  - The prototype contains methods (behavior) that are **_accessible to all objects linked to that prototype_**;
  - It's basically an instance inheriting from a class.

- We also can say the behavior(methods) is **_delegated_** to the linked prototype object, so beside the prototypal inheritance, we call this mechanism **_delegation_**.

  ***

**Ways of Implementing Prototypal Inheritance**:

There are actually 3 different ways:

1. **_Constructor Function_**:

- Technique to create objects from a function;
- This is how built-in objects like Array, Maps or Sets are actually implemented.

---

2. **_ES6 Classes_**:

- Modern alternative to constructor function syntax;
- `"Syntactic sugar"`: behind the scenes, ES6 classes works **_exactly_** like constructor functions;
- ES6 classes do **_NOT_** behave like classes in "classical OOP".

---

3. **_Object.create()_**:

- The easiest and most straightforward way of linking an object to a prototype object.

`The 4 pillars of OOP are still valid!`

---

---

## Constructor Functions and The New Operator:

**Constructor Functions**:

- A constructor function is actually normal function, the only different between a regular function and a constructor function is that we **_call a constructor function with the `new` operator_**.
- In OOP there is a convention that constructor functions always start with a capital letter.
- **_Arrow function is not work_** as a function constructor, that because it **_doesn't have its own this keyword_** and we need that. So only **_function declaration_** and **_function expressions_**.

**New operator**:

- The new operator is actually a very special operator because it call the constructor function.
- When we call constructor function with new keyword, behind the scenes, there have been four steps.

  1.  A new empty object is created.
  2.  Function is called and in this function call this keyword will be set to the newly created object.
  3.  The newly created object is linked to the prototype.
  4.  The object that was created in the beginning is then automatically returned from the constructor function.

- **_instance_**:

  - The created object is an instance of Constructor.
  - There is even an operator that checks the created object is instance or not.
  - 'instanceof' operator : this than returns it is true or false.`console.log(jonas instanceof Person); // true`

- **_instance property_**:
  - properties that are available on the all the instances that are created through the constructor function.

```
NOTE: Construction function are not really a features of the JavaScript language
Instead, they are simply a pattern that has been developed by other developer
And now everyone simply uses this.
```

```javascript
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
  };
};

// instance
const jonas = new Person("Jonas", 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

// instance
const matilda = new Person("Matilda", 2017);

// instance
const jack = new Person("Jack", 1975);
console.log(matilda, jack);

const jay = "jay";
console.log(jonas instanceof Person); // true
console.log(jay instanceof Person); // false
```

---

## Prototypes:

- Each and every function in JavaScript automatically has a property called prototype. And that includes, constructor functions
- Now Every object that's created by a certain constructor function will get access (inherit) to all the methods and properties that we defined on the constructor prototype property.

```javascript
// * Prototypes ---------------------------------------
console.log(Person.prototype);

// - Methods(function) ---------------------------------
// now there is only one copy of this function
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();
jack.calcAge();

// checking prototype
console.log(jonas.__proto__); // step 3

// its sets the __proto__ property to the prototype property of the constructor function.
console.log(jonas.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(matilda)); // true

console.log(Person.prototype.isPrototypeOf(Person)); // false
// .prototypeOfLinkedObject

// - Property --------------------------------------
Person.prototype.species = "Homo Sapiens";
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty("firstName")); // true: instance property
console.log(jonas.hasOwnProperty("species")); // false
```

## Prototypal Inheritance and The Prototype Chain:

**_Prototypal Inheritance_**:

- When object call any function, firstly javascript looks on that object.
- If there is not that called function than Javascript looks on the its prototype.

---

**_Prototype Chain_**:

- The prototype chain whenever JavaScript can find a certain **_property or method_** in a **_certain object_** it's gonna look up into the **_next prototype_** in the **_prototype chain_** and see if it can **_find it there_**.

- The **_Object.prototype_** is usually the **_top_** of the prototype chain which means that it's prototype is **_null_**.

  ***

## Prototype Inheritance On Built-In Object:

```javascript
const arr = [3, 6, 4, 5, 6, 9, 3]; // new Array = [];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.__proto__.__proto__);

// ! Adding new method return is important: BAD Practice
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector("h1");
console.dir((x) => (x = 1)); // Function is an object
```

---

## ES6 Classes

Classes in JavaScript do not work like traditional classes in other languages like Java or C++.

- So instead classes in JavaScript are just synthetic sugar over constructor function.
- They still implement prototypal inheritance behind the scenes.
- Classes are just a **_special type of function_**, so although we use the **_class keyword_** behind the scene classes are **_still functions_**.
- And therefore we have **_class expression_** and **_class declarations_**.

- **_Constructor method_**

  - Inside the class the first thing that we need to do is to add a constructor method. And this constructor method actually works in a pretty similar way as a constructor function.
  - But this one is actually a method of this class in fact it needs to be called constructor, so that is the rule.

- **_Creating a new object_**:

  - The act of creating a new object actually also works in the exact same way as creating instance in constructor function. So using the **_new operator_**.
  - So therefore, whenever we create a new object like a new instance using the new operator this constructor will automatically be called.

- **_Methods in class_**:
  - All methods that we write in th class, so **_outside of the constructor_** will be on the **_prototype of the object and not on the objects themselves_**.
  - similar as prototypal inheritance. `Person.prototype.calcAge= function(){}`

```js
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
  greet = function () {
    console.log(`Hey ${this.firstName}`);
  };
}

const jessica = new PersonCL("Jessica", 1996);
console.log(jessica);

jessica.calcAge();

console.log(jessica.__proto__ === PersonCL.prototype); // true

// * Creating new function dynamically -------------------------
// PersonCL.prototype.greet = function () {
//     console.log(`Hey ${this.firstName}`);
// }

jessica.greet();
```

```
NOTE:
1. Classes are NOT hoisted even if they are class declarations.
2. Just like function classes are also first-class citizen. we can pass them into a function
and return from function.
3. The classes are always executed in strict mode.

```

---

## Setter and Getter:

Every object in JavaScript can have setter and getter properties and we call these special properties assessor properties, while the more normal properties are called data properties.

- So getter and setter are basically functions that get and set a value so just as the name says, but on the outside they still look like regular properties.

- It is not mandatory to specify a setter when we have a getter for the same property.
- Any setter method needs to have exactly one parameter

- Regular function
- Classes

---

## Static Methods:

- Static methods are not available one instances or objects because it is not in prototype of the object.
- They still useful to implement some kind of helper function about a class or about a constructor function.

---

## Object.create():

- With Object.create there is still the idea of prototype inheritance however there are no prototype properties involved.
- And no constructor function or no new operator. Instead we can use Object.create to essentially manually set the prototype of an object, to any other object that we want.

```
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
```

---

## Inheritance Between "Classes": Constructor Function:

```js
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

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student; // without this constructor is point back to Person constructor
console.dir(Student.prototype.constructor);
```

---

## Inheritance Between "Classes": ES6 Classes:

- To implement inheritance between ES6 classes, we only need two ingredients:
- We need the **_extends_** keyword and we need the **_super function_**.
- **_Extends_**:
  - The extends keyword link to prototypes behind the scenes.
- **_Super function_**:

  - The super is basically the constructor of the parent class constructor.
  - In child class constructor super function is always needs to happens first, that's because this call to the super function is responsible for creating the this keyword in this subclass.

- If you do not need any new properties, then you don't even need to brother writing a constructor method in the child class.

```js
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
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      } `
    );
  }
}
const martha = new StudentCL("Martha Jones", 2012, "Computer Science");
martha.introduce();

martha.calcAge();
```

---

## Inheritance Between "Classes": Object.create():

- Linking object together

```js
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.fullName} and I study ${this.course}`);
};
// * Polymorphism: override to the parent function -------------------
StudentProto.calcAge = function () {
  console.log(
    `I'm ${
      2037 - this.birthYear
    } years old, but as a student I feel more like ${
      2037 - this.birthYear + 10
    } `
  );
};

const jay = Object.create(StudentProto);
jay.init("Jay", 2010, "Computer Science");
jay.introduce();

jay.calcAge();
```

---

## Encapsulation: Protected Properties And Methods

- The encapsulation means to keep some properties and methods private inside the class so they are not accessible from outside if the class.
- Then tha rest of the methods are exposed as a public interface, which we can also call API.
- There are two big reason why we need encapsulation and data privacy:
  1. To prevent code from outside of a class to accidentally manipulate or data inside the class.
  2. Whe we expose only a small interface so small API consisting only of a few public methods then we can change all the other internal methods with more confidence. Because in this case, we can be sure that external code does not rely on these private methods. And so therefore our code will not break when we do internal changes.

`Just add naming "_" convention that other developer should know that that property or method is private`

---

## Encapsulation: Private Class Field And Methods

Private class fields and methods are actually part of a bigger proposal for improving and changing JavaScript classes which simply called **_Class fields_**.

**_Class Fields_**:

- Now this class fields proposal is currently at stage three. And so right now it's actually not yet part of the JavaScript language.
- However, being at stage three means that it's very likely that at some point it wil move forward to stage number four. And then it will actually become a part of the JavaScript language.
- And that's probably gonna happen some point soon in the future.

In this proposal, there are actually four different kinds of fields and methods, and actually it's even eight.

**_Public fields_**:

- referenceable by the this keyword and they are also referenceable via the this keyword.
- available on instances themselves and also on the prototype.
- declared above the constructor function.

**_Private fields_**:

- available on instances themselves not on the prototype
- Private fields is the one that are not accessible from the outside.
- We cannot set private field inside the constructor.
- The naming convention of private fields is they are started with `#` symbol.

**_Public methods_**:

- Public Interface of the object normal prototype function.

**_Private methods_**:

- The naming convention of private method is they are started with `#` symbol.

**_Static versions_**:

- There is also the static version of all above properties and methods.
- They are worked by simply adding the `static` keyword in front of it.
- These static methods will not be available on all the instance, but only on the class itself.

---

## Chaining Methods

- Returns the object itself at the end of a method that we want to be chainable.
- Returning `this` keyword will essentially make the method chainable.
  `ac1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);`
