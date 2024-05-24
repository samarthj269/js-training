// Write a program to perform functionality of a calculator (add,sub,multiply,divide)
const sumofNumber = (firstNumber, secondNumber) => firstNumber + secondNumber
const subofNumber = (firstNumber, secondNumber) => firstNumber - secondNumber
const divofNumber = (firstNumber, secondNumber) => firstNumber / secondNumber
const mulofNumber = (firstNumber, secondNumber) => firstNumber * secondNumber

function cal(firstNumber, secondNumber, operator) {
    if (operator === "+") {
        return sumofNumber(firstNumber, secondNumber)

    } else if (operator === "/") {
        return divofNumber(firstNumber, secondNumber)
    } else if (operator === "*") {
        return mulofNumber(firstNumber, secondNumber)


    } else if (operator === "-") {
        return subofNumber(firstNumber, secondNumber)
    }

}
const calculator = cal(2, 6, "+");
console.log(calculator) 