class user {
    constructor(username){
        this.username = username

    }

    logMe(){
        console.log(`User name is ${this.username}`)
    }
}

class teacher extends user{
    constructor(username , email, password){
        super(username) // super keyword will go and find the relevant username it is asking and call
        this.email = email
        this.password = password

    }

    addCourses(){
        console.log(`new course was added by ${this.username}`)
    }
}

const call = new teacher('dr.Ashutosh','ashu@outlook.com','abc123@')
// console.log(call.addCourses())

const userAdd = new user('dr.Ashu')

// userAdd.addCourses()
call.logMe()
console.log(userAdd === teacher);

