const val=100
if(val>=100){
    console.log("Value is greater than or equal to 100");
}
else{
    console.log("Value is less than 100");
}
// <, >, <=, >=, ==, !=, ===, !==
if(2=="2"){
    console.log("checking == operator");
}
if(2==="2"){
    //it matches the datatype also
    console.log("checking === operator");
}

//if else ladder
let balance=500
if(balance<250){
    console.log("less than 250");
}
else if(balance<500){
    console.log("less than 500");
}
else{
    console.log("greater than equal to 500");
}

//multiple condition checking
let isLoggedIn=true
let debitCard=true
if(isLoggedIn && debitCard){
    console.log("Authentic user");
}
if(isLoggedIn || 2==3){
    console.log("Yes || is working");
}
if(isLoggedIn && 2==3){
    console.log("&& requires both true");
}

//switch case
const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}

//truthy and falsy value
// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

const ArrayCheck=[]
if(ArrayCheck.length===0){
    console.log("Array is empty");
}

const ObjectCheck={}
//Object.keys()---return array of all the keys available in object passed
if(Object.keys(ObjectCheck).length===0){
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??): null undefined
//used when we are getting value from different functions or other databases etc
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);


// Ternary Operator
// condition ? true : false
const Price = 100
Price >= 80 ? console.log("greater than equal to 80") : console.log("less than 80")
