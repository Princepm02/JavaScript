class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createId() {
        return `123`
    }
}

const person = new User("prince")
// console.log(person.createId()) // TypeError: person.createId is not a function
/*
- You are trying to call the static method createId() on the 'person' object,
  which is an instance of the User class. Static methods are called directly on the class itself, not on its instances.

- To correctly call the createId() method, you need to access it through the User class itself:

console.log(User.createId()) // Correct way to call the static method
// Output => 123
*/

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
// console.log(iphone.createId());  // TypeError: iphone.createId is not a function
console.log(Teacher.createId()); // Correct way to call the static method
// Output => 123
