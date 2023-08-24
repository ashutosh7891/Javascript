console.log( typeof 2>4);

// trty something diffrent

console.log(null > 0);
console.log(null == 0);    // <= avoid these types of comparisions
console.log(null >= 0);    // clean code always be there

/* the reason is that equality check == and comparision  > , <, >= , <= work diffrently because 
comparision converyt null to a number treating as 0 , that's why null >=0 is true and null > 0 is false */

// FOR STRICT CHECK ===

console.log("2" == 2)    // <= avoid these types of comparisions
console.log(2 == "2")
console.log("2" === 2); // here it is checking datatypes also and comapring with each of them so String != Integer
console.log(2 === "2"); // same alse here