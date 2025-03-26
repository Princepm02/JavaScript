const myName = "prince"
const repoCount = 50

// console.log(myName + repoCount + " Value");

console.log(`Hello my name is ${myName} and my repo count is ${repoCount}`);

const gameName = new String('prince-pm-com')

// console.log(gameName[0]);  // Output => p
// console.log(gameName.__proto__);  // Output => It returns String.prototype object


// console.log(gameName.length);  // Output => 13
// console.log(gameName.toUpperCase());  // Output => PRINCE-PM-COM (It does not change original string, it returns the copy.)
console.log(gameName.charAt(2));  // Output => i
console.log(gameName.indexOf('n'));  // Output => 3

const newString = gameName.substring(0, 4)  // (It returns value from 0 to 3, 4 is excluded. Negative value is not allowed, even if you give negative no. it will start from 0 index.)
console.log(newString);  // Output => prin

const anotherString = gameName.slice(-10, 8)  // (Negative value is allowed.)
console.log(anotherString);  // Output => nce-p

/*
substring() and slice()
- Similarities:
    - Extraction:
        - Both methods extract a portion of a string and return it as a new string, without modifying the original string.
        - If the second argument (the end index) is omitted, both extract characters from the start index to the end of the string.
- Differences:
  - Handling Negative Indices:
    - slice():
        - Treats negative indices as counting from the end of the string.
        - For example, slice(-3) extracts the last three characters.
    - substring():
        - Treats negative indices as 0.
        - Any negative index is effectively replaced with 0.
  - Handling Start and End Index Order:
    - slice():
        - If the start index is greater than the end index, it returns an empty string.
    - substring():
        - If the start index is greater than the end index, it swaps the two indices.
*/

const newStringOne = "   prince    "
console.log(newStringOne);  // Output =>    prince    
console.log(newStringOne.trim());  // Output => prince (It removes whitespace from starting and end of string.)

const url = "https://prince.com/prince%20mishra"

console.log(url.replace('%20', '-'))  // Output => https://prince.com/prince-mishra

console.log(url.includes('pandey'))  // Output => false

console.log(gameName.split('-'));  // Output => ['prince', 'pm', 'com']
