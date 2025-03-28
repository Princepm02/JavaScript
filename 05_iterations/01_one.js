// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

// console.log(element);  // Error element is out of scope

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}
/*
Output => flash
          batman
          superman
*/


// break

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
   console.log(`Value of i is ${index}`);
    
}
/*
Output => Value of i is 1
          Value of i is 2
          Value of i is 3
          Value of i is 4
          Detected 5
*/

// continue

for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);   
}

/*
Output => Value of i is 1
          Value of i is 2
          Value of i is 3
          Value of i is 4
          Detected 5
          Value of i is 6
          Value of i is 7
          Value of i is 8
          Value of i is 9
          Value of i is 10
*/
