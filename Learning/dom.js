let elm = document.getElementById('heading');

console.log(elm.nodeType);
console.log(elm.nodeName);

let elms = document.getElementsByTagName('p');
console.log(elms.length);
console.log(elms[0].textContent);


let elments = document.getElementsByClassName('p1');
console.log(elments.length);
console.log(elments[1].textContent);


let elm = document.querySelector('#heading');
console.log(elm.textContent);
elm = document.querySelector('.p1');
console.log(elm.nodeName);

let elms = document.querySelectorAll('.p1');
console.log(elms[0].textContent);

let body = document.querySelector('body');
let p = body.querySelector('p');


let body = document.querySelector('body');
let p = body.querySelector('p');

let div = document.getElementById('myid');
console.log(div.getAttribute('class'));

let div = document.getElementById('myid');
div.setAttribute('class' , 'newclass');
div.setAttribute('title' , 'mytitle');
console.log(div.getAttribute('class'));
console.log(div.getAttribute('title'));

let div = document.getElementById('myid');
div.removeAttribute('id');
console.log(div.getAttribute('id'));

let div = document.getElementById('myid');
console.log(div.id);

let div = document.getElementById('myid');
div.title = "mytitle";
console.log(div.title);

let div = document.getElementById('myid');
div.className= "newclass";
console.log(div.getAttribute('class'));

let div = document.getElementById('myid');
console.log(div.getAttribute('myattr'));
console.log(div.myattr);

let div = document.getElementById('myid');
div.newattr = "newvalue";
console.log(div.getAttribute('newattr'));
console.log(div.newattr);

const div = document.getElementById('user');
console.log(div.dataset.id);
console.log(div.dataset.user);
console.log(div.dataset.dateOfBirth);

/*const div = document.getElementById('myid');
div.className = 'class1 class2 class3 class4';*/

div.classList.add('class4');
console.log(Array.from(div.classList));

div.classList.remove('class4' , 'class2');
console.log(Array.from(div.classList));

div.classList.toggle('class4');
div.classList.toggle('class3');
console.log(Array.from(div.classList));

div.classList.replace('class1' , 'class2');
console.log(Array.from(div.classList));

console.log(div.classList.contains('class2'));
console.log(div.classList.contains('class1'));

