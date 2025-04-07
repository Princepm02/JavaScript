/*
class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }

    get email() {
        return this.email.toUpperCase()
    }
    set email(value) {
        this.email = value
    }

    get password() {
        return `${this.password}prince`
    }

    set password(value) {
        this.password = value
    }
}

const prince = new User("p@prince.ai", "abc")
console.log(prince.email);


 "Maximum call stack size exceeded" or "Stackoverflow error" problem arises in the 
 provided code due to infinite recursion within the getter methods.

1. When you access prince.email, this get email() method is called.
2. Inside the getter, this.email is accessed again. This access 
    re-triggers the same get email() method.
3. This creates an infinite loop of the get email() method calling 
    itself repeatedly. Each call adds a new frame to the call stack.
4. Eventually, the call stack exceeds its maximum allowed size, leading 
    to the "Maximum call stack size exceeded" or "Stackoverflow error".

To resolve this, you need to use a different name for the actual 
properties that store the email and password values within the class. 
A common convention is to prefix them with an underscore:
*/
class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }

    get password() {
        return `${this._password}prince`.toUpperCase()
    }

    set password(value) {
        this._password = value
    }
}

const prince = new User("p@prince.ai", "abc")
console.log(prince.email);  // Output => P@PRINCE.AI
console.log(prince.password);  // Output => ABCPRINCE
