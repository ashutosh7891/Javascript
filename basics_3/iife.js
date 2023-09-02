// immediate invoke function expression

// to reduce the pollution of the global scope , and want to invoke a function immediately you use IIFE

(function chai(){
    // named IIFE
    console.log(`DB IS CONNECTED`); // example of a function that is being invoked
})() ; // this semi colon is used to diffrenciate between two IIFE , used in interviews 

// IIFE is used to use ()() this 

( (name) => {
    // unnamed IFFE 
    console.log(`DB IS CONNECTED AGAIN ${name}`);
})('ASHUTOSH')

