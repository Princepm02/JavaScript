function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2
/*
In JavaScript, functions are also objects. This line adds a property named
power to the multipleBy5 function object and assigns it the value 2.
*/

console.log(multipleBy5(5));  // Output => 25
console.log(multipleBy5.power);  // Output => 2
console.log(multipleBy5.prototype);  // Output => {}
/*
- Every function in JavaScript has a prototype property. 
  The prototype property is an object that is used when the function
  is used as a constructor with the new keyword.

- If a function is not explicitly used as a constructor,
  the prototype property defaults to an empty object {}.

- Since the function multipleBy5 is not being used as a constructor
  in this example, multipleBy5.prototype remains an empty object,
  so {} is printed to the console.
*/

function createUser(username, price){
    this.username = username
    this.price = price
}

createUser.prototype.increment = function(){
    this.price++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.price}`);
}

const tea = new createUser("Tea", 25)
const coffee = createUser("Coffee", 250)

tea.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
