// how to get it to singleton and help to build it through constructor

const tinderUser = new Object() // singleton object


tinderUser.name = "Ashu"
tinderUser.age = 69

console.log(tinderUser);

const tinder = {
    name : "Ashu" , 
    age : 69
} // non singleton object

console.log(tinder);


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

console.log(regularUser.fullName.userName.fName);

const object1 = {
    1 : "a",
    2 : "b"
}
const object2 = {
    3 : "a",
    4 : "b"
}

const Object3 = Object.assign({} , object1 , object2) // {} should be there best practice
console.log(Object3);