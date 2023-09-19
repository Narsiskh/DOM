// Event Listener

// element.addEventListener("click", function)

const buttonTow = document.querySelector('.btn-2');

function alertBtn() {
    alert('I also love JavaScript');
};

buttonTow.addEventListener("click", alertBtn)

// Mouseover

const newBackgroundColor = document.querySelector('.btn-3');

function changeBgColor() {
    newBackgroundColor.style.backgroundColor = 'blue';
}

newBackgroundColor.addEventListener("mouseover", changeBgColor)