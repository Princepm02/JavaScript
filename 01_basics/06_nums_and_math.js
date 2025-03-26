const score = 400
console.log(score);  // Output => 400 (400 is a number value.)

const balance = new Number(100)
console.log(balance);  // Output => [Number: 100] (It is a Number Object that contains the number value 100.)
// Number Objects are useful when you need to access properties or methods of the Number prototype (e.g., toFixed(), toPrecision()).


// console.log(balance.toString().length);  // Output => 3
// console.log(balance.toFixed(2));  // Output => 100.00
// console.log(balance.toFixed(2).length);  // Output => 6

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(5));  // Output => 123.90
// toPrecision() =>  it controls the total number of digits displayed(Range from 1 to 21), ensuring a certain level of precision.

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));  // Output => 10,00,000 (Indian number system)
// console.log(hundreds.toLocaleString());  // Output => 1,000,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);  // Output => Math Object
// console.log(Math.abs(-4));  // Output => 4
// console.log(Math.round(4.4));  // Output => 4
// console.log(Math.round(4.5));  // Output => 5
// console.log(Math.round(4.6));  // Output => 5
// console.log(Math.ceil(4.2));  // Output => 5
// console.log(Math.floor(4.9));  // Output => 4
// console.log(Math.min(4, 3, 6, 8));  // Output => 3
// console.log(Math.max(4, 3, 6, 8));  // Output => 8

console.log(Math.random());  // Output => 0.03976121498207541 (It will give random value between 0 to 1.)
console.log((Math.random()*10) + 1);  // Output => 8.6383226237487 (It will give random value between 1 to 10.)
console.log(Math.floor(Math.random()*10) + 1);  // Output => 7 (It will give natural random number between 1 to 10.)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  // Output => 16 (It will give natural random number between 10 to 20.)
