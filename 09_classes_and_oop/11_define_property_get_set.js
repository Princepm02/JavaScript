// Before the class keyword was introduced in JavaScript, the same task as in 10_getter_setter.js was often accomplished in this way using function.
function User(email, password) {
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase()
        },
        set: function (value) {
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function () {
            return this._password.toUpperCase()
        },
        set: function (value) {
            this._password = value
        }
    })

}

const person = new User("prince@prince.com", "mishra")

console.log(person.email);  // Output => PRINCE@PRINCE.COM
