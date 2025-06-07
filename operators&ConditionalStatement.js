/* Operators
Operators are used to perform some operations.
(Example)
Some are ARITHMETIC OPERATORS:
+ for addition
- for subtraction
* for multiplication
% for modulus (gives the remainder after division)
*/

// Declaring two variables
let a = 10;
let b = 20;

console.log("Value of a is = " + a + " value of b is = " + b);
console.log(a);
console.log(b);
console.log('A=10 & B=20');
console.log(a + b);           // 30
console.log("A + B =", a + b);
console.log("A - B =", a - b);
console.log("A * B =", a * b);
console.log("A % B =", a % b);

/* UNARY OPERATORS */
/* Unary operators are used to increase or decrease a value by 1 */
/* There are two types: pre and post */
// Pre-increment/decrement: first increase/decrease then use the value
// Post-increment/decrement: first use the value then increase/decrease

let boss = 2;
let asad = 4;

console.log(++boss);  // pre-increment: boss becomes 3, prints 3
console.log(boss++);  // post-increment: prints 3, then boss becomes 4
console.log(--asad);  // pre-decrement: asad becomes 3, prints 3
console.log(boss--);  // post-decrement: prints 4, then boss becomes 3

/*
ASSIGNMENT OPERATORS
Assignment operators assign values to variables, often combining arithmetic:

=   (assign)
+=  a += 1 means a = a + 1
-=  a -= 1 means a = a - 1
*=  a *= 1 means a = a * 1
%=  a %= 1 means a = a % 1
**= a **= 1 means a = a ** 1 (exponentiation)
*/

// for loop printing "ahsan" 999 times (from i=1 to 999)
for (let i = 1; i < 1000; i++) {
    console.log("ahsan");
}

// while loop printing "hussain" 100 times (from i=1 to 100)
let i = 1;
while (i <= 100) {
    console.log("hussain");
    i++;
}

// do-while loop example
let j = 20;
do {
    console.log("hussnain");
    j++;
} while (j <= 10);  // Since j=20 initially, loop runs once then stops

// Correct way to loop over object keys using for...in
let obj = {
    name: "naveed",
    age: 20
};

for (let key in obj) {
    console.log(key);  // prints keys like 'name', 'age'
}

// String methods example:

let ok = "cat";  // Accessing character at index 1
console.log(ok[1]);  // Output: 'a'
    