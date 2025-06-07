const num = 1993
const balance = new Number(373.99939) // A way to defining a number in the form of object 
console.log(balance); //its in the form of object but its still number
console.log(typeof balance);

console.log(balance.toFixed(2));//ToFixed define how much will be after main number like $100.00
console.log(balance.toPrecision(3));
console.log(typeof balance.toPrecision(3));//it will give as precise value that is our client requirent it should not be in the form of e rase power but its typeof will be a string
 const accountBlanace = new Number(10000000)
 console.log(accountBlanace.toLocaleString());// it will provide commas to to for readablity the number
 console.log(balance.toString() );// it become now same all the string method can also be apply like concat repalce include uppercase lowercase trim trim-Start trim-end split slice etc
console.log(typeof balance.toString() );
console.log(balance.toString().split(3));//String Method to seprate on the base of three others methods can also be applied thats so easy
 //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 console.log(Math)//Math is predefine keyword or a builed-In keyWord that allows fuctionality of math
 console.log(Math.abs(-8333));//It convert all the negative numbers into a positive number but positive number always be a positive number
 console.log(Math.round(365.9362));// it will be a round of value it having two types ceil or floor 
 console.log(Math.ceil(365.9362));// it will give a higher round value 
 console.log(Math.floor(365.9362));// it will give as low round value
 console.log(Math.sqrt(64));// it will be in squreroot
 console.log(Math.min(8,2,9,1,4));// it will give minimum value 
 console.log(Math.max(8,2,9,1,4));// it will give maximum  value 
 console.log(Math.random());// it give us a value between 0 and 1
 console.log((Math.random()*10)+1)// to remove from zero pointing value we multiplay by 10 and add 1 now it will be higher then zero pointing value 
 let max = 19
  let min = 9
console.log(Math.floor((Math.random()*(max-min+1))+max));// for max
console.log(Math.floor((Math.random()*(max-min+1))+min));// for min
console.log(parseInt(9384.484));//parseInt is use to fixout the int value not in floting point value it will take the first int value
console.log(parseFloat(293240.854592475928457972));//this will provide us floting point value 
console.log(isFinite(100));//it will give the awsnwer in true or false 
//console.log(Math.isFinite(100));
console.log(Math.trunc(100.9999));//it will neveer give you point va;ue


 
 
 
 const num = 1993;

// Creating a Number object (not a primitive number)
const balance = new Number(373.99939);
console.log(balance);              // Outputs: [Number: 373.99939] (Number object)
console.log(typeof balance);       // Outputs: 'object' because it's a Number object, not a primitive number

// Formatting number with fixed decimal places (2 digits after decimal)
console.log(balance.toFixed(2));   // Outputs: "374.00"

// Formatting number to a specified precision (total digits)
console.log(balance.toPrecision(3));  // Outputs: "374" (3 significant digits)
console.log(typeof balance.toPrecision(3)); // Outputs: 'string' (toPrecision returns a string)

// Formatting large numbers with commas for readability
const accountBalance = new Number(10000000);
console.log(accountBalance.toLocaleString());  // Outputs: "10,000,000"

// Convert number object to string (so you can use string methods)
console.log(balance.toString());
console.log(typeof balance.toString());  // Outputs: 'string'

// Splitting string based on character '3'
console.log(balance.toString().split('3'));  
// Example output: ['37', '.999', '9']

// ================= Math object and methods =====================

console.log(Math);  // Outputs the Math object

// Absolute value: negative to positive, positive stays positive
console.log(Math.abs(-8333));  // Outputs: 8333

// Round number to nearest integer
console.log(Math.round(365.9362));  // Outputs: 366

// Round number up to next integer
console.log(Math.ceil(365.9362));   // Outputs: 366

// Round number down to previous integer
console.log(Math.floor(365.9362));  // Outputs: 365

// Square root
console.log(Math.sqrt(64));          // Outputs: 8

// Minimum value from arguments
console.log(Math.min(8,2,9,1,4));   // Outputs: 1

// Maximum value from arguments
console.log(Math.max(8,2,9,1,4));   // Outputs: 9

// Random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random());          // Example output: 0.4325343

// Random number between 1 and 11 (exclusive)
console.log((Math.random() * 10) + 1);

// Random integer between min and max (inclusive)
let max = 19;
let min = 9;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Random integer between 9 and 19

// Parsing numbers

// Extracts integer part only (removes decimal)
console.log(parseInt(9384.484));        // Outputs: 9384

// Extracts floating number
console.log(parseFloat(293240.854592475928457972));  // Outputs: 293240.8545924759

// Checks if value is finite (true if number is finite, false if Infinity or NaN)
console.log(isFinite(100));               // Outputs: true
// console.log(Math.isFinite(100));       // Also valid, but Math.isFinite is newer

// Removes decimal part without rounding
console.log(Math.trunc(100.9999));       // Outputs: 100
