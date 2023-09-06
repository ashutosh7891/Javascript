// for of loop

// array specific loop

const arr = [{name : "Ashu" , age : "75"} , {name : "raja" , age : "69"} , {name : "shiva" , age : "45"}]

for (const value of arr) {

    // console.log(value.age);
    
}

const greeting = "hello world"

for (const greet of greeting) {

    if (greet === "" || greet === " " ){
        continue
        console.log("now you can continue with next letter");
        
    }else{
        // console.log(`Each character is ${greet}`);
    }

    
    
}


// MAPS

// maps are known for unique values 

const map  = new Map()

map.set('IN' , 'India') // it will not take two same inputs 
// map.set('IN' , 'India')
// map.set('IN' , 'India')
map.set('USA' , 'Unites states of america')
map.set('Fr' , 'France')

// console.log(map);

for (const [key , value] of map) { // we used destructuring in this case 

    console.log(key,':-',value); 
    
}

const arr = [{name : "Ashu" , age : "75"} , {name : "raja" , age : "69"} , {name : "shiva" , age : "45"}]
