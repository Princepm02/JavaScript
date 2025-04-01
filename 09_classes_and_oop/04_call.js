function SetUsername_1(username) {
    // Imagine complex database calls retrieving the user's name, which is subsequently stored in this.username
    this.username = username
    console.log("called");
}

function createUser_1(username, email, password) {
    SetUsername_1(username)

    this.email = email
    this.password = password
}

const newUser_1 = new createUser_1("Rajesh", "rajesh@mail.com", "567")
console.log(newUser_1);
/*
Output => called
          createUser_1 {email: 'rajesh@mail.com', password: '567'}
       
- The issue is with how 'this' is used in the function call. When you call SetUsername_1(username) inside createUser_1 
  without binding it to an object, 'this' inside SetUsername_1 does not refer to the new user object (newUser_1).

- In non-strict mode, when a regular function is called, the value of this inside that function defaults to 
  the global object (e.g., window in a browser, or global in Node.js) or is undefined (in strict mode).

- Therefore, this.username = username ends up adding a username property to the global object, not to the newUser_1 object.

- To fix this, you need to ensure that this inside SetUsername_1 refers to the same object as this inside createUser_1. 
  You can do this by using the call or apply methods.
*/


function SetUsername_2(username) {
    // Imagine complex database calls retrieving the user's name, which is subsequently stored in this.username
    this.username = username
    console.log("called");
}

function createUser_2(username, email, password) {
    SetUsername_2.call(this, username)

    this.email = email
    this.password = password
}

const newUser_2 = new createUser_2("prince", "prince@mail.com", "123")
console.log(newUser_2);
/*
Output =>called
         createUser_2 {username: 'prince', email: 'prince@mail.com', password: '123'}
*/
