/*
- var:
    - Scope: Function-scoped (or global if outside a function).
    - Redeclaration: Allowed.
    - Reassignment: Allowed.
    - Example:
        function exampleVar() {
        if (true) {
            var x = 10;
        }
        console.log(x); // 10 (accessible outside the 'if', which is a problem)
        }

- let:
    - Scope: Block-scoped.
    - Redeclaration: Not allowed.
    - Reassignment: Allowed.
    - Example:
        function exampleLet() {
        if (true) {
            let y = 20;
        }
        // console.log(y); // Error: y is not defined
        }

- const:
    - Scope: Block-scoped.
    - Redeclaration: Not allowed.
    - Reassignment: Not allowed (for primitive values; object properties can be modified).
    - Example:
        function exampleConst() {
        if (true) {
            const z = 30;
        }
        // console.log(z); // Error: z is not defined
        // z = 40; // Error: Assignment to constant variable.
        }

*/
let a = 200
const b = 150
var c = 300
if (true) {
    let a = 10
    const b = 20
    var c = 99
    console.log("INNER a: ", a);  // Output => INNER a:  10
    console.log("INNER b: ", b);  // Output => INNER b:  20
    console.log("INNER c: ", c);  // Output => INNER c:  99
}
console.log("OUTER a: ", a);  // Output => OUTER a:  200
console.log("OUTER b: ", b);  // Output => OUTER b:  150
console.log("OUTER c: ", c);  // Output => OUTER c:  99


function one(){
    const username = "prince"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // website is not accessible as it is out of scope.
    two()
}
one()  // Output => prince


if (true) {
    const username = "prince"
    if (username === "prince") {
        const website = " youtube"
        console.log(username + website);  // Output => prince youtube
    }
    // console.log(website); // website is not accessible as it is out of scope.
}

// console.log(username); // username is not accessible as it is out of scope.


// ++++++++++++++++++ Interesting ++++++++++++++++++

//  Two basic types of function declaration: function declarations and function expressions.


// Function Declarations

console.log(addone(5))
// In this example we are calling the function without declaring it, then also it is working fine.
function addone(num){
    return num + 1
}


// Function Expressions

addTwo(5)
// But here it gives error when you try to access function without declaring it.
const addTwo = function(num){
    return num + 2
}
