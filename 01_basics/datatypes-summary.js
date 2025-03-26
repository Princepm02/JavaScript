/*
JavaScript is Dynamically typed language.
- Dynamic Typing:
    - In dynamically typed languages, the type of a variable is checked during runtime, not during compile time.   
    - This means you don't have to explicitly declare the data type of a variable when you create it.   
    - The same variable can hold different data types throughout the execution of the program.
*/

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null  // typeof outsideTemp is Object, as null is a object
let userEmail;      // value of userEmail is undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);  // (Output => false) Even you assign same value to id & anotherId it is considered as different.

// const bigNumber = 3456543576654356754n  // Always write 'n' after number



// Reference (Non primitive)

// Array, Objects, Functions

// const id = Symbol('123')
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "prince",
    age: 22,
    [id] : "165"  // If you want to print id as symbol, then you have to enclose it into []
}

console.log(myObj);

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
