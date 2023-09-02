// // immediate invoke function expression

// // to reduce the pollution of the global scope , and want to invoke a function immediately you use IIFE

// (function chai(){
//     // named IIFE
//     console.log(`DB IS CONNECTED`); // example of a function that is being invoked
// })() ; // this semi colon is used to diffrenciate between two IIFE , used in interviews 

// // IIFE is used to use ()() this 

// ( (name) => {
//     // unnamed IFFE 
//     console.log(`DB IS CONNECTED AGAIN ${name}`);
// })('ASHUTOSH')


let val1 = 5
let val2 = 5

function addTotal(num1 , num2) {
        let total = num1 + num2;
        return total;

}

let result1 = console.log(addTotal(val1 , val2))
let result2 = console.log(addTotal(10,2))

