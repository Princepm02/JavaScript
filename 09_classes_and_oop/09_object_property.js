const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);
/*
Output => {
            value: 3.141592653589793, 
            writable: false, 
            enumerable: false, 
            configurable: false
          }

You can't change the above property ->
- writable: false: This indicates that the value of the PI property cannot be changed through normal assignment.
- configurable: false: This indicates that the property descriptor itself cannot be modified (you can't change writable to true, for example),
  and the property cannot be deleted from the Math object.

These attributes are set by the JavaScript engine to ensure the integrity and immutability of the built-in mathematical constant Math.PI.
Any attempt to assign a new value to Math.PI will either be ignored in non-strict mode or throw a TypeError in strict mode.
*/

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI); // You cannot overwrite the value of Math.PI as writable property is false

const item = {
    name: 'Juice',
    price: 250,
    isAvailable: true,

    orderItem: function(){
        console.log("The juice is not prepared");
    }
}

console.log(Object.getOwnPropertyDescriptor(item));  // Output => undefined (Because you have to give property name for descriptor)
console.log(Object.getOwnPropertyDescriptor(item, "name"));
/*
Output => {
            value: 'Juice', 
            writable: true, 
            enumerable: true, 
            configurable: true
          }
*/


Object.defineProperty(item, 'name', {
    writable: false,
    enumerable: false,  
})
/*
A property with "enumerable: false" means that this property will not be 
included when you iterate over the object's properties using methods like:
- for...in loops (unless it's in the prototype chain)
- Object.keys()
- JSON.stringify()
It essentially makes the property "hidden" from standard enumeration processes.
*/

console.log(Object.getOwnPropertyDescriptor(item, "name"));
// Output => {value: 'Juice', writable: false, enumerable: false, configurable: true}

for (let [key, value] of Object.entries(item)) {
    if (typeof value !== 'function') {  // To filter out properties whose values are functions
        
        console.log(`${key} : ${value}`);
    }
}
/*
Output => price : 250
          isAvailable : true
          // name is not printed as for name enumerable: false. Therefore, the for...of loop
          // does not iterate over the name property, and it is not printed to the console.
*/
