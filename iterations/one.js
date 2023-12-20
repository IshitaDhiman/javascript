//FOR LOOPS
for (let i = 0; i < 10; i++) {
    const element =i;
    if(element===5)console.log(element);
    
}

arr=[2,3,4,1,6,7,8]
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    //console.log(element);
    
}

for (let i = 1; i <= 3; i++) {
   //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 3; j++) {
   // console.log(`Inner loop value ${j} and outer loop ${i}`);
    console.log(i + '*' + j + ' = ' + i*j );
   }
    
}

//break and continue
for (let i = 0; i < 10; i++) {
    const element = i;
    if(element==5){
       // console.log(`${element} detected`);
        break;//takes the control out of loop
    }
    //console.log(element);
    
}

for (let i = 0; i < 7; i++) {
    const element = i;
    if(element==5){
        //.log(`${element} detected`);
        continue;//moves to next iteration, skips other lines
    }
    //console.log(element);
    
}