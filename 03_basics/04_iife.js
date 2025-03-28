/*
- Immediately Invoked Function Expressions (IIFE)
    - Purpose: Executes a function immediately after it's defined.
    - Use: Creates a private scope, preventing variable conflicts with the global scope.
    - Syntax: (function() { Write your code here })();
    - Benefit: Keeps variables inside the function, "avoiding pollution" of the global namespace.

*/

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();  // Output => DB CONNECTED (Always give ';' after IFFE)


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Prince');  // Output => DB CONNECTED TWO Prince
