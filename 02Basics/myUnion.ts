type User = {
  name: string;
  isPaid: boolean;
};

type Admin = {
  name: string;
  isAdmin: boolean;
};

let users: User | Admin = {
  name: "Clark Kent",
  isPaid: true,
};

let admins: User | Admin = {
  name: "Bruce Wayne",
  isAdmin: true,
};

console.log(users);

console.log(admins);

function getByID(id: string | number) {
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

const arr: (string | number)[] = [1, "2", 3, "4"];
console.log(arr);

let socialMedia: "Twitter" | "Facebook" | "Instagram" | "LinkedIn";
socialMedia = "Twitter";
socialMedia = "Facebook";
socialMedia = "Instagram";
socialMedia = "LinkedIn";

// socialMedia = "YouTube"; // Error

export {};
