# DOM Manipulation:
## Adding Elements to the Page:
There is two different ways that you can add an element to the page:

1. Select thge Element: 
```javascript
 const body = document.body
body.appendChild("Hello World")
const div = document.createElement("div")
body.append(div)
```
In order to add text to our `div`, there is actually two different ways we can do it:
A) `div.innerText` 
```javascript
const body = document.body
const div = document.createElement("div")
div.innerText = "Hello World"

body.append(div)
```
You can see we get the text 'Hello World' being printed, but this time its a little different because its inside of a `div`. Also we can use appendChild instead.
B) `div.textContent`
```javascript
const body = document.body
const div = document.createElement("div")
div.textContent = "Hello World2"

body.append(div)
```
The difference between inner text and text content is that when you view the text of an element through inner text or text content, they actually differ a little bit. Text content is going to print you out the exact text content, all of the spacing all of the indentation of all the content inside the div. The way text content works is it just copy and paste the text essentially directly from your html, but what happens with inner text is it actually displays your text just like it would be displayed inside of your html.

2. Modify the HTML: