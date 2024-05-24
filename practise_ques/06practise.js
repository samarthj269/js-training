// Write a function expression that takes in a number and returns true if it's even and false if it's odd.
function number(num) {
    if (num % 2 === 0) {
        return true
    } else if (num % 2 != 0) {
        return false
    }

}
const result = number(6)
console.log(result)
