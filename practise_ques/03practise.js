// Write a function expression that takes in another function as an argument
// function getMessage(name) {
//     return name

// }
// function greet(getMessage, name) {
//     const welcomeMessage = "welcome  " + getMessage(name);
//     return welcomeMessage
// }
// const msg = greet(getMessage, "somil")
// console.log(msg)

function getName(name) {
    return name;
}

function greetPerson(getName, name) {
    return "Welcome " + getName(name);
}
const message = greetPerson(getName, "Somil");
console.log(message);