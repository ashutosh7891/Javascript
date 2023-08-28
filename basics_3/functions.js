// function basics


// function sayMyName() {
//     console.log("hi");
//     console.log("hi");
//     console.log("hi");
//     console.log("hi");
    
// }

// sayMyName() // when you say just "sayMyName" it's a refrence if you use () in the end then it will be called as function

// add two numbers function

// function addTwoNumbers(a,b){
//     console.log(a + b);
// }

// addTwoNumbers(3,5) // you need to put the arguements 

// const results = addTwoNumbers(3,5)

// console.log("Result :",results); // it will show undefined 


// function addTwoNumbers(a,b){

//     let number = a + b;
    
//     return number;
//     // for example if i add console.log after this return statement it will not execute
//     console.log("Ashutosh"); // this thing will not execute


// }

// const result  = addTwoNumbers(3,5)

// console.log("result : " , result);

// Another way of writing function 

// function addTwoNumbers(a,b) {
//     return a + b;
// }

// const result =  addTwoNumbers(20+20)

// console.log("result:" , result);


// another way

function userLoggedIn(userName) {


    if (!userName) {
        return "no user logged in"
    }else {
        return `${userName}, just logged in`
    }

    
}

console.log(userLoggedIn(""));