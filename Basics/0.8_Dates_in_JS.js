// dates

const getDate = new Date()
console.log(getDate.toString()) // Thu Aug 24 2023 16:26:41 GMT+0530 (India Standard Time)
console.log(getDate.toISOString()); // 2023-08-24T10:56:41.396Z
console.log(getDate.toJSON()); // Same as above
console.log(getDate.toLocaleDateString()); // 8/24/2023
console.log(getDate.toLocaleString); // [Function: toLocaleString]
console.log(getDate.getHours()); // 16
console.log(getDate.toUTCString()); // Thu, 24 Aug 2023 10:59:33 GMT
console.log(getDate.getTimezoneOffset()); // -330


// myCreatedDate = new Date('2023, 0 , 16')
// let myCreatedDate = new Date('2023-1-26')
let myCreatedDate   = new Date('01-23-2023') // standards followed in india
console.log(myCreatedDate.toLocaleString());


// interview question

// tell me the type of getDate

console.log(typeof getDate); // => object


let timeStamp = Date.now()

console.log(timeStamp);
console.log(myCreatedDate.getTime()); // to get time in milliseconds

console.log(Math.floor(Date.now()/1000)); // how to get time in seconds , interview question


console.log(`Time is ${Math.floor(Date.now())} this time`);


// Something intersting about LocaleString

timeStamp.toLocaleString('defalut' , {
    weekday : 'long', 
    timeZone : ''
})