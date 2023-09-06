// reduce

const myNumbers = [1,2,3]



// const totalSum= myNumbers.reduce((acc , currVal) => acc + currVal,0) 

// console.log(totalSum);


// example shoppingCart

const shoppingCart = [
    {
        itemName : "JScourse",
        price : 2999

    },
    {
        itemName : "mobileDev",
        price : 5999

    },
    {
        itemName : "DataScience",
        price : 12999

    }


]

const totalSum = shoppingCart.reduce((acc,item) => (acc + item.price),0)
console.log(`You have to pay: $${totalSum}`);
