 class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){ // 'static' keyword revoke the user from making changes 
        return `123`
    }
 }


 class teacher extends user{
    constructor(username,email){

        super(username)
        this.email = email
    }

    addCourseId(){
        return `the course Id is ${this.createId()}`
    }
 }

//  const ashu = new user('Ashutosh')
//  console.log(ashu.createId())

 const teaching = new teacher('ash','teacher@gmail.com')

 console.log(teaching.logMe())