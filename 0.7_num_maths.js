const score = 69
// console.log(score);

const balace = new Number(100)

// console.log(balace)
// console.log(balace.toString()); // method => this log has been changed to string

// to fixed method , which whil be commonly used

/* 
The toFixed() method returns a string representation of numObj that does not use exponential notation and has exactly digits digits after the decimal place. 
The number is rounded if necessary, and the fractional 
part is padded with zeros if necessary so that it has the specified length.

*/

// console.log(balace.toFixed(2)) // the long number will be rounded

const otherNumber = 23.56
// console.log(otherNumber.toPrecision(4)); // it will give precise number near 

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // output => 1,000,000 converts to readable format mainly in US format
// indian way of output using 'en-IN'

// ++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-69))
// console.log(Math.round(4.565));
// console.log(Math.ceil(4.76));
// console.log(Math.floor(5.9));
// console.log(Math.sqrt(9))
// console.log(Math.sin(30));


// console.log(Math.floor((Math.random()*10) + 1)) // round of the number through => floor


// Important 

const min = 10
const max = 20

console.log(Math.floor((Math.random() * (max - min) + 1)) + min)


