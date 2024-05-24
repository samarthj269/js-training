const myArr = [0, 1, 2, 3, 4, 5];
const Heroes = ["Shaktiman", "Spiderman", "Batman"];

const myArr2 = new Array(1, 2, 3, 4, 45);
// console.log(myArr2[0]);

///Array methods

//myArr.push(8);
myArr.push(9);
myArr.pop();
myArr.unshift(4);
myArr.shift();
// console.log(myArr);
// console.log(myArr.includes(8));
// console.log(myArr.indexOf(4));

const newArr = myArr.join();
// console.log(newArr);
// console.log(typeof newArr);

////SLice and Spilce
// console.log("A", myArr);
// const myN1 = myArr.slice(1, 3)
// console.log(myN1);
// console.log("B", myArr);
// const myN2 = myArr.splice(1, 3);
// console.log(myN2);
// console.log("C", myArr);


//push and concat

// let Marvel_Heroes = ["Spiderman", "Ironman", "Hulk"];
// let Dc_Heroes = ["Batman", "Superman", "Aquaman"];
// Marvel_Heroes.push(Dc_Heroes);
// // console.log(Marvel_Heroes);

// let All_Heroes = Dc_Heroes.concat(Marvel_Heroes);
// // console.log(All_Heroes);

// const AllnewHeroes = [...Marvel_Heroes, ...Dc_Heroes];
// console.log(AllnewHeroes);
////----------/////


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({ name: "hitesh" })) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));