let score = "Ashutosh";
console.log(typeof score)
//another way of getting the type of 
//console.log(typeof(score))

let valueInNumber = Number(score) // if your declared variable is in string and if you want to convert it to number this is the way 
console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN - not a number
// true => 1 , false => 0


// let isLoggedIn = "Hello"
// let BooleanLoggedIn = Boolean(isLoggedIn)
// console.log(BooleanLoggedIn);


// if you are writing 1 => true , "" => false , "abc" => true 
// all these are boolean variations.

// let someNumber = 33;
// let checkString = String(someNumber)
// console.log(checkString);
// console.log(typeof checkString);


// ********************** Operations ******************************

// Important operations
// let value = 3;
// let NegValue = -value;
// console.log(NegValue);

// Basics
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)


// **** confusing oerations ******

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 3) // if string come first then it will output => 123
console.log(1 + 2 + "3") // if Integer comes first then it will add first then string is being added after it output => 33


// Bad way pf writing code

console.log(+true) 
console.log(-true)
console.log(+"")
// all these are not industry standards 

// study about prefix and postfix MDN docs
// link - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment


