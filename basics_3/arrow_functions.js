const user = {
    name : "Ashutosh",
    price : 999,
    welcomeMessage : function() {
        console.log(`${this.name} welcome to website`);
        console.log(this);
    }
}

// this => keyword use to refer current context

// user.welcomeMessage()

// user.name = "Kailash"
// user.welcomeMessage() // kailash welcome to website , because we used this keyword , it only refers current refrence

// if you use console.log(this)

//Answer => 
// Ashutosh welcome to website
// {
//   name: 'Ashutosh',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
// Kailash welcome to website
// {
//   name: 'Kailash',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }


console.log(this) // {}


// +++++++++++++++++++++++++ Arrow function ++++++++++++++++++++++++++++++++


// function chai() {

//     let name = "ashu"
//    console.log(this.name);
// }

// chai()

const chai  = () => {
        let name = "ashu"
   console.log(this.name);
}
chai()

// implicit return

const addTwo = (num1,num2) =>  num1+num2 // here the code is of one line.
const addThree = (num1,num2) =>  ({name:"Ashutosh"})


console.log(addTwo(2,2));
console.log(addThree(2,2));