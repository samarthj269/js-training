// ARROW FUNCTIONS:

// Write a function expression that takes in a number and returns its square.
const square = (num) => num * num;
const newNum = square(3);
console.log(newNum)
// Write a function expression that takes in two numbers and returns their sum.
const number = (num1, num2) => num1 + num2
const Sum = number(1, 4)
console.log(Sum)
// Write a function expression that takes in a number and returns true if it's even and false if it's odd.
const newNumber = (num) => {
    if (num % 2 === 0) {
        return true
    } else {
        return false
    }
}
const value = newNumber(5)
console.log(value)