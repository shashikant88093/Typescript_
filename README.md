# Typescript_

Types in TypeScript are used to define the type of variables, function parameters and object properties. TypeScript is a statically typed language, which means that the type of a variable is known at compile time.

## Basic Types

Number - All numbers, no differentiation between integers or floats
String - All text values
Boolean - true or false
Array - Any JavaScript array, type can be flexible or strict
Tuple - Added by TypeScript: Fixed length array
Enum - Added by TypeScript: Automatically enumerated global constant identifiers
Null - Null value
Undefined - Undefined value
Void - Absence of having any type at all
Any - Any kind of value, no specific type assignment // it also can be used to ignore the type checking
Never - Represents the type of values that never occur
Unknown - Represents the type-safe counterpart of any
Object - Represents any non-primitive type


# Type Aliases

Type aliases create a new name for a type. Type aliases are sometimes similar to interfaces, but can name primitives, unions, tuples, and any other types that you’d otherwise have to write by hand.




# type Readonly<T>

let user ={
    readonly name: string;
    age: number;
}

let newUser: Readonly<user> = {
    name: 'John',
    age: 30
}

newUser.name = 'Doe'; // Error: Cannot assign to 'name' because it is a read-only property.

<!-- explain above -->

# type Partial<T>

type Partial<T> = {
    [P in keyof T]?: T[P];
};

interface User {
    name: string;
    age: number;
}

let user: Partial<User> = {
    name: 'John'
}


# function Parameters and how to use them and handle function output 

function add(a: number, b: number): number {
    return a + b;
}

let sum: number = add(10, 20);

console.log(sum); // 30

<!-- union example  -->

function add(a: number | string, b: number | string): number {
    if (typeof a === 'string') {
        a = parseInt(a, 10);
    }

    if (typeof b === 'string') {
        b = parseInt(b, 10);
    }

    return a + b;
}

let sum: number = add(10, 20);

console.log(sum); // 30

# Define interface and use it in function

interface is called a contract in TypeScript. It defines the syntax for classes to follow. Classes that are derived from an interface must follow the structure provided by their interface.

interface User {
    name: string;
    age: number;
}

function printUser(user: User) {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
}

let john = { name: 'John', age: 30 };

printUser(john); // Name: John, Age: 30

# Define interface and use it in class

interface User {
    name: string;
    age: number;
}

class UserAccount {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}


# Difference between interface and type

The main difference between type and interface is that type can also be used to create aliases for primitive types, union types, tuple types, and any other types that you’d otherwise have to write by hand. On the other hand, an interface can only be used to define the structure of an object.


# Type Assertion

Type assertions are a way to tell the compiler “trust me, I know what I’m doing.” A type assertion is like a type cast in other languages, but it performs no special checking or restructuring of data. It has no runtime impact and is used purely by the compiler.

let code: any = 123;
let employeeCode = <number> code;
let employeeCode = code as number;

# Type Guards

Type guards are some expression that performs a runtime check that guarantees the type in some scope. To define a type guard, we simply need to define a function whose return type is a type predicate.

function isString(test: any): test is string {
    return typeof test === 'string';
}

function example(foo: any) {
    if (isString(foo)) {
        console.log('it is a string');
        console.log(foo.length); // string function
    }
}

# Type Inference

Type inference is a mechanism in which TypeScript automatically determines the type of a variable based on the context in which it is used. For example, if you declare a variable and initialize it with a value, TypeScript will infer the type of the variable from the value assigned to it.

let x = 10; // Type inference: number
let y = 'Hello'; // Type inference: string

# Type Compatibility

Type compatibility in TypeScript is based on structural subtyping. Structural typing is a way of relating types based solely on their members. This is in contrast with nominal typing. Nominal typing means that two types are compatible only if they have the same name.

interface User {
    name: string;
}

let user: User = {
    name: 'John',
    age: 30
};

# interface extends interface

interface User {
    name: string;
}

interface Admin extends User {
    role: string;
}

let admin: Admin = {
    name: 'John',
    role: 'Admin'
};

# interface extends class

class User {
    name: string;
}

interface Admin extends User {
    role: string;
}

let admin: Admin = {
    name: 'John',
    role: 'Admin'
};

# interface extends multiple interfaces

interface User {
    name: string;
}

interface Admin {
    role: string;
}

interface SuperAdmin extends User, Admin {
    permission: string;
}

let superAdmin: SuperAdmin = {
    name: 'John',
    role: 'Admin',
    permission: 'All'
};


<!--    reopening of interface example -->


interface User {
    name: string;
}

interface User {
    age: number;
}

let user: User = {
    name: 'John',
    age: 30
};


