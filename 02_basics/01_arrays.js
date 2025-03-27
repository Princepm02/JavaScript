// array
/*
- Arrays are objects: They're not basic data types, but special objects.
- Flexible: They can grow or shrink, and hold different types of data (numbers, text, etc.).
- Numbered positions: You access items by their position (0, 1, 2...), not by names.
- Start at zero: The first item is at position 0.
- Shallow copies: Copying an array creates a new array, but the elements within the new array 
                  still refer to the same original objects in memory. This means that if you modify an object within the copied array, 
                  the original array will also be affected.
*/

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);  // Output => 1

// Array methods

// push() ->  adds the specified elements to the end of an array and returns the new length of the array.
// myArr.push(6)
// myArr.push(7)
// console.log(myArr)  // Output => [0, 1, 2, 3, 4, 5, 6, 7]

// pop() ->  removes the last element from an array and returns that element. This method changes the length of the array.
// myArr.pop()
// console.log(myArr)  // Output => [0, 1, 2, 3, 4, 5, 6]
// myArr.pop()


// unshift() -> adds the specified elements to the beginning of an array and returns the new length of the array.
myArr.unshift(9, 8)
console.log(myArr)  // Output => [9, 8, 0, 1, 2, 3, 4, 5]

// shift() ->  removes the first element from an array and returns that removed element. This method changes the length of the array.
myArr.shift()  // Output => 9
console.log(myArr)  // Output => [8, 0, 1, 2, 3, 4, 5]
myArr.shift()  // Output => 8

console.log(myArr.includes(9));  // Output => false
console.log(myArr.indexOf(3));  // Output => 3


/*
join() -> It creates and returns a new string by concatenating all of the elements in this array, 
          separated by commas or a specified separator string. If the array has only one item, 
          then that item will be returned without using the separator.

const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// Output: "Fire,Air,Water"

console.log(elements.join(""));
// Output: "FireAirWater"

console.log(elements.join("-"));
// Output: "Fire-Air-Water"

*/


// const newArr = myArr.join()

// console.log(myArr);  // Output => [0, 1, 2, 3, 4, 5]
// console.log(newArr);  // Output => 0,1,2,3,4,5
// console.log(typeof newArr)  // Output => string


// slice, splice
/*
Difference between slice() and splice()

- slice(): What it does: Creates a copy of a portion of an array.
    - Original array: Unchanged.
    - Creates a new array.
    - Extracts a portion of the original array without modifying it.
    - Takes start and end indices.
    
    Example:
    let fruits = ["apple", "banana", "orange", "grape"];
    let slicedFruits = fruits.slice(1, 3); // Copy from index 1 to (but not including) 3
    console.log(slicedFruits); // Output: ["banana", "orange"]
    console.log(fruits); // Output: ["apple", "banana", "orange", "grape"] (original unchanged)



- splice(): What it does: Changes the original array by adding or removing elements.
    - Original array: Modified.
    - Modifies the original array.
    - Adds or removes elements from the array.
    - Takes start index, delete count, and optional new elements.
    
    Example:
    let fruits = ["apple", "banana", "orange", "grape"];
    let removedFruits = fruits.splice(1, 2, "kiwi", "mango"); // Remove 2 from index 1, add "kiwi" and "mango"
    console.log(removedFruits); // Output: ["banana", "orange"] (removed elements)
    console.log(fruits); // Output: ["apple", "kiwi", "mango", "grape"] (original changed)
*/

console.log("A ", myArr);  // Output => A [0, 1, 2, 3, 4, 5]

const myn1 = myArr.slice(1, 3)

console.log(myn1);  // Output => [1, 2]
console.log("B ", myArr);  // Output => B [0, 1, 2, 3, 4, 5]


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);  // Output => C [0, 4, 5]
console.log(myn2);  // Output => [1, 2, 3]
