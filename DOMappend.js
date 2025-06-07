// Create an <h1> element
let a = document.createElement('h1');

// Create a text node
let b = document.createTextNode('Append and AppendChild');

// Append the text node inside the <h1> element
a.appendChild(b); // use appendChild here for compatibility

// Append the <h1> element to the element with class "old"
let parentElement = document.querySelector('.old');
parentElement.appendChild(a);

// If you want to insert something before a specific child, do it like this:
// For example, insert 'b' before the first child of parentElement
// parentElement.insertBefore(b, parentElement.firstChild);

// Select the button and the container div
let but = document.querySelector('#btn');
let div = document.querySelector('.container');

// Add a click event listener to the button
but.addEventListener('click', () => {
    // Create a new <h1> element on each click
    let elementCreated = document.createElement('h1');
    elementCreated.innerText = 'Element Created';
    // Append the new element inside the container div
    div.append(elementCreated);
});

// Remove all elements with the class 'js'
// getElementsByClassName returns a live HTMLCollection, so convert it to an array first
let elementsToRemove = document.getElementsByClassName('js');
Array.from(elementsToRemove).forEach(element => element.remove());

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Find Mistake Below

/*

// Create an <h1> element
let a = document.createElement('h1');

// Create a text node
let b = document.createTextNode('Append and AppendChild');

// Append the text node inside the <h1> element
a.appendChild(b); // use appendChild here for compatibility

// Append the <h1> element to the element with class "old"
let parentElement = document.querySelector('.old');
parentElement.appendChild(a);

// If you want to insert something before a specific child, do it like this:
// For example, insert 'b' before the first child of parentElement
// parentElement.insertBefore(b, parentElement.firstChild);

// Select the button and the container div
let but = document.querySelector('#btn');
let div = document.querySelector('.container');

// Add a click event listener to the button
but.addEventListener('click', () => {
    // Create a new <h1> element on each click
    let elementCreated = document.createElement('h1');
    elementCreated.innerText = 'Element Created';
    // Append the new element inside the container div
    div.append(elementCreated);
});

// Remove all elements with the class 'js'
// getElementsByClassName returns a live HTMLCollection, so convert it to an array first
let elementsToRemove = document.getElementsByClassName('js');
Array.from(elementsToRemove).forEach(element => element.remove());

*/