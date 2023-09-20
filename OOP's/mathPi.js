const descriptor = Object.getOwnPropertyDescriptor(Math,'PI')
// console.log(descriptor);


// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)

const tea = {
    name: 'ginger-tea',
    price: 250,
    isAvailable: true,
    makeTea: ()=>{
        console.log('chai nahi bnni!');
    }
}



// how can you change your properties

// Object.defineProperty(tea,'name',{
//     writable: false,
//     value: 'normal-milk-tea',
//     configurable: true
// })

console.log(Object.getOwnPropertyDescriptor(tea,"name"));

for (const [key,value] of Object.entries(tea)) {

    if (typeof value!== 'function'){
        console.log(`${key} : ${value}`);
    }

    
}
