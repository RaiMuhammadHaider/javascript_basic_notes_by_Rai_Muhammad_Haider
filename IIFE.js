// IIFE: Immediately Invoked Function Expression
// This function runs automatically as soon as it is defined

(function funk() {
    console.log('Hey, I am Ali');
})();

(function funk() {
    console.log('Hey, I am Ali');
})();

(function funk() {
    console.log('Hey, I am Ali');
})();

(function funk() {
    console.log('Hey, I am Ali');
})();

// IIFE with arrow function
(() => {
    console.log('Hey, user logged in');
})();

// IIFE with parameter
((name) => {
    console.log(`${name}, hey this is the name`);
})(35);

// Explanation:
// IIFE helps to run code immediately without polluting the global scope.
// The function executes right after it is defined and is wrapped in parentheses 
// to treat it as an expression, not a declaration.
// Using IIFE prevents variables and functions from leaking into the outer/global scope.

//this method is knomn as IIFE is ma hamra code ak kisim k whole me hota ha or ya automatically run ho jata ha is pe function ka name nahi likna parta

//yani outer polution se bachny k liya hm is ko rape-up krty hnn