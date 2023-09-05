// for loop

// array = [1,2,3,4,5,6,7,8,9,10,11]

// for (let i = 0; i < array.length; i++) {
//     let element = array[i];
//     if (element == 5) {
//         console.log("5 is best number");
//     }
    
//     console.log(element);
// }

// // for (let i = 0; i <=10; i++) {
//     console.log(`outer loop result: ${i}`);
//     for (let j = 0; j <=10; j++) {
//         // console.log(`inner loop result: ${j} and outer loop result: ${i} `);
//         console.log(`${i} * ${j} = ${i*j}`);

        
//     }
    

    
// }

let myArray = ["batman" , "superman" , "ironman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

// break and continue => 

// for (let index = 1; index <=20; index++) {

//     if (index == 5) {
//         console.log(`the best value ie being detected which is : ${index}`);
//         break;
//     }

//     console.log(`the values are : ${index}`);
    
// }

// continue => 


for (let index = 1; index <=20; index++) {

    if (index == 5) {
        console.log(`the best value ie being detected which is : ${index}`);
        continue;
    }

    console.log(`the values are : ${index}`);
    
}
array = [1,2,3,4,5]

for (let step = 0; step <= array.length; step++) {
    // Runs 5 times, with values of step 0 through 4.

    if (step % 2 == 0){
        console.log("this is even step");
    }else{
        console.log(`Walking east one step by ${step}`);
    }
    
  }

  // print a loop with 1 to 10 

  array = [1,2,3,4,5,6,7,8,9,10]

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);
    
//   }


//sum of 1 to 100

let sum = 0;

for (let i = 1; i <=100; i++) {
     sum += i
     console.log(`the sum of one to hundred is ${sum}`);
    
}

// print all even numbers

for (let i = 0; i <=20; i++) {

    if (i % 2 == 0) {
        console.log(`the even numbers are being printed ${i}`);
    }
    
}

// odd numbers

for (let i = 0; i <=20; i++) {

    if (i % 2 == 1) {
        console.log(`the odd numbers are being printed ${i}`);
    }
    
}

// //
// count = 10

// for (let i = 10; i >=1; i++) {
//     console.log(count);
    
// }


// multiplication table of 5

let count = 10

for (let i = 1; i <=10; i++){
    console.log(`${count} * ${i} = ${count * i}`);
}


