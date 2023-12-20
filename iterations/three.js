// for of

// ["", "", ""]
// [{}, {}, {}]
const arr=[2,1,4,5]
//for of loop 
for (const index of arr) {
    //console.log(index);
}
const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

//MAP
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")//only unique keys and order is maintained
//console.log(map);
for (const iterator of map) {
    //console.log(iterator);   
}
for (const [key, value] of map) {//destructuring of array
    //console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

//for (const [key, value] of myObject) {
     //console.log(key, ':-', value);
    
//} //OBJECTS ARE NOT ITERABLE LIKE MAPS using for of loop

const myObj = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObj) {
    //console.log(key);
    //console.log(myObj[key]);
    //console.log(`${key} shortcut is for ${myObj[key]}`);
    
}

//for in arrays
const progLang=["java","cpp","python"]
for (const key in progLang) {
    console.log(key);//prints key(index) of array
    console.log(progLang[key]);
    
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// } NOT ITERATABLE

