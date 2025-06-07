const ali = {
    name: 'ali',
    roll_NUmber: 37,
    IsLogedIn: true,
    pass: null,
    Id_Created: undefined,
    lastLogedIN: ['Monday', 'Sunday']
};
// Object keys behave like strings. They can also be numbers, but in arrays, keys are always numbers (indexes).
// In objects, keys can be strings or numbers.

console.log(ali.roll_NUmber);            // Access using dot notation
console.log(ali["IsLogedIn"]);           // Access using bracket notation (keys behave like strings)
console.log(ali["lastLogedIN"][1]);      // Access nested array value

// Using Symbol as a unique key (symbol keys are not enumerable)
let price = Symbol("100$ Price");

const product = {
    Name: "car",
    "tyre quality": 2,   // Keys with spaces must be in quotes and accessed via brackets
    Id_Created: undefined,
    lastLogedIN: ['Monday', 'Sunday'],
    [price]: 'price not available',  // Symbol used as key here
};

// Adding and changing properties
product.IsLogedIn = "bus";
product.Xmail = "YahooXmail.com";  // Adds new key to object

console.log(product);

const jalii = 'Xma  il' in product;  // Check if key exists in object (returns true/false)
console.log(jalii);

console.log(Object.keys(product));   // Get all keys of the object
console.log(Object.values(product)); // Get all values of the object

console.log(product);

// Freeze the object to prevent changes
Object.freeze(product);
product.Name = "bike";  // This will not change the Name property because object is frozen
console.log(product.Name);

console.log(product['tyre quality']);  // Access key with space using bracket notation
console.log(product[price]);            // Access symbol key
console.log(typeof product[price]);     // Type of symbol key's value

// Adding methods (functions) to the object
product.greeting = function () {
    console.log('Hey this is Greeting');
};

product.greetingtwo = function () {
    console.log(`Hey this is the Object and the value of key Name is ${this.Name}`);
};

console.log(product.greeting);
console.log(product.greetingtwo);

// ====================== Creating Objects ==============================

// Create empty objects using different ways
const Prod = new Object();  // Using Object constructor
console.log(Prod);

const pro = {};             // Using object literal syntax
console.log(pro);

// Nested objects example:
const user = {
    UserId: 9329836,
    Citizen: {
        Pakistan: {
            punjab: {
                kasur: {
                    habibAbad: 'habibAbad',
                    pattoki: 'pattoki',
                },
                okara: false
            },
            sindh: 'Sindh',
            kpk: 'KPK',
            BLT: 'BLT',
        }
    }
};
console.log(user.Citizen.Pakistan.punjab.kasur.pattoki);  // Access deep nested property

// Spread operator to merge objects
const SpreadOperator = { ...ali, ...product };
console.log(SpreadOperator.lastLogedIN[0]);
console.log(Object.keys(SpreadOperator));    // Get keys of merged object
console.log(Object.values(SpreadOperator));  // Get values of merged object
console.log(Object.entries(ali));             // Convert key-value pairs to array

// ====================== Object Destructuring ==========================
console.log(ali.name);  // Old way to access property

const { name } = ali;   // Destructuring: extract property into variable
console.log(name);

const { name: namm } = ali;  // Destructure and rename variable
console.log(namm);
