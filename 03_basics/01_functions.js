
function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("I");
    console.log("N");
    console.log("C");
    console.log("E");
}

// sayMyName()
/* Output:  P
            R
            I
            N
            C
            E
*/
// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
const result2 = addTwoNumbers(3, "4")

// console.log("Result: ", result);  // Output => 8
// console.log("Result2: ", result2);  // Output => 34

/*
function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("Prince"))  // Output => Prince just logged in
console.log(loginUserMessage(""))  // Output =>  just logged in
console.log(loginUserMessage())  // Output => undefined just logged in
*/


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Prince"))  // Output => Prince just logged in
// console.log(loginUserMessage())  // Output => sam just logged in

// Problem
// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500, 2000))  // Output => 200 (It will just store 200 and rest will be ignored.)

// function calculateCartPrice(...num1){  //(Here ... are called rest operator (not spread operator), to store all numbers in array. It is dynamic in nature)
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500, 2000))  // Output => [200, 400, 500, 2000]

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000))  // Output => [500, 2000] (200 and 400 are stored in val1 and val2)

const user = {
    username: "prince",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)  
// // Output => Username is prince and price is undefined (Here we are accessing data for "anyobject.price" but in user object we have defined price's'. So 's' is missing from "anyobject.price")
handleObject({
    username: "sam",
    price: 399
})
// Output => Username is sam and price is 399


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));  // Output => 400
console.log(returnSecondValue([200, 600, 800, 1000]));  // Output => 600
