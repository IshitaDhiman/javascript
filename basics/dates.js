let myDate= new Date()
//console.log(myDate);
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toJSON());
//console.log(typeof myDate);//object type

let newDate= new Date(2023,1,2)//months start from 0 in js
//console.log(newDate.toDateString());

let myCreatedDate = new Date(2023, 0, 23, 5, 3)
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()//in milliseconds from january 1 1970 to current time
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime())//in millisecond

console.log(Date.now()/1000)//----in seconds but it will be in decimal, so use Math.floor
console.log(Math.floor(Date.now()/1000))

let nDate = new Date()
console.log(nDate);
console.log(nDate.getMonth() + 1);
console.log(nDate.getDay());