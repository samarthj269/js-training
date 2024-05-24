///////for of

///for of - array,string,map


let arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    // console.log(num);

}

const greeting = "Hello World";
for (const greet of greeting) {
    //console.log(greet);
}


//Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United state of America")
map.set('FR', "France")
map.set('IN', "India");

//console.log(map);


for (const [key, value] of map) {
    // console.log(key, '=', value)
}

const myobj = {
    'Game': "Spiderman",
    'Console': "Ps4",
    'Price': 2299
}
//console.log(myobj);
//for (const [key, value] of myobj) {
console.log(key, '=', value)
//}
//this is not iterable in objects