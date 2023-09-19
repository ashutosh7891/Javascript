// Object literal = it's literally a object

// const newObject = {
//     userName : "Ashu",
//     age : 69,
//     isLoggedIn : true,
//     userDetails : function(){
//         // console.log("Got user details from database");
//         // console.log(`Username: ${this.userName}`) // this is used for current context
//         console.log(this);

//     }
    
// }


// console.log(newObject.userDetails());
// console.log(this); // {} => because there is nothing in global context

// CONSTRUCTOR


function user(username , logincount , isLoggedIn){
    this.username = username;
    this.logincount = logincount;
    this.isLoggedIn = isLoggedIn;

    return this
}

// const userOne = user("Ashutosh",12,true)
// const userTwo = user('kailash' , 32 , false) // values are being overwrite by the node 

// console.log(userOne);
// console.log(userTwo);

// best way is to use new keyword

const userOne = new user("Ashutosh",12,true) // every time for a new instance we use 'new'
const userTwo = new user('kailash' , 32 , false)


console.log(userOne.constructor);
console.log(userTwo);

// new keyword =>

// step 1 => new object is being created when we use 'new'
// step 2 => constructor function is being called because of new keyword
// step 3 => this keyword which we have used they will be injected inside that object
// step 4 => we will have function called 

