const promiseOne = new Promise((resolve , reject) => {

    // DB calls
    // network handelling
    // any cryptography work

    setTimeout(() => {
        console.log('Async task is completed')
        resolve()
        
    },13000)

})

const promiseConsumed = promiseOne.then(()=> {
    console.log('promise is consumed')
    
}) 


// other way of doing this

new Promise((resolve , reject)=>{
    
    setTimeout(()=>{
        console.log('async2 is done')
        resolve()
    },11000)
    
}).then(()=>{
    console.log('Async 2 resolved')

})

// 3rd promise getting data from object

const promiseThree = new Promise((resolve , reject) => {
    setTimeout(() => {
        resolve({username : "Ashutoshyadav" , email : "ashutoshyadav6969@gmail.com"}) // mainly there will be data to be given where the promise will consume  
    },9000)
})

promiseThree.then((user) => {
console.log(user)

})

// other way

const  promiseFour = new Promise((resolve , reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username:"ashutosh",age:24,email:"ashutoshyadav6969@gmail.com"}) // getting data from DB
            
        }else{
            reject('ERROR: something went wrong')
        }
    } , 7000)
})

// promiseFour
.then((user)=>{
    console.log(user)
    return user.username
})
.then((username)=>{
    console.log(username)

})
.catch((error)=>{
    console.log(error)
})
.finally(()=> console.log('Finally  either the promise has been resolved or rejected!'))

// other way => async await same as above but using async await rather using then or catch

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({course:"Javascript", password:123}) // getting data from DB
            
        }else{
            reject('ERROR: JS went wrong')
        }
    } , 5000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response.course);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// getting bunch of users from a JSON file using async await

// async function getAllusers() {
//     try {
//         const response = await fetch('https://randomuser.me/api/')
//         // console.log(response);

//         const data = await response.json()
//         console.log(data);

//     } catch (error) {
//         console.log('E: ' , error);
//     }

// }
// getAllusers()

// if you want to the same above in then , catch way


 



fetch('https://randomuser.me/api/')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error);
})



