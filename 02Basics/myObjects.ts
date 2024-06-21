// function createUser({ name: string, isPaid: boolean }) {}

// createUser({
//   name: "John",
//   isPaid: true,
// });

// type User = {
//   name: string;
//   isPaid: boolean;
// };

// function createUser2(user: User) {
//   console.log(user.name);
//   console.log(user.isPaid);
// }

// createUser2({
//   name: "John",
//   isPaid: true,
// });

// readonly
type User2 = {
  readonly _id: number;
  name: string;
  isPaid: boolean;
  cardDetails?: number;
};

type cardNumber = {
  cardNumber: number;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber & cardDate & { cardCVV: number };

let user: User2 = {
  _id: 1,
  name: "John",
  isPaid: true,
};

// user._id = 2; // error
user.name = "Jane";

export {};
