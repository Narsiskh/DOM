// DOM Manipulation

// Traverse the DOM

// Parent Node Traverse

/* let ul = document.querySelector('ul');

 console.log(ul.parentNode);
console.log(ul.parentElement.parentElement);*/

/* const html = document.documentElement;

console.log(html.parentNode)
console.log(html.parentElement) */


// Child Node Traversal

/* let ul = document.querySelector('ul');

console.log(ul.childNodes)
console.log(ul.firstChild)
console.log(ul.lastChild)

ul.childNodes[1].style.backgroundColor = 'blue' */


// Siblings Node Traversal

let ul = document.querySelector('ul');
const div = document.querySelector('div')

console.log(div.childNodes)

console.log(ul.previousElementSibling)
console.log(ul.nextElementSibling)