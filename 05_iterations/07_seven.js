const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})
// console.log(newNums);  // Output => [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// Chaining

const newNums = myNumers
    .map((num) => num * 10) // Multiply each number in 'myNumers' by 10.
    .map((num) => num + 1)  // Add 1 to each number from the previous map operation.
    .filter((num) => num >= 40); // Filter the resulting array, keeping only numbers greater than or equal to 40.

console.log(newNums);  // Output => [41, 51, 61, 71, 81, 91, 101]

/*
- map():
    - Purpose: Transforms each element of an array.
    - Result: Creates a new array with the transformed elements.
    - Output size: Output array is the same length as the input array.
- filter():
    - Purpose: Selects elements from an array based on a condition.
    - Result: Creates a new array containing only the elements that pass the test.
    - Output size: Output array can be shorter than the input array.
*/
