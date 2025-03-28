// if
const isUserloggedIn = true
const temperature = 41

if ( temperature === 40 ){
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}
Output => temperature is greater than 50


// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);  // Output => User power: fly
// }

// console.log(`User power: ${power}`);  // Error as power is out of scope

// Shorthand code for scope where we are not using {}
const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2"); // Here we use comma to write multiple line, but this is not a good practice.
/* Output => test
             test2
*/


if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 750");
    
} else {
    console.log("less than 1200");

}

// Output => less than 1200

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

/* Output => User logged in
             Allow to buy course
*/
