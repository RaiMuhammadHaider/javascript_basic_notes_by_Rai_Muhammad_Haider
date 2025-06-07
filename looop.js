// For loop example: counting from 0 to 7
for (let i = 0; i <= 7; i++) { 
    console.log(`This is the value of i: ${i}`);
}

let myArray = ['AccountTittle', 'AccountID', 'AccountPassword', "AccountGmail"];

// Loop through the array and log each element
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

// Example with if and continue
for (let i = 0; i < myArray.length; i++) {
    if (i === 3) {   // Use '===' for comparison, not '=' which is assignment
        console.log('loop is fetched');
        continue;    // Skip the rest of this loop iteration when i is 3
    }
    console.log(myArray[i]);
}

// Loop with break and continue explanation
for (let i = 0; i <= 10; i++) {
    console.log(i);
    if (i === 7) {
        console.log(`Number 7 is fetched`);
        // continue skips rest of the code inside the loop for this iteration
        continue;
        // break would stop the entire loop here
    }
}

// Loop to print index and its square
for (let index = 0; index <= 10; index++) {
    console.log(`${index} * ${index} = ${index * index}`);
}

// While loop: prints scores from 2 to 10
let score = 2;
while (score <= 10) {
    console.log(`Our Score is ${score}`);
    score++;
}

// While loop iterating over array with index fix (start from 0)
let arr = 0;
while (arr < myArray.length) { // use < length because arrays are zero-indexed
    console.log(`Hey this is your Hero ${myArray[arr]}`);
    arr++;
}

// Do-while loop example: runs at least once, counts to 9
let num = 0;
do {
    console.log(`Hey this is your number ${num}`);
    num++;
} while (num < 10);

// While loop continuing from previous num to 19
while (num < 20) {
    console.log(`Hey this is your number ${num}`);
    num++;
}
