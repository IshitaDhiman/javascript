const name="ishita"
const score=10
//outdates syntax these days
console.log(name+score+"dhiman");//concatenation
console.log(`Hello my name is ${name} and score is ${score}`);//string interpolation

const MyName= new String("Ishita")
console.log(MyName);
console.log(MyName[2]);
console.log(MyName.__proto__);
console.log(MyName.length);
console.log(MyName.toUpperCase());
console.log(MyName.charAt(2));
console.log(MyName.indexOf('a'));
const newString = MyName.substring(0, 4)
console.log(newString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))
console.log(url.includes('sundar'))

const eg="ishita-dhiman-btech-cse"
console.log(eg.split('-'));//splitting into array based on a delimeter

const str1 = 'Breaded Mushrooms';
console.log(str1.padEnd(25, '.'));//padding to reach a particular length-25 here is desired length

//this one is commonly used to hide half details like phone number, emails,etc
const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');
console.log(maskedNumber);
// Expected output: "************5581"