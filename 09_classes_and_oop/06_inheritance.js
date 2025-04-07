class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const teacherUser = new Teacher("rahul", "rahul@teacher.com", "123")
teacherUser.logMe()  // Output => USERNAME is rahul

const person = new User("Prince")
person.logMe()  // Output => USERNAME is Prince

teacherUser.addCourse()  // Output => A new course was added by rahul

console.log(teacherUser instanceof Teacher);  // Output => true
console.log(teacherUser instanceof User);  // Output => true
