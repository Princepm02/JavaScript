// for of - It returns value in array
// for in - It returns index of array

// ["", "", ""]
// [{}, {}, {}]

const arr = [15, 25, 35, 45, 55]

// for of
for (const num of arr) {
    console.log(num);
}
/*
Output => 15
          25
          35
          45
          55
*/

// for in
for (const num in arr) {
    console.log(num);
}
/*
Output => 0
          1
          2
          3
          4
*/

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)  // It will print each character in "Hello world!"
}



/*
- Maps => The Map object holds key-value pairs and remembers the original insertion order of the keys.
          Any value (both objects and primitive values) may be used as either a key or a value.
*/

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")  // Map store unique values, so this will be ignored

// console.log(map);  // Output => {'IN' => 'India', 'USA' => 'United States of America', 'Fr' => 'France'}



for (const [key, value] of map) {
    console.log(key, ':-', value);
}
/*
Output => IN :- India
          USA :- United States of America
          Fr :- France

*/


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

// It will give you error "myObject is not iterable", soon we will learn that how to iterate a object.
