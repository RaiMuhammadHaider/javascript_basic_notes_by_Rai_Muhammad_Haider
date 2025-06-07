// Traditional Function Declaration
// function funk(numm, num2) {
//     return numm + num2;
// }
// console.log(funk(2, 3));

// Arrow Function (with curly braces + return)
let funkWithReturn = (numm, num2) => {
    return numm + num2;
};
console.log(funkWithReturn(3, 4));

// Arrow Function (without curly braces, implicit return)
let funk = (numm, num2) => (numm + num2); // This is also a valid function
console.log(funk(2, 4));

// Explanation:
// If you use curly braces `{}` in an arrow function,
// you MUST use the `return` keyword.
// If you use simple round brackets `()`, then it will return automatically (implicit return).

// Another arrow function example
// const alihaider = () => {
//     console.log('This is a message from alihaider function');
// };
// alihaider();
