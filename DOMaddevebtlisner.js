// This is a simple way to assign a click event using 'onclick' property
// document.getElementById('btn').onclick = ali 

function ali() {
    document.body.style.backgroundColor = 'red';
    document.getElementById('btn').style.backgroundColor = 'red';
    document.getElementById('btn').style.margin = '20px';
    document.getElementById('btn').style.fontSize = '10px';
    document.getElementById('btn').style.color = 'white';
    document.getElementById('btn').style.padding = '40px';
}

// Setting multiple CSS properties at once using cssText
document.getElementById('aaa').style.cssText = `
    color: red;
    background-color: blue;
    margin: 10px;
`;

// Select the first button element on the page
const button = document.getElementsByTagName('button')[0];

// Add a click event listener to the button
button.addEventListener('click', function() {
    // When the button is clicked, change the color of the first <h1> element to green
    document.querySelector('h1').style.color = 'green';
});

// Add a mouseleave event listener to the button
button.addEventListener('mouseleave', function() {
    // When the mouse leaves the button, change its background color to green
    this.style.backgroundColor = 'green';
});

// You can also define a named function and use it with addEventListener
function changeColor() {
    button.style.backgroundColor = 'green';
}

// Attach the named function to the mouseleave event
button.addEventListener('mouseleave', changeColor);

// To remove an event listener, use removeEventListener with the exact function reference
// button.removeEventListener('mouseleave', changeColor);


// ================= Traversal Methods ==================
/**
What are Traversal Methods in JavaScript?
Traversal methods mean ways to navigate or move through the HTML Document Object Model (DOM) tree to find and access different elements related to a particular node.

Imagine the DOM as a family tree or a hierarchy of elements — traversal methods help you move up, down, left, or right between these elements.
 */
// Parent element returns the parent of the element. If no parent, returns null.
let boss = document.querySelector('html').parentElement;
console.log(boss); // null because html is root element

// parentNode also returns the parent, but can be different for some nodes like text nodes
let c = document.querySelector('html').parentNode;
console.log(c); // Usually same as parentElement for elements

// children returns only element children (no text nodes)
let a = document.querySelector('.div').children;
console.log(a);

// childNodes returns all child nodes including text nodes (like spaces)
let b = document.querySelector('.div').childNodes;
console.log(b);

// firstElementChild returns the first child element (ignores text nodes)
let d = document.querySelector('.div').firstElementChild;
console.log(d);

// lastElementChild returns the last child element
let e = document.querySelector('.div').lastElementChild;
console.log(e);

// firstChild returns the first child node (can be text node or element)
let r = document.querySelector('.div').firstChild;
console.log(r);

// lastChild returns the last child node (can be text node or element)
let y = document.querySelector('.div').lastChild;
console.log(y);

// nextElementSibling returns the next sibling element (ignores text nodes)
let u = document.querySelector('.d1').nextElementSibling;
console.log(u);

// previousElementSibling returns the previous sibling element
let i = document.querySelector('.d2').previousElementSibling;
console.log(i);

// nextSibling returns the next sibling node (can be text node or element)
let o = document.querySelector('.d2').nextSibling;
console.log(o);

// previousSibling returns the previous sibling node (can be text node or element)
let p = document.querySelector('.d3').previousSibling;
console.log(p);
