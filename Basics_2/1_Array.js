// Arrays


const myArray = [1,2,3,4,5]
// console.log(myArray);

const heroes = ['ironman' , 'superman' , 'flash']
const heroes2 = new Array('ironman' , 'superman' , 'flash')
// console.log(heroes[2]); // getting the value thorough indexsation
// console.log(heroes2);



// ARRAY METHODS

// myArray.push(6)
// myArray.push(7,8) // => this will add an element in the end 0 to the current array 
// myArray.pop() // => it will remove the last element from the array 

//  myArray.unshift(9) // => what it will do is it will add element in the first of the array and shift other elements by one to right
//  myArray.shift() // => remove  first element in the array
// console.log(myArray.includes(9)); // => datatype - false it's a boolean
// console.log(myArray.indexOf(3));  // => it will tell the position of the element in array
// console.log(myArray);

const newArray = myArray.join() // => it has changed the typeof myArray to string
console.log(newArray);


// methods you will hear most of the time

// => slice , splice

console.log("A : " , myArray);

const myn1 = myArray.slice(1,3)
console.log("B : " , myArray );

const myn2 = myArray.splice(1,3) // => first arguement is index and second is from there first arguement how many elements you want to remove
console.log("C : " , myArray);

// learn more about splice 


// you can add also in splice

const fruits = ['Apple' , 'Mango' , 'Banana']

fruits.splice(1 , 1 ,  'peach' , 'oranges') // => also add elements
console.log(fruits);


