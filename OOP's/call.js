function setUserName(username){
    // all the complex DB calls
    this.username = username
}


function createUser(username,email,password){

// getting username from setUserName
    // setUserName(username) // here we are setting a refrence here , we are not calling so for call we need to 
    setUserName.call(this,username) // for calling / executing => for current context we are giving this in first parameter

    this.email = email
    this.password = password
}


const callFunction = new createUser("Ashutosh",'ashu@fb.com','abc123')
console.log(callFunction);