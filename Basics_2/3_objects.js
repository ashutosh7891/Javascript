// singleton

// object literals

// how to use symbol in this case important for interview

const mySym = Symbol("key1")

// const jsUser = {

//     name: "Ashutosh",
//     "full name" : "Ashutosh yadav",
//     [mySym] : "Value1" , // [] use this brackets to get Symbol
//     age : 23,
//     location : "mathura",
//     email : "Ashu@gmail.com",
//     isLoggedIn : "false",
//     lastLogin : ["Monday" , "thursday" , "saturday"]

// }
// How to access these data => 

// console.log(jsUser.lastLogin); // one of the way to access the data
// console.log(jsUser["lastLogin"]);
// console.log(jsUser[mySym]);

// change something inside object

jsUser.email = 'doughles@gmail.yahoom.com'
// console.log(jsUser.email); //doughles@gmail.yahoom.com

// Object.unfreeze(jsUser) // it will not going to change further anything insde that object

jsUser.name = "raosahab"
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("hey there JS users!");
}
jsUser.greeting1 = function() {
    console.log(`hey there JS user ${this["full name"]}`); // using 'this' to get the property of current object we are in
}

console.log(jsUser.greeting1());