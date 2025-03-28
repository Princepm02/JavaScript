// forEach - is high order function.

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// same as above but in form of arrow function
// coding.forEach( (item) => {
//     console.log(item);
// } )

/*
Output => js
          ruby
          java
          python
          cpp
*/

// does the same work as above
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)  // Remember here we give refrence of function (printMe). You should not write printMe().


coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )
/*
Output => js 0 ['js', 'ruby', 'java', 'python', 'cpp']
          ruby 1 ['js', 'ruby', 'java', 'python', 'cpp']
          java 2 ['js', 'ruby', 'java', 'python', 'cpp']
          python 3 ['js', 'ruby', 'java', 'python', 'cpp']
          cpp 4 ['js', 'ruby', 'java', 'python', 'cpp']
*/

// Here we are accessing objects which are declared inside array, using forEach.
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )

/*
Output => javascript
          java
          python
*/
