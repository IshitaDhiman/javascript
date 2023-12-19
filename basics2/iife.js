//immediately invoked function expressions
//to prevent global scope pollution
//()()--syntax
//named IIFE
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
//normal function inside parenthesis
//; should be used so that it knows where to end the context of the function

//arrow function can also be used as iife
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('ishita');
