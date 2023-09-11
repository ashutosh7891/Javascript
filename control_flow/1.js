// const isUserLoggedIn = true
// const temperature = 42

// // if (2 === "2") {
// //     console.log("executed");
// // }

// // if (temperature < 50) {
// //     console.log("temperature is less then 50");
// // } else {
// //     console.log("temperature is greater then 50");
// // }


// const score = 200

// // if (score > 100) {
// //     var power = "fly" // var is a global scope in that case power will accessed out of scope it is used in 
// //     console.log(`user power: ${power}`);
// // }

// // console.log(`user power: ${power}`);


// // > , <  , =< , >= , != , == , === 

// // IMPLICIT SCOPE => example down

// const balance = 1000

// // if (balance > 500) console.log("test"); // we don't do this normally it's not a good practice

// // +++++++++NESTING+++++++++

// if (balance < 500) {
//     console.log("balance is less then 500");
// } else if (balance < 750){
//     console.log("balance is less then 750");
// } else if (balance < 900) {
//     console.log("balance is less then 900");
// } else {
//     console.log("less then 1200");
// }

// // Real life example => 

// // shopping courses

// const userLoggedIn = true
// const UPI = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if (userLoggedIn && UPI) {
//     console.log("you can shop courses");
// }

// if (loggedInFromGoogle || loggedInFromEmail) { // || => is used for or statement one of the statement is true so the code will be executed
//     console.log("logged in ")
// }


function isPalindrome(number) {
    // Convert the number to a string
    const numStr = number.toString();
  
    // Reverse the string
    const reversedStr = (numStr.split('').reverse().join('')).;
  
    // Compare the original string with the reversed string
    return numStr === reversedStr;
  }
  
  // Test the function with a number
  const number = "Ashhsa";
  
  if (isPalindrome(number)) {
    console.log(number + " is a palindrome.");
  } else {
    console.log(number + " is not a palindrome.");
  }
  