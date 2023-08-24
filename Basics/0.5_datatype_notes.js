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
    console.log("Hello world!");  // function
}

// link - https://262.ecma-international.org/5.1/ => search table 20 for refrence


// +++++++++++++++++++++++++ Stack and heap memory +++++++++++++++++


// Stack (primitive) , Heap (Non-primitve)

// example => 

let myYoutubeName = "AshutoshYadav"

let anotherName =  myYoutubeName;

anotherName = "jessie pinkman"

console.log(anotherName)
console.log(myYoutubeName);

// This is the example of stack memory where the original value of is not being changed and the copy of the original value is being given

// heap example =>

let user1 = {
    name : "Ashutosh",
    UPI : "ashutosh@ybl"
}

let user2 = user1

user2.UPI = "ashu@paytm"

console.log(user1);
console.log(user2) // here in heap memory the value will take the refrence of the original value to change 
                    // so automatically the value will change in both places

// Answers => user1 => { name: 'Ashutosh', UPI: 'ashu@paytm' }
//            user2 => { name: 'Ashutosh', UPI: 'ashu@paytm' }

