// Simple array declaration — any type of value can be stored
let myArray = ['ali', 'haider', 750, true];
console.log(myArray);
console.log(myArray[2]); // simple method to find the value at a certain index

let myArrar = new Array('ali', 8826, true, 8398, null, undefined);
console.log(myArrar);

// +++++++++++++++++++++++++++++++++++++++++++
// Array Methods

let Arra = new Array("Ali", 532, true, null, "Name");
console.log(Arra);

Arra.push("ajsdk", 8346846, false); // push is used to add more values at the end
console.log(Arra);

Arra.pop(); // pop removes the last element
console.log(Arra);

Arra.unshift("efewef", 2222); // unshift adds elements at the start
console.log(Arra);

Arra.shift(); // shift removes from the start
console.log(Arra);

console.log(Arra.includes("Ali")); // checks if value exists (true/false)
console.log(Arra.indexOf("Ali")); // returns the index of the value

let newArra = Arra.join(); // join converts array into a comma-separated string
console.log(newArra);

// Using splice (modifies the original array)
let Name = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(Name);
let anOther = Name.splice(1, 8); // from index 1, remove 8 elements
console.log(anOther);

// Using slice (does NOT modify original array)
let Other = Name.slice(1, 5); // slice from index 1 to 4 (excluding 5)
console.log(Other);
console.log(Other.length);

// +++++++++++++++++++++++ SECOND VIDEO ++++++++++++++++++++++++++++++++

const marvalHero = ['thor', 'IronMan', 'SpiderMan'];
const other_Heros = ['BatMan', 'Flash', 'Superman'];

// const AllHeros = marvalHero.concat('catMan', "DogMan", 'MangoMan') ❌ typo in string quotes
const AllHeros = marvalHero.concat(other_Heros); // concat merges arrays
console.log(AllHeros);
console.log(AllHeros[0]);

// Most commonly used method — Spread Operator
const Heros = [...marvalHero, ...other_Heros];
const mosss = [...marvalHero, ...other_Heros];
console.log(mosss);
console.log(Heros); // mostly used in modern code

// Flattening nested arrays
const Multipal_array = [
  'BatMan',
  ['BatMan', 'Flash', 'Superman'],
  'Flash',
  [
    'BatMan',
    'Flash',
    [
      'BatMan',
      ['BatMan', 'Flash', ['BatMan', 'Flash', 'Superman'], 'Superman'],
      'Flash',
      'Superman'
    ],
    'Superman'
  ],
  'Superman'
];
const multi = Multipal_array.flat(Infinity); // flattens deeply nested arrays
console.log(multi);

// Array utilities
console.log(Array.isArray('wgfywefguwg')); // checks if it's an array → false
console.log(Array.from('dhfiwoue')); // creates array from string characters
console.log(Array.from(['dhfiwoue', true])); // from multiple values

console.log(Array.of('uhguwhrgfuh', true, null)); // creates array with passed elements
