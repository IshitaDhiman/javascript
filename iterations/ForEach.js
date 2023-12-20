//Arrays commonly use for each loop
coding=["java","cpp","js","python"]
coding.forEach(function (item){//call back function has no name
    //console.log(item);
})
coding.forEach( (item) => {//arrow function used as callback function
    //console.log(item);
})

function printMe(item){
    console.log(item);
}
//coding.forEach(printMe)//passing only the reference of the function(callback)

//using 3 parameters
coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

//array of objects
const MyArray=[
    {
        language:"Java",
        extension:"java"
    },
    {
        language:"Python",
        extension:"py" 
    },
    {
        language:"Javascript",
        extension:"js"
    }
]
MyArray.forEach( (item)=>{
    console.log(`Language is ${item.language} and extension is ${item.extension}`);
})