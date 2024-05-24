const user = {
    name: "hitesh",
    price: 999,
    WelcomeMessage: function () {
        // console.log(`${this.name}, this is welcomeMessage`);
        // console.log(this)
    }
}
// user.WelcomeMessage();
// user.name = "sam";
// user.WelcomeMessage();
// console.log(this);
function chai() {
    let username = "hitesh"
    console.log(this.username);
}
chai();
//////result----undefined

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai();

const addTwo = (num1, num2) => {
    return num1 + num2;

}
// console.log(addTwo(3, 4));

// const greeting = (val1) => {
//     return val1
// }
// console.log(`Welcome ${greeting("sam")}`);

const addOne = (num1, num2) => num1 + num2
// console.log(addOne(3, 4));

const Sum = (num1, num2) => (num1 + num2)
// console.log(Sum(3, 6));