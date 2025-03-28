const user = {
    username: "prince",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);  // This will show complete user object, including its username, price, and the welcomeMessage function itself
    }

}
user.welcomeMessage()
/* Output => prince , welcome to website
             { username: 'prince', price: 999, welcomeMessage: [Function: welcomeMessage] }
 */

// user.username = "sam"
// user.welcomeMessage()
/* Output => sam , welcome to website
             { username: 'sam', price: 999, welcomeMessage: [Function: welcomeMessage] }
 */


// The behavior of `this` in different environments:

console.log(this);

// In **Node.js** (outside a function/module):
// Output: {} (an empty object, because `this` in the global scope is not `global`)

// In **Browser** (outside a function/module):
// Output: Window {...} (because `this` in the global scope refers to `window`)



// function chai(){
//     let username = "prince"
//     console.log(this); // This will refer to global scope as discussed in line 25.
//     console.log(this.username);  // Output => undefined ('this' works in object but not in function. Moreover 'this' refers to global scope not this function)
// }

// chai()


// const chai = function () {
//     let username = "prince"
//     console.log(this.username);  // Output => undefined 
// }

// Arrow Function
const chai =  () => {
    let username = "prince"
    console.log(this); // This will refer to global scope as discussed in line 25.
}
// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2   // you have to write 'return' if you have give {} after arrow function =>
// }

// const addTwo = (num1, num2) =>  num1 + num2  // Does the same work as above but without return statement.

// const addTwo = (num1, num2) => ( num1 + num2 )  // Does the same work as above but without return statement.

const addTwo = (num1, num2) => ({username: "prince"}) // If you want to return an object then you have to enclose the object into {}


console.log(addTwo(3, 4))  // Output => {username: 'prince'}


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
