// ES6

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword() {
        return `${this.password}abc`
    }
    changeUsername() {
        return `${this.username.toUpperCase()}`
    }

}

const person_1 = new User("prince", "prince@gmail.com", "123")

console.log(person_1.encryptPassword());  // Output => 123abc
console.log(person_1.changeUsername());  // Output => PRINCE

// behind the scene

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`
}
User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}


const person_2 = new User("mishra", "mishra@gmail.com", "123")

console.log(person_2.encryptPassword());  // Output => 123abc
console.log(person_2.changeUsername());  // Output => MISHRA
