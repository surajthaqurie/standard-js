## Everything is an Obejct.(Well, almost everything):

- Arrays, Functions, Object, Dates , Wrapper for Numbers, String, Booleans .... **_IS AN OBJECT_**.
- But Primitives: Numers, String, Booleans, Undefined, Null ... **_ARE NO AN OBJECT_**.

**Object-Oriented Programming**:

- Objects interacting with one another through methods and properties;
- Used to store data, structure application into modules and keeping code clean;

**Constructors And Instances**:

- The constructor acts like a blueprint and is used to create instances, which of course are also objects.

**Inheritance**:

- Inheritance is when one object is based on another object. It's when one object gets access to another obejct's properties and methods.
- JavaScript is a prototype-based language which means that inheritance works by using something called **_prototypes_**.
- In practice, it means that each and every JavaScript object has a prototype property which makes inheritance possible in JavaScript.
- Each and every object that we ever create is an instance of the Object constructor which has bunch of methods in its prototype property which is **_Object object_**.

**ProtoType Chain**:

- When we try to access a certain method, or property on an object, JavaScript will first try to find that method on that exact obejct.
- But if it cannot find it, it will look in the obejct's prototype, which is the prototype property of its parent (**_Object object_**).
- So it moves up on the prototype chain. If the method is still not there, this continues until there is no more prototype to look at, which is null.
- Null Is the only one that has no prototype and therfore tha final link in the prototype chain.
- And in this case, undefined is returned.

**_SUMMARY_**:

- Every JavaScript obejct has a **_prototype property_**, which makes inheritance possible in JavaScript;
- The prototype property of an object is where we put methods and properties that we want **_other object to inherit;_**
- The Constructor's prototype property **_NOT_** the prototype of the Constructor itself, it's the prototype of **_ALL_** instance that are created through it;
- When a Certain Method (or property) is called, the search starts in the obejct itself, and if it cannot be found, the search moves on to the object's prototype.
  This continues until the method is founf: **_prototype chain_**.

**Primitives vs Object**

- **_Primitives_**: is that varibale containing primitives actually hold that data inside of the variable itself.
- **_Object_**: variables associated with objects donot actually contain the object but instead they contain a reference to the place in memory where the object sits, so where the object is stored.

**_Function_**:

- Functions are also object in javaScript.
- A function is an instance of the Object type.
- A function behaves like any other object
- We can store funcitons in variable.
- We can pass a function as an argument to other function.
- We can return a function from a function.
- Because of all that, we say that is javaScript we have the `First-Class Functions`

- **Passing Functions as arguments**
- **Function Returing Function**
- **IIFE(Immediately Invoked Function Expressions)**
- **Closures**:
  - An Inner function has always access to the variable and parameters of its outer function, even after the outer function has returned.
  - Even after a function returns and execution context is gone, the variable object is still there. It's not gone.
  - It still sits here in memory and it can be accessed.
- **Bind, Call and Apply**:
  - **_Call_**: The first argument of the call method is always to set the this variable.
  - **_Apply_**: This one accepts the arguments as an array, so that's only two argumrnts, first is this and second is array.
    variable and then an array where all the other arguments go.
  - **_Bind_**: The bind is very similar to the call method as well, so it also allow us to set the this variable explicitly. However the difference here is that bind doesn't immediately call the function, but instead it generates a copy of the function. So that we can store it somewhere.
