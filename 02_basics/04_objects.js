/*
- Singleton: One instance only, reused across the app.
    const singleton = {
        data: "one"
    }; // Always the same instance
    console.log(singleton === singleton); // true

- Non-Singleton: New instance every time.
    function createObject() {
        return { data: "new" };
    }

    const obj1 = createObject();
    const obj2 = createObject();

    console.log(obj1 === obj2); // false (Different instances)

*/

// const tinderUser = new Object() //Returns empty object
const tinderUser = {} //Returns empty object, both are same

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);  // Output => {id: '123abc', name: 'Sammy', isLoggedIn: false}

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "prince",
            lastname: "mishra"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);  // Output => prince

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// console.log(obj3);  // Output => {obj1: {1: 'a', 2: 'b'}, obj2: {3: 'a', 4: 'b'}}
// This is the similar problem we faced in array.push(), here nested objects are created inside objects.
// So we use below approach

// const obj3 = Object.assign({}, obj1, obj2, obj4) // '{}' under assign function ensure that objects are assigned into single object.
// console.log(obj3);  // Output => {1: 'a', 2: 'b', 3: 'a', 4: 'b', 5: 'a', 6: 'b'}

// spread syntax is better approach for above problem.
const obj3 = {...obj1, ...obj2}
console.log(obj3);  // Output => {1: 'a', 2: 'b', 3: 'a', 4: 'b', 5: 'a', 6: 'b'}


const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "b@gmail.com"
    },
    {
        id: 1,
        email: "c@gmail.com"
    },
]

console.log(users[1].email)  // Output => b@gmail.com

// tinderUser was declared on line 21

// console.log(tinderUser);  // Output => {id: '123abc', name: 'Sammy', isLoggedIn: false}

// console.log(Object.keys(tinderUser));  // Output => ['id', 'name', 'isLoggedIn']
// console.log(Object.values(tinderUser));  // Output => ['123abc', 'Sammy', false]
// console.log(Object.entries(tinderUser));  // Output => [['id', '123abc'], ['name', 'Sammy'], ['isLoggedIn', false]]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // Output => true


const course = {
    coursename: "js for jobs",
    price: "999",
    courseInstructor: "prince"
}

// console.log(course.courseInstructor)  // Output => prince

// This is the better approach instead of course.courseInstructor
const {courseInstructor: instructor} = course  // instructor is an alias(short alternative name given by user) for courseInstructor

// console.log(courseInstructor);  // Output => prince
console.log(instructor);  // Output => prince (instructor is an alias for courseInstructor)

// JSON(JavaScript Object Notation) format which we will receive from API
// {
//     "name": "prince",
//     "coursename": "js for jobs",
//     "price": "free"
// }

// API can also return value in Array form as shown below:
/*

[
    {},
    {},
    {}
]
    
*/
