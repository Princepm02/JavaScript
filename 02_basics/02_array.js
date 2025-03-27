const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)  // This pushes the whole array(dc_heros) as a single element at index 3 in marvel_heros array.

// console.log(marvel_heros);  //Output => ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]] (Array inside array problem)
// console.log(marvel_heros[3][1]);  //Output => flash

// concat()
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);  //Output => ['thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman']


// spread syntax (...) 
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);  //Output => ['thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman']

/*
- concat() vs spread syntax (...) 
    - Both approaches are valid and produce the same outcome.
    - concat() is an older method that is still perfectly valid.
    - The spread syntax (...) is a more modern and generally preferred approach due to its flexibility, conciseness, and potential performance benefits.
    - Example of added flexibility of the spread operator:

    const marvel_heros = ["thor", "Ironman", "spiderman"];
    const dc_heros = ["superman", "flash", "batman"];
    const all_new_heros = [...marvel_heros, "wolverine", ...dc_heros, "Aquaman"];
    console.log(all_new_heros);
    //output: [ 'thor', 'Ironman', 'spiderman', 'wolverine', 'superman', 'flash', 'batman', 'Aquaman' ]
*/


// flat() -> creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
/*
const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr2.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]
*/
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);  //Output => [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]



console.log(Array.isArray("Prince"))  //Output => false
console.log(Array.from("Prince"))  //Output => ['P', 'r', 'i', 'n', 'c', 'e']
console.log(Array.from({ name: "Prince" })) // interesting (It return empty array [])
//  because Array.from() expects either an array-like object or an iterable object as its first argument
/*
To solve this :
- If you wanted to create an array from the values of the object, you could do the following:

    const obj = { name: "Prince", age: 23, mail: "prince@mail.com" };
    const array = Object.values(obj);
    console.log(array);  //Output => ['Prince', 23, 'prince@mail.com']

- Or if you wanted the keys:

    const obj = { name: "Prince", age: 23, mail: "prince@mail.com" };
    const array = Object.keys(obj);
    console.log(array);  //Output => ['name', 'age', 'mail']
*/


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  //Output => [100, 200, 300]
