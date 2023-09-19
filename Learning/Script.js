const body = document.body
const div = document.createElement("div")
div.textContent = "Hello World2"
body.append(div);

const text = document.createTextNode('This is a sample text');
div.appendChild(text);
document.body.appendChild(div);

const p = document.getElementById('p1');
console.log(p.textContent);

function createElement(tag , text){
    const elm = document.createElement(tag);
    elm.textContent = text;
    return elm;
}

const heading = createElement('h1' , 'List of fruits');
const ul = createElement('ul' , '');
const li1 = createElement('li' , 'Apple');
const li2 = createElement('li' , 'Orange');
const li3 = createElement('li' , 'Banana');
const li4 = createElement('li' , 'Cherry');
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
document.body.appendChild(heading);
document.body.appendChild(ul);

const ul = document.querySelector('ul');
const p = createElement('p' , 'This is a test paragraph');
document.body.insertBefore(p , ul);

const h1 = document.getElementById('heading');
const ul = h1.nextElementSibling;
const p = createElement('p' , 'This is a test paragraph');
document.body.insertBefore(p , ul);



