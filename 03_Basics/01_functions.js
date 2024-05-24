function saymyname() {
    // console.log("H");
    // console.log("I");
    // console.log("T");
    // console.log("E");
    // console.log("S");
    // console.log("H");
}
saymyname();

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }
// addTwoNumbers(3, 5);

function addTwoNumbers(number1, number2) {
    let result = number1 + number2;
    return result;
}
const result = addTwoNumbers(1, 3);
// console.log(result);

function loginmessage(username) {
    if (username === undefined) {
        console.log("Enter a value");
        return;
    }
    return `${username} loggedIN`
}
// console.log(loginmessage("j"));

// function Box(name) {
//     return `${name} boxtype`
// }
// console.log(Box("plastic"));

function calculateCartValue(val1, val2, ...num1) {
    console.log(val1);
    return (num1)


}
console.log(calculateCartValue(100, 200, 33, 200, 43));
//console.log(calculateCartValue(11));

const user = {
    name: "hitesh",
    age: 29,
    price: 999
}
function handleObjects(anyobject) {
    // console.log(`name is ${anyobject.name} and price is${anyobject.price}`)
}
handleObjects(user);

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));



