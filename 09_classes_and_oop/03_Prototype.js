let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.prince = function () {
    console.log(`prince is present in all objects`);
}

Array.prototype.heyPrince = function () {
    console.log(`Prince says hello`);
}

// heroPower.prince()  // Output => prince is present in all objects
// myHeros.prince()  // Output => prince is present in all objects (Same function is accessible in array, as we have added prince() in objects(Top in hierarchy))
// myHeros.heyPrince()  // Output => Prince says hello
// heroPower.heyPrince()  // Error as heyPrince() is defined in array so it is not accessible by anyone else.



// inheritance

const User = {
    name: "mishra",
    email: "mishra@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)




// let myName = "prince     "
// let mySurname = "mishra     "

// console.log(myName.length);  // Output => 11
// console.log(mySurname.length);  // Output => 11


let anotherUsername = "PrinceMishra     "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"prince     ".trueLength()
"mishra     ".trueLength()
/*
Output =>
    PrinceMishra     
    True length is: 12

    prince     
    True length is: 6
    
    mishra     
    True length is: 6
*/
