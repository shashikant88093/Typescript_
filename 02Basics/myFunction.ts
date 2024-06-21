function Add(num1: number, num2: number) {
  return num1 + num2;
}

let sum: number = Add(10, 20);

console.log(sum); // 30

function UpperCase(str: string) {
  return str.toUpperCase();
}

let result: string = UpperCase("hello, world!");

console.log(result); // HELLO, WORLD!

function login(username: string, password: string): boolean {
  if (username === "admin" && password === "admin") {
    return true;
  } else {
    return false;
  }
}

let isLogin = login("admin", "admin");

console.log(isLogin); // true

// arrow function

let logout = (username: string, password: string): boolean => {
  if (username === "admin" && password === "admin") {
    return true;
  } else {
    return false;
  }
};

let isLogout = logout("admin", "admin");
console.log(isLogout); // true
