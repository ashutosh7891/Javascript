// learning global scope and block scope

let a  = 300 // global scope

if (true) {
    let a  = 30
    const b = 400 // block scope value will be used within 
    console.log("Print a :" , a);
}

console.log(a);
