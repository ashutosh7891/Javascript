// truthy and falsy

// truthy values =>
// "0" , "false" these are truthy because they are inside string value  , "", [] , function(){} , 

// falsy values =>

 // false , 0 , BigInt , -0 , null , NaN , undefined

const userEmail = []

// if (userEmail) {
//     console.log("user is logged in!");

// }else {
//     console.log("user is not logged in");
// }

// if (userEmail.length === 0) {
//     console.log("Array is empty"); // Array is empty
// }

const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    console.log("object is empty"); // detecting if object is empty
}


// NULLISH COALESCHING OPERATOR (??)=====> : null , undefined
 // what nullish coalesching operator do is do a safety check on null values


let val1;
// val1 = 5 ?? 10 //  => 5
// val1  = null ?? 10 //  => 10
// val1 = undefined ?? 15 // => 15
// val1 = undefined ?? 10 ?? 15 // => it will get the first value after undefined in this case it is 10

console.log(val1);


// TERnNIARY OPERATOR

// syntax => condition ? true : false

const icePack = 100

icePack <= 80 ? console.log("less than 80") : console.log("greater than 80");

