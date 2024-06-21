function Add(num1, num2) {
    return num1 + num2;
}
var sum = Add(10, 20);
console.log(sum); // 30
function UpperCase(str) {
    return str.toUpperCase();
}
var result = UpperCase("hello, world!");
console.log(result); // HELLO, WORLD!
function login(username, password) {
    if (username === "admin" && password === "admin") {
        return true;
    }
    else {
        return false;
    }
}
var isLogin = login("admin", "admin");
console.log(isLogin); // true
// arrow function
var logout = function (username, password) {
    if (username === "admin" && password === "admin") {
        return true;
    }
    else {
        return false;
    }
};
var isLogout = logout("admin", "admin");
console.log(isLogout); // true
