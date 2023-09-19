let children = document.getElementById('main').childNodes;
console.log(children.length);

let elementChildren = document.getElementById('main').children;
console.log(elementChildren.length);

let first = document.getElementById('main').firstChild;
console.log(first.nodeName);


let last = document.getElementById('main').lastChild;
console.log(last.nodeName);


let firstElement = document.getElementById('main').firstElementChild;
console.log(firstElement.nodeName);


let lastElement = document.getElementById('main').lastElementChild;
console.log(lastElement.nodeName);

let heading = document.getElementById('heading');
console.log(heading.nextSibling.nodeName);


console.log(heading.previousSibling.nodeName);


console.log(heading.nextElementSibling.nodeName);


console.log(heading.previousElementSibling.nodeName);



