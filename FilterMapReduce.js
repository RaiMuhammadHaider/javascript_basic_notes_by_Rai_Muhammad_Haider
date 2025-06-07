// An array containing numbers and a string
let arr = [1, 3, 4, 5, 6, 8, 4, 'ali'];

// An object with properties Name and price
let MyObj = {
    Name: 'car',
    price: 100000,
};

// An array of objects, each representing a car with Name and price
let ArrayInObj = [
    { Name: 'Kia', price: 700000 },
    { Name: 'Honda', price: 2883993 },
    { Name: 'Toyota', price: 100000 },
    { Name: 'BMW', price: 1000 },
];

// Using reduce to calculate the total price of all cars in ArrayInObj
// inital starts at 0, and item.price is added to inital on each iteration
let Total = ArrayInObj.reduce((inital, item) => item.price + inital, 0);
console.log(Total); // Output: total sum of all prices

// Using filter to find cars that have price >= 200000 AND name 'BMW'
// This will return an array of matching objects
let sum = ArrayInObj.filter(item => (item.price >= 200000 && item.Name === 'BMW'));
console.log(sum); // Output: [] (empty array since no BMW meets criteria)
