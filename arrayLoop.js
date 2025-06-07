// Original Arrays
let arr1 = [1, 2, 3, 4, 5, 6, 7];
let arr2 = ['ali', 'gfi', 'fihe'];

for (const anyName of arr2) {
    console.log(anyName);    // for-of loop is used for arrays and for-in loop is used for objects
}

let greeting = 'Hey its me';
for (const variable of greeting) {
    console.log(`Each character of Greeting is ${variable}`);
}

// Working with Map
let map1 = new Map();
map1.set('Pk', 'pakistan');
map1.set('IN', 'India');
map1.set('UK', 'United Kingdom');

// for-of with destructuring (valid)
for (const [key, value] of map1) {
    console.log(key, 'this is value', value);
}

// Nested Object
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
            sinh: 'Sindh',
            kpk: 'KPK',
            BLT: 'BLT',
        }
    }
};

for (const key in user) {
    console.log(`${key} this is the value ${user[key]}`); // for-in loop is used for objects
}

// Array of Objects with duplicate keys (note: JS allows only last one to survive in each object)
let myarr = [
    {
        ali: 'uagdfiu', // only last ali is preserved
    },
    {
        ali: 'uagdfiu',
    },
    {
        ali: 'ihud',
        acatr: 'y8y',
        al: 'uagdfiu',
    }
];

myarr.forEach((jjp) => {
    console.log(jjp.ali);
});

// +++++++++++++ Array Methods ++++++++++++++++++++++++++++++++++++++++++

let arr3 = [1, 2, 34, 56, 78, 9];
let rr = [1, 2, 34, 56, 78, 9];

// Uncomment if needed
// console.log(arr3);
// console.log(arr3.length);

// For Loop
// for (let i = 0; i < arr3.length; i++) {
//     const jameel = arr3[i];
//     console.log(jameel);
// }

// While Loop
// let j = 0;
// while (j < arr3.length) {
//     console.log(arr3[j]);
//     j++;
// }

arr3.push('ali', 3, 'jaeel');
arr3.pop();
arr3.shift();
arr3.unshift('jaeeel ', "haider", 'asad');
// console.log(arr3);

let aa = [
    1,
    ,
    1,
    1,
    [2, 2, 2, [0, 0, 0, 0, 0, 0, 0], 2, 2, 2, 22],
    1,
    1,
    1,
    1,
    1,
    1,
    [
        'jaeeel ', 'haider', 'asad', 2, 34, 56, 78, 9, 'ali', 3
    ],
    1, 1, 1, 1
];

// console.log(aa);
let jj = aa.flat(Infinity);
// console.log(jj);

let gg = [...jj, ...arr3, ...aa]; // join or spread method
// console.log(gg);

let boo = arr3.filter((zz) => zz == 2);
// console.log(boo);

// +++++++++++++ Products Example ++++++++++++++++++++++++++++++++++++++++++

const products = [
    {
        name: "Wireless Headphones",
        price: 50,
        category: "Electronics",
        stock: 120
    },
    {
        name: "Coffee Mug",
        price: 12,
        category: "Kitchenware",
        stock: 250
    },
    {
        name: "Yoga Mat",
        price: 25,
        category: "Fitness",
        stock: 75
    },
    {
        name: "Desk Lamp",
        price: 30,
        category: "Home Decor",
        stock: 45
    },
    {
        name: "Running Shoes",
        price: 80,
        category: "Footwear",
        stock: 60
    }
];

let bbbb = products.filter((asass) => asass.price < 30);
// console.log(bbbb);

let xx = products.filter((jila) => jila.category == "Footwear");
console.log(xx);

let nn = products.map((aaaa) => aaaa.price * 1.06);
console.log(nn);

let bc = rr.reduce((aka, nana) => aka + nana, 0);
console.log(bc);
