// class User {
//   email: string;
//   name: string;
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

// const user = new User("shashi94goswami@gmail.com", "Shashi");

// console.log(user);

// readonly city: string;

class User {
  readonly city: string = "Delhi";
  constructor(city: string) {
    this.city = city;
  }
}

const user = new User("Delhi");
