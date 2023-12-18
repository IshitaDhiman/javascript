const tinderUser = new Object()
//const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "qwerty"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = { obj1, obj2 }
console.log(obj3);

const obj5 = Object.assign({}, obj1, obj2, obj4)//target,source
//target is returned
console.log(obj5);

const obj6 = {...obj1, ...obj2}//mostly used method--spread out
console.log(obj6);

//array of objects is returned often while working withdatabases
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));//returned as array
console.log(Object.values(tinderUser));//returned as array
console.log(Object.entries(tinderUser));//key value pairs returned as array inside array
