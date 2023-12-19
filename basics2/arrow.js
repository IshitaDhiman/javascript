const user = {
    username: "ishita",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        //refers to present context
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);
//---in node environment it will be {} empty object. In browser console it will be window object

function check(){
    console.log(this);
}
check()

//console.log(this);

const chai =  () => {
    let username = "ishita"
    console.log(username);
    console.log(this);  //{}
}
chai()

//general syntax of arrow functions
//()=>{}---we can give this a name

//explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
//{} with curly braces return has to be used
//implicit return in arrow function
const addTwo = (n1,n2) => n1+n2
// const addTwo = (num1, num2) => ( num1 + num2 )
console.log(addTwo(1,2));

//when you have to return object, alone {} will work as explict return type
//for implicit return of an object use () 
const addTwoObjectReturn = (num1, num2) => ({username: "ishita"})
console.log(addTwoObjectReturn(1,2));
