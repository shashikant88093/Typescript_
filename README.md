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



