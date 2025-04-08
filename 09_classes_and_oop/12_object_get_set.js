// Before the class keyword was introduced in JavaScript, the same task as in 10_getter_setter.js was often accomplished in this way using object.
const User = {
    _email: 'p@pm.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const person = Object.create(User)
console.log(person.email);  // Output => P@PM.COM
