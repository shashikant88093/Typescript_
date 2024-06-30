<!-- to create typescript project type  -->
cmd tsc --init 


<!-- ts config for input and out file  -->
 point root and output directory in tsconfig file


<!-- to compile ts file to js file  -->
cmd tsc -w

<!-- setter and getter -->

In getter we can have return type but in setter we cannot return type 

publice method and variable name can get access inside or outside of class but private can only be acessable inside the class only

<!-- class  -->

Class have three access modifire 

1. Public can be access anywhere :-
  i: Inside classes
  ii: Outside Classes
  iii: In subClass also
2. Private can be access:-
   i: Only inside class
3. Protected can be access:-
   i: inside class 
   ii: inside the subclass only


Define Abstract Class:-
An abstract class in TypeScript is a class that cannot be instantiated directly. It serves as a base class for other classes and provides common functionality that can be inherited.

To define an abstract class in TypeScript, you use the `abstract` keyword before the class declaration. Here's an example:

```typescript
abstract class Animal {
    abstract makeSound(): void;

    move(): void {
        console.log("Moving...");
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Woof!");
    }
}

const dog = new Dog();
dog.makeSound(); // Output: "Woof!"
dog.move(); // Output: "Moving..."
```

In this example, the `Animal` class is defined as an abstract class with an abstract method `makeSound()`. The `Dog` class extends the `Animal` class and implements the `makeSound()` method. The `move()` method is inherited from the `Animal` class and can be called on instances of the `Dog` class.

Note that abstract methods must be implemented in the derived classes, while non-abstract methods can be inherited as is. Abstract classes cannot be instantiated directly, but they can be used as types for variables and function parameters.


<!-- Generic in typescript -->

Generics in TypeScript allow you to create reusable components that can work with different types. They provide a way to define functions, classes, or interfaces that can work with a variety of data types without sacrificing type safety.

Here's an example of using generics in TypeScript:


In this example, the identity function is a generic function that takes an argument of type T and returns the same type T. The Box class is a generic class that can hold a value of any type. The Pair interface is a generic interface that defines a pair of values of different types.

By using generics, you can write code that is more flexible and reusable, as it can work with different types without sacrificing type safety.


<!-- narrowing -->
Narrowing refers to the process of narrowing down the type of a variable or expression in a programming language. It allows you to make more specific assumptions about the type of a value based on certain conditions or operations.

In the provided code snippet, we have a function called `printLength` that takes an argument named `value` of type `string` or `number`. This is indicated by the union type `string | number`. 

Let's say we want to perform different operations based on the type of `value`. We can use narrowing techniques to handle each type separately. For example:

```typescript
function printLength(value: string | number) {
  if (typeof value === "string") {
    // Narrowing: value is now assumed to be of type string
    console.log("Length of the string:", value.length);
  } else {
    // Narrowing: value is now assumed to be of type number
    console.log("Value is a number:", value);
  }
}
```

In the code above, we use the `typeof` operator to check the type of `value`. If it is a string, we can safely assume that it has a `length` property and print its length. If it is not a string, we assume it is a number and print its value.

By narrowing down the type of `value` within the respective `if` and `else` blocks, we can safely access properties or perform operations specific to that type without causing any type errors.

This technique allows us to write more robust and type-safe code by handling different types appropriately based on their specific properties and behaviors.

function printLength(value: string | number) {
  if (typeof value === "string") {
    console.log("Length of the string:", value.length);
  } else {
    console.log("Value is a number");
  }
}

printLength("Hello"); // Output: Length of the string: 5
printLength(10); // Output: Value is a number