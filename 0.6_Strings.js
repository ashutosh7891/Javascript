const name = "Ashutosh" // '' , "" anything can be used
const myRepo  = 50;

console.log(`my Name is ${name} and i have ${myRepo} repositories`); // mordern way of writing syntax

// another way to declare string is 

const anotherName = new String("Yadav sahab")  // work like an object {}
console.log(anotherName[0])  // {}
console.log(anotherName.__proto__); // [String : 'Yadav sahab']
console.log(anotherName.length); // 11
console.log(anotherName.indexOf('a')); // testing diffrent types of methods
console.log(anotherName.toUpperCase());  // YADAV SAHAB

console.log(anotherName.charAt(3)); // a


console.log(anotherName);

// some other methods

const newString = anotherName.substring(0,4)
console.log(newString);  //Yada

const againString = anotherName.slice(2 , 7);
console.log(againString); // day s
// in slice you can use negitive number also but in substring you can't it will guess and start the number with zero

// trim method 

const newStringOne = "   Ashutos    "
console.log(newStringOne);
console.log(newStringOne.trim()); // this will reduce the extra space , mainly this kind of things used in when a person put their emails and put some extra spcae



// replace method

const url = 'https://ashutoshyadav.com/cuims%20application'

console.log(url.replace('%20' , '-')) // it will replace whatever you have added 

// includes method

console.log(url.includes('ashutoshyadav')) // true
console.log(url.includes('douglas'))  // false

// split method that converts string to array 

const hello = "jessie-pinkman"
console.log(hello.split('-')); // ['jessie' , 'pinkman']

console.log(newStringOne.trimEnd());
console.log(newStringOne.trimLeft());