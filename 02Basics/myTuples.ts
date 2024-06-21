// tuples are fixed length arrays with fixed types

let user: [number, string, boolean];
user = [1, "Clark Kent", true];

console.log(user);

// push method is not available in tuples
// user.push(10); // error

// user[1] = 10; // error

// user[2] = "Batman"; // error

// user = [1, "Bruce Wayne", true, "Batman"]; // error

// user = [1, "Bruce Wayne"]; // error

// user = [1, "Bruce Wayne", true]; // correct

//  push ,shift , unshift, pop, splice, slice, concat, reverse, sort, indexOf, lastIndexOf, includes, join, toString, toLocaleString, fill, copyWithin, entries, keys, values, find, findIndex, filter, map, reduce, reduceRight, some, every, forEach, flat, flatMap, from, isArray, of, toString, toLocaleString, join, pop, push, reverse, shift, slice, sort, splice, unshift, concat, includes, indexOf, join, lastIndexOf, toString, toLocaleString, copyWithin, entries, every, fill, filter, find, findIndex, flat, flatMap, forEach, keys, map, reduce, reduceRight, some, values   in tuples
user.shift(); // error
console.log(user);
user.unshift(10); // error
console.log(user);
user.pop(); // error
console.log(user);
user.splice(1, 1); // error
console.log(user);
user.slice(1, 2); // error
console.log(user);
user.concat([1, "Bruce Wayne", true]); // error
console.log(user);
user.reverse(); // error
console.log(user);
user.sort(); // error
console.log(user);
user.indexOf(1); // error
console.log(user);
user.lastIndexOf(1); // error
console.log(user);
// user.includes(1); // error
console.log(user);
user.join(); // error
console.log(user);
user.toString(); // error
console.log(user);
user.toLocaleString(); // error
console.log(user);
// user.fill(10); // error
console.log(user);
