"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users = {
    name: "Clark Kent",
    isPaid: true,
};
var admins = {
    name: "Bruce Wayne",
    isAdmin: true,
};
console.log(users);
console.log(admins);
function getByID(id) {
    if (typeof id === "string") {
        return id.toUpperCase();
    }
    if (typeof id === "number") {
        return id.toFixed(2);
    }
}
getByID("1234");
getByID(1234);
// Array
var arr = [1, "2", 3, "4"];
console.log(arr);
var socialMedia;
socialMedia = "Twitter";
socialMedia = "Facebook";
socialMedia = "Instagram";
socialMedia = "LinkedIn";
