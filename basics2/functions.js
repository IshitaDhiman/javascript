function sayMyName(){
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("A");
}
//sayMyName()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}
addTwoNumbers(2,21)

function addTwoNums(number1, number2){

    let result = number1 + number2
    return result
    //return number1 + number2
}
const result = addTwoNums(3, 5)
console.log("Result: ", result);

function loginUser(username){
    if(username===undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUser());
console.log(loginUser("ishita"));

function calculateCartPrice(...num1){//rest operator is used
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000))

//object in function
const user = {
    username: "ishita",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

//array passing in function
const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
