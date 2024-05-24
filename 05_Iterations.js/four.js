const myObj = {
    'js': "JavaScript",
    'cpp': "C++",
    '.java': "Java"
}
// console.log(myObj)

for (const key in myObj) {
    // console.log(myObj[key]);
}

const myArr = ["js", "c++", "python"];
for (const key in myArr) {
    // console.log(myArr[key])
}
const myobj = {
    'Game': "Spiderman",
    'Console': "Ps4",
    'Price': 2299
}
for (const key in myobj) {
    // console.log(myobj[key])
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United state of America")
map.set('FR', "France")
map.set('IN', "India");
// for (const key in map) {
//     console.log(map[key])
// }