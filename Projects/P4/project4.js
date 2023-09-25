// Variables for buttons

const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

// Variables for time values

let seconds = 0;
let minutes = 0;
let hours = 0;

// Variables for set interval & timerStatus

let timerInterval = null;
let timerStatus = false;

// Stop Watch Function

function stopWatch() {

    seconds++

    if(seconds / 60 === 1) {
        seconds = 0;
        minutes ++;

        if(minutes / 60 === 1) {
            minutes = 0;
            hours++
        }
    }

    document
        .getElementById('timer')
        .innerText = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}:`;
}


startStopBtn.addEventListener('click', function (){
    const btnIcon = startStopBtn.querySelector("i")

    if (!timerStatus) {
        timerInterval = window.setInterval(stopWatch, 1000)
        btnIcon.classList.replace("fa-play", "fa-pause");
        timerStatus = true;
    } else {
        window.clearInterval(timerInterval);
        btnIcon.classList.replace("fa-pause", "fa-play");
        timerStatus = false;
    }
});

resetBtn.addEventListener('click', function (){

    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('timer').innerHTML = "00:00:00";
})