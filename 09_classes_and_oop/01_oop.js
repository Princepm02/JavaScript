const user = {
    username: "prince",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");  // Output => Got user details from database
        // console.log(`Username: ${this.username}`);  // Output => Username: prince
        console.log(this);  // Output => {username: 'prince', loginCount: 8, signedIn: true, getUserDetails: ƒ}
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);  // It will print empty object {}, in Node.js but in browser it will print window object.


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("prince", 12, true)
const userTwo = new User("sam", 11, false)
//console.log(userOne);  // If you don't give 'new' keyword in line 34 & 35, then value of userOne will be overwritten by userTwo.
console.log(userOne.constructor);
//console.log(userTwo);
