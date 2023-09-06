// for in loop

const myObject = {
    js : "javascript",
    py : "python",
    cpp : "c++",
    swift : "swift by apple.inc",
    rb : "ruby on rails"
}

for (const key in myObject) {
    // console.log(`${key} => ${myObject[key]}`); 
    
        
    }

// answer

/*
js => javascript
py => python
cpp => c++
swift => swift by apple.inc
rb => ruby on rails
*/


// can we use for in loop in arrays

const arr = [1,2,3,4,5,6]

for (const key in arr) {
    
        // console.log(key);
    }


const map = new Map()
map.set('IN' , 'India') // it will not take two same inputs 
// map.set('IN' , 'India')
// map.set('IN' , 'India')
map.set('USA' , 'Unites states of america')
map.set('Fr' , 'France')


// YOU CAN'T ITERATE ON MAP() IN 'forin' loop

// for (const [key,value] in map) { 
//    console.log(key,value);
// }