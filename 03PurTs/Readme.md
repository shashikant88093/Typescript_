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


