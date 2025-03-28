const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
/*
Output => js shortcut is for javascript
          cpp shortcut is for C++
          rb shortcut is for ruby
          swift shortcut is for swift by apple
*/

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(`index = ${key}, Value = ${programming[key]}`);
}
/*
Output => index = 0, Value = js
          index = 1, Value = rb
          index = 2, Value = py
          index = 3, Value = java
          index = 4, Value = cpp
*/

/*
- Map is not designed to be iterated using for...in
- Map objects are iterable using methods like forEach(), for...of,
  or by getting iterators through map.keys(), map.values(), or map.entries().
*/

// So the following code will not work. In 03_three.js we have iterated over map using for of loop.

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }
