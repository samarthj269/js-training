const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr = myArr.map((num) => num + 10);
// console.log(newArr)

// const NewArr1 = myArr.map((num) => num + 15).map((num) => num + 1).filter((num) => num > 10)
//console.log(NewArr1)
////Reduce

const Arr = [1, 2, 3];
// const newN2 = Arr.reduce(function (acc, currval) {
//     console.log(`acc=${acc} and currval is${currval}`);
//     return acc + currval

// }, 0)
// console.log(newN2)

const myTotal = Arr.reduce((acc, curval) => (acc + curval), 0)
console.log(myTotal)
