const { loadConfigFromFile } = require("vite")

const marvelHeroes = ["Ironman" , "Thor" , "Spider-man"]
const DC = ["Superman" , "Flash" , "batman"]

// marvelHeroes.push(DC)
console.log((marvelHeroes)); // => [ 'Ironman', 'Thor', 'Spider-man', [ 'Superman', 'Flash', 'batman' ] ]
console.log((marvelHeroes[3][1])); // => [ 'Superman', 'Flash', 'batman' ]


// concat method => 

// printing all heroes

// const concat = marvelHeroes.concat(DC);
console.log(concat);  // [ 'Ironman', 'Thor', 'Spider-man', 'Superman', 'Flash', 'batman' ]


// spread operator =>

const all_new_heroes = [...marvelHeroes  , ...DC]
console.log(all_new_heroes); //  [ 'Ironman', 'Thor', 'Spider-man', 'Superman', 'Flash', 'batman' ]


// flat method => use to concatinate array into one array

another_array = [1,2,3,[4,5] , 6 , [7,8,[6,[7],9]]]

const real_array = another_array.flat(Infinity) // pass thorough parameter that at what level you want to remove the brackets => 2,3,4 or maybe infinity can be used here
console.log(real_array);

// if you want to covert string  or any other dataytype  to array sometimes when you datascrap from other website the list will come in node or object format

console.log(Array.isArray("Ashutosh"))// => false
console.log(Array.from("Ashutosh")); // ["A" , "s" , "h" , "u" , "t" , "o" , "s" , "h" ]

const a = {
    name : "Ashutosh" , 
    age : 69
}

console.log(a); // { name: 'Ashutosh', age: 69 }
console.log(Array.from(a)); // intersting one it is giving [] array


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 , score3)); // [ 100, 200, 300 ]