// for each loop basics of higher order loop

const coding = ["js" , "rb" , 'py' , 'cpp']

// coding.forEach((item)=> {
//     console.log(item);
// })

// another way

// const printMe = (item) => {
//     console.log(item);
// }

// coding.forEach(printMe)


// coding.forEach((item,index,arr)=>console.log(item,index,arr))

// how to use forEach() inside array inside object [{},{},{}]


const myCoding = [
    {
        lang: "javascript",
        file: "JS"
    },
    {
        lang: "java",
        file: "java"
    },
    {
        lang: "python",
        file: "py"
    }

]

myCoding.forEach((item)=>{
        console.log(`the language name is: ${item.lang} and language file name is: ${item.file}`);  

    
})

// Answer

/* 
the language name is: javascript and language file name is: JS
the language name is: java and language file name is: java
the language name is: python and language file name is: py

*/

