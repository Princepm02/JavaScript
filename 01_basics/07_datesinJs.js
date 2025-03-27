// Dates

let myDate = new Date()
// console.log(myDate.toString());  // Output => Thu Mar 27 2025 12:34:59 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());  // Output => Thu Mar 27 2025
// console.log(myDate.toLocaleString());  // Output => 3/27/2025, 12:34:59 PM
console.log(myDate.toLocaleString("en-IN"));  // Output => 27/3/2025, 12:34:59 pm
console.log(typeof myDate);  // Output => object

// let myCreatedDate = new Date(2023, 0, 23)  // Month starts from 0 -> Jan
// console.log(myCreatedDate);  // Output => Mon Jan 23 2023 00:00:00 GMT+0530 (India Standard Time)

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)  // Month starts from 0 -> Jan
// console.log(myCreatedDate);  // Output => Mon Jan 23 2023 05:03:00 GMT+0530 (India Standard Time)

// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate);  // Output => Sat Jan 14 2023 05:30:00 GMT+0530 (India Standard Time)

/*
- ISO Format ("2023-01-14"):
    - When you pass a date string in ISO format (YYYY-MM-DD), JavaScript treats it as UTC.
    - new Date("2023-01-14") is interpreted as 2023-01-14T00:00:00.000Z (UTC midnight).
    - When you log the date to the console, it converts the UTC time to your local time zone. For India Standard Time (GMT+0530), midnight UTC becomes 5:30 AM local time.

- Non-ISO Format ("01-14-2023"):
    - When you use a non-ISO format, such as "MM-DD-YYYY", many JavaScript engines (including the one in your browser) interpret it as local time by default.
    - new Date("01-14-2023") is treated as January 14, 2023 at local midnight.
    - When you log the date to the console, it displays exactly that time, i.e. 12:00:00 AM in your local time zone.
*/

let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate);  // Output => Sat Jan 14 2023 00:00:00 GMT+0530 (India Standard Time)


// The Date.now() static method returns the number of milliseconds elapsed since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC.

let myTimeStamp = Date.now()
console.log(myTimeStamp);  // Output => 1743060759412 (A large number representing milliseconds elapsed since the epoch)
console.log(myCreatedDate.getTime());  // Output => 1673634600000 (This number represents the amount of milliseconds between the unix epoch, and January 14th, 2023 00:00:00 in UTC.)
// console.log(Math.floor(Date.now()/1000));  // Output => 1743061370 (A large number representing seconds elapsed since the epoch)

let newDate = new Date()
console.log(newDate);  // Output => Thu Mar 27 2025 13:15:20 GMT+0530 (India Standard Time)
console.log(newDate.getMonth() + 1);  // Output => 3
console.log(newDate.getDay());  // Output => 4 (0->Sun, 1->Mon, and so on)

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",

})    // Output => 'Thursday'

