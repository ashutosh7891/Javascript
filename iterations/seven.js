const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// myNumbers.map((item)=>{
//     items = item + 10;
//     console.log(items);
// // })

// easy way =>

// myNumbers.map((num)=> num + 10)

//chaining 

const nums = myNumbers
            .map((number)=>  number * 10)
            .map((number)=> number+1)
            .filter((number)=> number > 90)
console.log(nums);