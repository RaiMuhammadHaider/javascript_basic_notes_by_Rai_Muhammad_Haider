// Function with parameters number1 and number2
function addition9(number1, number2) {
    console.log(number1 + number2);
}
// Calling the function with arguments 7 and 9
addition9(7, 9);

// Function that returns the sum of two numbers
function returnn(one, two) {
    let three = one + two;
    console.log('In this function we will return the value');
    return three; // After return, nothing else executes in this function
}
returnn(8, 8);

// You can store returned value in a variable and use it
// let ali = returnn(8, 8);
// console.log(ali);

// Function that logs numbers and their sum using template literals
function add(num1, num2) {
    let ans = `Number One is ${num1} and Number Two is ${num2} and sum = ${num1 + num2}`;
    console.log(ans);
    return ans; // Returning ans (string)
}
add(3, 3);

// Simple function to print a message
function ali() {
    console.log('This is Ali');
}
ali();

// Function with parameters and template literal
function Haider(numberOne, numberTwo) {
    console.log(`This is the addition of Both = ${numberOne + numberTwo}`);
}
Haider(5, 5);

// Function with default parameter value
function myFunc(userName = 'This is the default value') {
    if (userName === 'This is the default value') {
        return console.log('Please provide a Name');
    }
    console.log(`${userName} just logged in`);
}
myFunc('wefgif'); // Passes name
// myFunc(); // Would prompt "Please provide a Name"

// Function returning sum of two values
function maaa(a, b) {
    return a + b;
}
let rez = maaa(2, 3);
console.log(rez); // 5

// Function returning a string with name logged in
function pro(Name) {
    return `${Name} logged in`;
}
let aliName = pro("aliii");
console.log(aliName);

//+++++++++++++++++++++++++ Function with object and array ++++++++++++++++++++++++++++++

// Object with properties
let obj = {
    ali: "ali",
    age: 28,
    class: 'bscs',
};

// Function accessing object properties
function myFunk() {
    return `Name is ${obj.ali} and class is ${obj.class}`;
}
console.log(myFunk());

// Function with rest parameters (takes any number of arguments after first two)
function unlimited(p1, p2, ...price) {
    return price; // returns array of rest arguments
}
console.log(unlimited(10, 28, 83, 'ud,837'));

// Array example
let myArray = [10, 93, 94, 'hfuehf'];

// Function to return first element of any array
function funArray(anyArray) {
    return anyArray[0];
}
console.log(funArray(myArray)); // 10

// Store the returned first element
let result = funArray(myArray);
console.log(result); // 10

// Function with rest parameters to accept any number of values
function userCard(...value1) {
    return value1;
}
let val = userCard(1, 2, 3);
console.log(val); // [1, 2, 3]

// Object example
let nammm = {
    name: 'ali',
    id: 28868,
};

// Function accessing object properties (parameter not needed here)
function objFunc() {
    console.log(`Your Name is ${nammm.name} and your Id is ${nammm.id}`);
}
objFunc();

// Update object properties
nammm.name = 'haider';
nammm.id = 6989869;
objFunc(); // Calls function to print updated values
