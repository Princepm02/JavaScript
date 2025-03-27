// singleton
/*
A singleton object in JavaScript is an object that can only be instantiated (created) once.
It ensures that only one instance of the object exists throughout the application's lifecycle.
Short Example (using an object literal):

const mySingleton = {
  data: "Hello",
  getData: function() {
    return this.data;
  },
  setData: function(newData) {
    this.data = newData;
  }
};

console.log(mySingleton.getData()); // Output: Hello

mySingleton.setData("World");

console.log(mySingleton.getData()); // Output: World

In this example, 'mySingleton' is the only instance of the object. Any access to it will always be to the same object.

Key point: It's not created with a constructor function and 'new'. It's just a single object literal.

*/
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Prince",
    "full name": "Prince Mishra",
    [mySym]: "mykey1",  // to make the typeof mySym as symbol, enclose it into []
    age: 22,
    location: "India",
    email: "prince@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)  // Output => prince@google.com
// console.log(JsUser["email"])  // Output => prince@google.com
// console.log(JsUser["full name"])  // Output => Prince Mishra (Here you cannot use JsUser."full name", It gives you error)
// console.log(JsUser[mySym])  // Output => mykey1
// console.log(JsUser)  // In output mySym is treated as symbol


/*
Object.freeze() -> It prevents any modifications to an object. In short:
    - It makes an object's properties read-only.
    - You can't add, remove, or change the values of its properties.
    - It's a shallow freeze, meaning nested objects can still be modified.
    - For Example:
    const obj = {
    nested: {
        prop: "initialValue"
    }
    };

    Object.freeze(obj);

    // Attempt to modify the top-level property (ignored)
    obj.nested = { prop: "newValue" };
    console.log(obj.nested); // Output: { prop: "initialValue" } (unchanged)

    // Modify a property of the nested object (allowed)
    obj.nested.prop = "modifiedValue";
    console.log(obj.nested); // Output: { prop: "modifiedValue" } (changed)
*/

JsUser.email = "prince@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "prince@microsoft.com"
// console.log(JsUser);  // JsUser.email is not updated due to Object.freeze()

JsUser.greeting = function(){
    return "Hello JS user";
}
JsUser.greetingTwo = function(){
    return `Hello JS user, ${this.name}`;
}

console.log(JsUser.greeting());  // Output => Hello JS user
console.log(JsUser.greetingTwo());  // Output => Hello JS user, Prince
console.log(JsUser.greeting);  // It returns the reference of the function
