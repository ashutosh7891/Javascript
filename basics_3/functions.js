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

// function userLoggedIn(userName) {


//     if (!userName) {
//         return "no user logged in"
//     }else {
//         return `${userName}, just logged in`
//     }

    
// }

// console.log(userLoggedIn(""));

// sometime you want to more then one arguements like shopping cart =>

// function shoppingCart(...num1) { // use rest operator rest and spread looks the same but it differs when and where you are using it
//     return  num1
// }

// console.log(shoppingCart(200 , 400 , 400));


// interview question =>

function shoppingCart(value1 , vaule2 , ...num1) { // what happen to value1 , value2 , what will be the output
    return num1
}

console.log(shoppingCart(200 , 400 , 600 , )); // value1 = 200 , value2 = 400 


// how to handle onject in function =>

const user = {
    name : "Ashutosh" , 
    price : "$999"
}

function userFetch(anyObject) {

    console.log(`user name is ${anyObject.name} and price is ${anyObject.price}`);

}

// userFetch(user) // passing arguement as that object 
// another way

userFetch({
    name : "Ashutosh",
    price : 999
})

// Passing array through function

const userList = [200 , 400 , 100 , 600]

function arrayAccept(anyArray) {
    return anyArray[2]
}

// console.log(arrayAccept(userList))
// another way => 
console.log(arrayAccept([200 , 400 , 100 , 600]));
