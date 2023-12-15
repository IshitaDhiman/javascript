"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser this works in browser only


let name = "ishita"
let age = 22
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value 
// undefined => when you have not assigned value
// symbol => unique representation


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object

let score="21"
let numScore=Number(score)
console.log(numScore);
console.log(typeof numScore);

let str="ishita"
let Numstr=Number(str)
console.log(Numstr);
console.log(typeof Numstr);
//conversion
// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let booleanStr = Boolean(str)
console.log(booleanStr);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//console.log(2 > 1);
//console.log(2 >= 1);
//console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


//console.log("2" > 1);
//console.log("02" > 1);

console.log(null > 0); //null is converted to 0 in case of comparison operator
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === stricty matching datatypes 

console.log("2" === 2);
