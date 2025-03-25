let score = "33"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber); // if you give score = "33abc" then also it will return that it is a Number.
//console.log(valueInNumber);   // But this will print NaN (Not a Number)

// If you give score = null ....then after
// let valueInNumber = Number(score) will return 0

// If you give score = undefined ....then after,
// let valueInNumber = Number(score) will return NaN

// if score values are following then, valueInNumber will return:-
// "33" => 33
// "33abc" => NaN
// "prince" => NaN
//  true => 1; false => 0

let isLoggedIn = "prince"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// if isLoggedIn values are following:-
// 1 => true; 0 => false
// "" => false
// "prince" => true



let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " prince"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);  // Output => 12
// console.log(1 + "2");  // Output => 12
// console.log("1" + 2 + 2);  // Output => 122
// console.log(1 + 2 + "2");  // Output => 32

// console.log( (3 + 4) * 5 % 3);  // Output => 2

// console.log(+true);  // Output => 1
// console.log(true++); OR console.log(++true);  // Gives syntax error
// console.log(+"");  // Output => 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2  // It assigns value 4 to all variables

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
