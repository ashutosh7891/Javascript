// how to get it to singleton and help to build it through constructor

const tinderUser = new Object() // singleton object

tinderUser.id = 123456
tinderUser.name = "Ashu"
tinderUser.age = 69

// console.log(tinderUser);

const tinder = {
    id : 69696,
    name : "Ashu" , 
    age : 69
} // non singleton object

// console.log(tinder);


// objects inside objects

const regularUser = {
    email : "sum@gmail.com",
    fullName : {
        userName : {
            fName : "Ashutosh",
            lName : "yadav"
        }
    }
}

// console.log(regularUser.fullName.userName.fName);

const object1 = {
    1 : "a",
    2 : "b"
}
const object2 = {
    3 : "a",
    4 : "b"
}

// const Object3 = Object.assign({} , object1 , object2) // {} should be there best practice
const Object3 = {...object1 , ...object2} // using spread operator is really usefull and mainly a industry standard

// console.log(Object3);


// when you are getting data from database

const user = [
    {
        name : "Ashutosh",
        age : 23 , 
        email : "ashu@gmail.com"
    },
    {
        name : "kailash",
        age : 23 , 
        email : "kailash@gmail.com"
    },
    {
        name : "Aniket",
        age : 23 , 
        email : "aniket@gmail.com"
    }
]

// console.log(user[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // getting keys as output
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // every key value pair will going to have it's own array

console.log(tinderUser.hasOwnProperty('sigma')) // to ckeck that if that array or object has that value or not


// Practice

const userRegistered = new Object()

userRegistered.name = "Ashutosh"
userRegistered.class = "Xi"
userRegistered.age = 23
userRegistered.id = Symbol(2345)


console.log(userRegistered);

console.log(Object.values(userRegistered));


// Destructuring


const course = {
    cName : "JS-hindi",
    price : 999 , 
    cTeacher : "Hitesh"
}

console.log(course.cName); 

// there is another way

const {cName , price , cTeacher} = course
console.log(`hey there welcome to ${cName} , this course is taught by the legend Mr: ${cTeacher} , and it's price is ${price}`);