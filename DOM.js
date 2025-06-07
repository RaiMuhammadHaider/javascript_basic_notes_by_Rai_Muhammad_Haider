// =================== DOM Introduction ===================

// document means the structure of the page
// We use dot (.) to access parts of it — like selecting specific elements

// Accessing basic properties of the document
console.log(document.title);         // Page title
console.log(document.head);          // <head> section
console.log(document.body);          // Entire <body> section
console.log(document.URL);           // Full URL of the page
console.log(document.baseURI);       // Base URI of the document
console.log(document.images);        // Collection of all images
console.log(document.images[0]);     // First image by index

// Access elements by ID, Class or Tag Name
document.getElementById('CNIC');                // Select by ID
document.getElementsByClassName('any-class');   // Select by class name
document.getElementsByTagName('p');             // Select by tag name

// =================== GETTING VALUES ===================
// After getting an element, we can get:

// 1. Text: using innerText
// 2. HTML: using innerHTML
// 3. Attributes:
//    - getAttribute() → one attribute
//    - getAttributeNode() → attribute + value
//    - attributes → all attributes (index based)

// Example:
let attributes = document.getElementById('para').attributes;
console.log(attributes);

let jsElement = document.getElementById('js');
let paraClick = document.getElementById('para').getAttribute('onclick');
console.log(paraClick);

let buttonClick = document.getElementById('btn').getAttribute('onclick');
console.log(buttonClick);

// =================== SETTING VALUES ===================
// We can modify DOM elements using:

// 1. innerText → changes the visible text
// 2. innerHTML → changes the HTML inside an element
// 3. setAttribute → sets an attribute
// 4. removeAttribute → removes an attribute

// Example:
let targetElement = document.getElementById('aaa');
targetElement.setAttribute('class', 'newclass');
console.log(targetElement.getAttribute('class'));

let result = document.getElementById('aaa').setAttribute('class', 'newclass') || 'newclass';
console.log(result);

// Remove attribute
let removeAttr = document.getElementsByTagName('button')[0].removeAttribute('onclick');
console.log(removeAttr); // Will return undefined

// Change inner HTML and Text
document.getElementsByTagName('h1')[0].innerHTML = '<h1>All Topics of JavaScript</h1>';
document.getElementsByTagName('h1')[0].innerText = 'All Topics of JavaScript';

// =================== querySelector & querySelectorAll ===================

// querySelector selects the first match only
let firstClassContent = document.querySelector('.js').innerHTML;
console.log(firstClassContent);

let firstIdContent = document.querySelector('#js').innerHTML;
console.log(firstIdContent);

// querySelectorAll selects all matching elements (returns a NodeList)
let allJsElements = document.querySelectorAll('.js');
console.log(allJsElements);

// Accessing first item from NodeList
console.log(allJsElements[0]);
