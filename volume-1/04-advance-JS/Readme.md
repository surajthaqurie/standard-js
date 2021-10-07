# Advance JavaScript

**Everything is an Object (Well, almost everything)**:

- **_Arrays_**, **_Functions_**, **_Object_**, **_Dates_** , **_Wrapper for Numbers_**, **_String_**, **_Booleans_** .... `are an object`.
- But **_Primitives_**: **_Numbers_**, **_String_**, **_Booleans_**, **_Undefined_**, **_Null_** ... `are not an object`.

## Object-Oriented Programming:

- **_Objects interacting with one another through methods and properties;_**

- Used to **_store data_**, **_structure application_** into modules and keeping **_code clean_**;

  ***

**Constructors And Instances**:

- The constructor acts like a **_blueprint_** and is used to **_create instances_**, which of course are also **_objects_**.

  ***

**Inheritance**:

- Inheritance is when **_one object is based on another object_**. It's when one object gets access to another object's properties and methods.
- JavaScript is a **_prototype-based language_** which means that **_inheritance_** works by using something called **_prototypes_**.
- In practice, it means that **_each and every JavaScript object_** has a **_prototype_** property which makes **_inheritance possible_** in JavaScript.
- **_Each and every object_** that we ever create is an **_instance_** of the **_Object constructor_** which has bunch of methods in its **_prototype property_** which is **_Object object_**.

  ***

**ProtoType Chain**:

- When we try to **_access_** a certain method, or property on an **_object_**, JavaScript will first try to find that method on that exact object.
- But if it **_cannot find_** it, it will look in the **_object's prototype_**, which is the prototype property of **_its parent (Object object)_**.
- So it **_moves up_** on the prototype chain. If the method is **_still not there_**, this continues until there is **_no more prototype_** to look at, which is **_null_**.
- **_Null_** is the only one that has **_no prototype_** and therefore it is the **_final link_** in the **_prototype chain_**.
- And in this case, **_undefined is returned_**.

  ***

**_Summary_**:

- **_Every JavaScript object_** has a **_prototype property_**, which makes **_inheritance possible_** in JavaScript;
- The **_prototype property_** of an **_object_** is where we put **_methods and properties_** that we want **_other object to inherit;_**
- The **_constructor's_** prototype property **_NOT_** the prototype of the **_constructor itself_**, it's the prototype of **_ALL instance_** that are **_created_** through it;
- When a **_certain method (or property)_** is called, the **_search starts in the object itself_**, and if it **_cannot be found_**, the search moves on to the **_object's prototype_**.
- This continues until the method is found: **_prototype chain_**.

## Primitives vs Object

- **_Primitives_**: is that **_variable_** containing primitives actually **_hold that data inside of the variable itself_**.
- **_Object_**: variables **_associated with objects_** do not actually contain the **_object_** but instead they contain a **_reference to the place in memory_** where the object sits, so where the **_object is stored_**.

## Function:

- Functions are also **_object_** in javaScript and they are an instance of the Object type.
- A function behaves like any **_other object_**. We can **_store_** functions in **_variable_**.
- We can pass a **_function as an argument_** to other function and we can **_return a function from a function_**.
- Because of all that, we say that is javaScript we have the **_First-Class Functions_**

  ***

- **Passing Functions as arguments**
- **Function Returning Function**
- **IIFE(Immediately Invoked Function Expressions)**

  ***

**Closures**:

- An **_Inner function_** has always **_access_** to the **_variable and parameters_** of **_its outer function_**, even **_after the outer function has returned_**.
- Even after a **_function returns and execution context is gone_**, the **_variable object_** is still there (**_it's not gone_**).
- It still sits here in **_memory_** and it can be **_accessed_**.

  ***

**Bind, Call and Apply**:

- **_Call_**:
  - The **_first argument_** of the call method is always to set the `this` variable.
- **_Apply_**:
  - This one accepts the **_arguments_** as an **_array_**, so that's only **_two arguments_**, first is `this` variable and second is **_array_**.
  - `this` variable and then an **_array_** where **_all the other arguments go_**.
- **_Bind_**:
  - The bind is very **_similar_** to the call method as well, so it also **_allow_** us to **_set the this variable explicitly_**.
  - However the **_difference_** here is that bind **_doesn't immediately call the function_**, but instead it generates a **_copy_** of the function. So that we can **_store it somewhere_**.

---

**Images, Notes and Documents are Referenced from**:

- **_Copyright (c) [Jonas Schmedtman](https://twitter.com/jonasschmedtman)_**.
