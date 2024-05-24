const myArr = ["jss", "cpp", "py", "java"];
myArr.forEach(function (item) {
    // console.log(item);
})
myArr.forEach((val) => {
    // console.log(val);

})
function printMe(item) {
    // console.log(item);
}
myArr.forEach(printMe);

myArr.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})

let myArr2 = [
    {
        language: "js",
        price: 399
    },
    {
        language: "java",
        price: 399
    },
    {
        language: "c++",
        price: 399
    }



]
myArr2.forEach((item) => {
    console.log(item.language);

})