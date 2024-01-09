const colorRandom=function(){
    const hex="0123456789ABCDEF"
    let color='#';
    for (let index = 0; index < 6; index++) {
        color+=hex[Math.floor(Math.random()*16)];
        
    }
    return color;
}
let IntervalId;
const startChanging=function(){
    if(!IntervalId){
        IntervalId=setInterval(changeColor,1000);
    }

    function changeColor(){
        document.body.style.backgroundColor=colorRandom();
    }

}
const stopChanging=function(){
    clearInterval(IntervalId);
    IntervalId=null;

}
document.querySelector("#start").addEventListener('click',startChanging);
document.querySelector("#stop").addEventListener('click',stopChanging);