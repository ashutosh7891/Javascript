// primitive
// 7 categories => String , Number , boolean , null , undefined , Symbol , BigInt



const score = 100;
const anotherScore = 100.3;
const isLoggedIn = false;
let userLoggedIn;




const id = Symbol('12345')
const anotherId = Symbol('12345')
const bigNumber = 33424502305972095730957309573095730n // BigInteger

console.log(id==anotherId)
console.log(bigNumber);


// refrence / non primitive 

// types => Arrays , objects , functions

const heroes = ["superman" , "ironman" , "shaktiman"] // array

let myObj = {
    name : "Ashutosh",  // object
    age : 23
}


const myFunction  = function() {
    console.log("Hello world!");
}


