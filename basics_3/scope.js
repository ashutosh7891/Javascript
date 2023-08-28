// learning global scope and block scope

let a  = 300 // global scope

if (true) {
    let a  = 30
    const b = 400 // block scope value will be used within 
    // console.log("Print a :" , a);
}

// console.log(a);


// nested functions

function one () {

    const name = "Ashutosh"

    function two () {
        
        const website = "https://www.google.com"
        // console.log(name);


    }
    // two()
    // console.log(website);

   



}
// one()

// using scope in if-else =>

if (true) {
    const name = "Ashutosh"

    if (true) {

        const website = "https://www.google.com"
        // console.log(name ,  website); // Ashutosh https://www.google.com => getting value from parent node 
        
    }

    //  console.log(website); // => error => out of scope
    
}

//  console.log(name); // errpr => out of scope


// ++++++++++++++++++++ INTERESTING +++++++++++++++++++++++

(add(5)) // no error 
function add(num) {

    return num +1;

}

two(6) // ReferenceError: Cannot access 'two' before initialization => because we are storing this inside of variable
const two = function (num) {
    return num + 2
}




