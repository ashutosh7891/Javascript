let score = "Ashutosh";
console.log(typeof score)
//another way of getting the type of 
//console.log(typeof(score))

let valueInNumber = Number(score) // if your declared variable is in string and if you want to convert it to number this is the way 
console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN - not a number
// true => 1 , false => 0


let isLoggedIn = "Hello"
let BooleanLoggedIn = Boolean(isLoggedIn)
console.log(BooleanLoggedIn);


// if you are writing 1 => true , "" => false , "abc" => true 
// all these are boolean variations.

let someNumber = 33;
let checkString = String(someNumber)
console.log(checkString);
console.log(typeof checkString);