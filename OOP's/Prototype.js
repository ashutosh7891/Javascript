// let myName = 'Ashu      '

// myName.prototype.truelength = function(){

// }

// console.log(myName.length);


let heroes = ['thor','spiderman']

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spiderman power is: ${this.spiderman}`);
    }

}

// if a value goes through object it can pass it through child element

// Object.prototype.Ash = function(){
//     console.log(`Ash is present in all object`);
// }

// Array.prototype.heyAsh = function(){
//     console.log(`Ash says hey!`);
// }



// console.log(heroPower.getSpiderPower());


// heroPower.Ash()
// // array
// heroes.Ash()

// heroes.heyAsh()
// heroPower.heyAsh()


// ++++++++++ Inheritance ++++++++++++

const User = {
    name: "Ash",
    email: "Ash@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherusername = "Ashutosh yadav     "

String.prototype.truelength = function(){
    
    console.log(`${this}`); // Ashutosh yadav
    console.log(`true length of name is: ${this.trim().length}`) // true length of name is: 14
    // console.log(`${this.name}`) // undefined => obsulite property not in use

}

console.log(anotherusername.truelength())

// now we wll see how this keyword is working

"icetea".truelength()
"coffee".truelength()