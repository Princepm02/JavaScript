
// In JavaScript, an empty array [] is considered a truthy value.
// Therefore, the if statement evaluates to true, and "Got user email" is printed.
// If userEmail were an empty string "", the if statement would evaluate to false, and "Don't have user email" would be printed.
const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// To check if array is empty
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }


// To check if object is empty
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

console.log(false == 0);  // Output => true
console.log(false == '');  // Output => true
console.log(0 == '');  // Output => true


// Nullish Coalescing Operator (??): null undefined

/*
The Nullish Coalescing Operator (??) is a logical operator that returns its right-hand side operand
when its left-hand side operand is null or undefined. Otherwise, it returns its left-hand side operand.
It's a way to provide a default value when a variable might be null or undefined.

- Here's how it relates to null and undefined:
    - null ?? value: If the left-hand side is null, it returns value.
    - undefined ?? value: If the left-hand side is undefined, it returns value.
    - anyOtherValue ?? value: If the left-hand side is any value other than null or undefined, it returns anyOtherValue.
*/

let val1;
// val1 = 5 ?? 10  // Output => val1 = 5
// val1 = null ?? 10  // Output => val1 = 10
// val1 = undefined ?? 15  // Output => val1 = 15

val1 = null ?? 10 ?? 20  // Output => val1 = 10
/*
- The expression is evaluated from left to right.
- null ?? 10: null is nullish, so it returns 10.
- Now the expression is 10 ?? 20.
- 10 is not nullish, so 10 is returned.
- Thus, val1 is assigned the value 10.
*/

console.log(val1);


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
// Output => more than 80
