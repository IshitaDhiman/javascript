const PromiseOne=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 1");
        resolve(); //binding to then
    },1000)

})
PromiseOne.then(function(){
    console.log("Promise Consumed");

})

//without name promise
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user);
})

const PromiseFour=new Promise(function(resolve,reject) {
    let error=true;
    if(!error){
        resolve({name:"ishita",id:"ishita@gmail.com"})
    }else{
        reject("ERROR")
    }    
})
PromiseFour
.then(function(data){
    console.log(data);
    return data.name;
})
.then(function(data){
    console.log(data);
})
.catch(function(err){
    console.log(err);
}).finally(() => console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});
//rather than using .then().catch() using async await
//it has to handle exceptions/errors using explicit try-catch block
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))