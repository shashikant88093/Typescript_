interface User {
  readonly dbId: number;
  name: string;
  userID: number;
  googleID?: string;
  startTrail: () => string;
  getCoupon?: (couponname: string, discount: number) => number;
}

const shashikant: User = {
  dbId: 1,
  name: "Shashikant",
  userID: 1234,
  startTrail: function () {
    return "Started";
  },
  getCoupon: function (name = "default", discount = 10) {
    return discount;
  },
};

shashikant.name = "Shashi";

console.log(shashikant);
