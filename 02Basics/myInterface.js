var shashikant = {
    dbId: 1,
    name: "Shashikant",
    userID: 1234,
    startTrail: function () {
        return "Started";
    },
    getCoupon: function (name, discount) {
        if (name === void 0) { name = "default"; }
        if (discount === void 0) { discount = 10; }
        return discount;
    },
};
shashikant.name = "Shashi";
console.log(shashikant);
