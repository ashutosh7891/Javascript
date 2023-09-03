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
