var hours = 0;
var minutes = 0;
var seconds = 0;
var millisecond = 0;

var stopwatch;

/** HTML ELEMENTS */

const form = document.querySelector('form');

const spanHours = document.getElementById('hours');
const spanMinutes = document.getElementById('minutes');
const spanSeconds = document.getElementById('seconds');

const startButton = document.getElementById('start');
const pauseButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function start() {
    pause();
    stopwatch = setInterval(() => { timer(); }, 10);
}

function pause() {
    clearInterval(stopwatch);
}

function reset() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    spanHours.innerText = '00';
    spanMinutes.innerText = '00';
    spanSeconds.innerText = '00';
}

function timer() {
    if((millisecond +=10) == 1000) {
        millisecond = 0;
        seconds++;
    }

    if(seconds == 60) {
        seconds = 0;
        minutes++;
    }

    if(minutes == 60) {
        minutes = 0;
        hours++;
    }

    spanSeconds.innerText = formatterData(seconds);
    spanMinutes.innerText = formatterData(minutes);
    spanHours.innerText = formatterData(hours);
}

function formatterData(data) {
    return data > 10 ? data : `0${data}`
}

startButton.onclick = start;
pauseButton.onclick = pause;
resetButton.onclick = reset;