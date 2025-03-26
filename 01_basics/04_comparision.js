// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);  // Output => true
// console.log("02" > 1);  // Output => true


console.log(null > 0);  // Output => false
console.log(null == 0);  // Output => false
console.log(null === 0);  // Output => false
console.log(null >= 0);  // Output => true
/*
The reason is that an equality check == and comparisons > < >= <= works differently.
Comparisons convert null to a number, treating it as 0.
That's why (Line 15) null>=0 is true and (Line 12) null>0 is false.
*/

// Output for following is => false
console.log(undefined == 0);
console.log(undefined === 0);
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined >= 0);
console.log(undefined <= 0);

// '===' :- This operator checks strictly for data type. 

console.log("2" == 2);  // Output => true
console.log("2" === 2);  // Output => false
