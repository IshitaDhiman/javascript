const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)//at the end/top
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)//at the beginning
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()
//console.log(myArr);
//console.log( newArr);
//console.log(typeof newArr)//string


// slice, splice

//console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
//end index is not included in slice and original array is also not changed

//console.log(myn1);
//console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
//end index included in splice and this subarray is removed from the original array 
//console.log("C ", myArr);
//console.log(myn2);

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
//marvel_heros.push(dc_heros)
//this will create array inside array-----dc_heros is pushed as an element
//console.log(marvel_heros);
//console.log(marvel_heros[3]);
//console.log(marvel_heros[3][0]);

const allHeros = marvel_heros.concat(dc_heros)//concat returns a new array
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]//spreading method
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)//passing the depth upto which solving
console.log(real_another_array);

console.log(Array.isArray("ishita"))//checks if it is array or not
console.log(Array.from("ishita"))//converting to array
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));