// while loop 

let index = 0
while (index  <= 10) {
    console.log(`the value is ${index}`);
    index  = index + 2
}

// the value is 0
// the value is 2
// the value is 4
// the value is 6
// the value is 8
// the value is 10

let myArray = ['superman' , 'batman' , 'flash' , 'ironman']
let arr = 0

while (arr < myArray.length) {
    console.log(`array is :  ${myArray[arr]}`);
    arr++
    
}

// do while loop

let score = 1

do {
    if (score == 2) {
        console.log(`your favorite score value is printed: ${score}`);
        score++
    }else{
        console.log(`score is: ${score}`);
        score ++
    }
    
} while (score <= 10);