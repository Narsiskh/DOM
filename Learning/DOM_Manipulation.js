const ul = document.querySelector('ul');
const second = ul.firstElementChild.nextElementSibling;
const removed = ul.removeChild(second);

const newItem = document.createElement('li');
newItem.textContent = 'Lemon';
const ul = document.querySelector('ul');
const oldItem = ul.lastElementChild;
const replaced = ul.replaceChild(newItem , oldItem);

const ul = document.querySelector('ul');
const firstItem = ul.firstElementChild;
const lastItem = ul.lastElementChild;
ul.insertBefore(firstItem , lastItem);

const ul = document.querySelector('ul');
const copyNode = ul.firstElementChild.cloneNode(true);
ul.appendChild(copyNode);

const ul = document.querySelector('ul');
const newChildren = '<li>Lemon</li> <li>Lime</li> <li>Melon</li>';
ul.innerHTML = ul.innerHTML + newChildren;
const ul = document.querySelector('ul');
console.log(ul.innerHTML);
console.log(ul.outerHTML);