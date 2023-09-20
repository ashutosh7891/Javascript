// // everthing is hapening after ES6

// class user {
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password

        
//     }
//     encryptPassword(){
//            return `${this.password} has been saved` 
//     }

//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const callingUser = new user("A.yadav",'Ashu@gmail.com','abc134@')

// console.log(callingUser.encryptPassword())
// console.log(callingUser.changeUserName());


// behind the scene

function user(username,email,password){
        this.username = username
        this.email = email
        this.password = password
}



user.prototype.passwordEncrypted = function(){
    return `${this.password} has been saved in our database`
}


const call = new user('Ashu','ashu@gmail.com','123abx@');
console.log(call);