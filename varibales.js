// Declaring variables using 3 keywords:
// let, var, and const
// Syntax: dataType variableName = value

export let RanDomUser = 10;

let ali = 10;
var haider = 20;
const alihaider = 30;

// Prefer using `let` and `const`.
// Avoid using `var` in modern JavaScript.

// Output variables
console.log(ali);        // 10
console.log(haider);     // 20
console.log(alihaider);  // 30

// ----------------------
// JavaScript Data Types
// ----------------------

// 2 types of data types:
// 1) Primitive (simple values)
// 2) Non-Primitive (complex like arrays, objects, functions)

// ----- Primitive Data Types -----
// 1. Number          → e.g., 29
// 2. String          → e.g., "Ali123"
// 3. Boolean         → true or false
// 4. Undefined       → variable declared but no value assigned
// 5. Null            → explicitly nothing
// 6. BigInt          → large numbers (e.g., BigInt("14537") => 14537n)
// 7. Symbol          → unique identifiers (e.g., Symbol("hello"))

let a = 10;                 // Number
let b = "This is a string"; // String
let c = true;               // Boolean
let d = null;               // Null
let e = BigInt(14537);      // BigInt
let f = Symbol("unique");   // Symbol

// Output values
console.log(a);  // 10
console.log(b);  // This is a string
console.log(c);  // true
console.log(d);  // null
console.log(e);  // 14537n
console.log(f);  // Symbol(unique)
