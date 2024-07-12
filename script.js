let startTime = 0;
let currentTime = 0;
let intervalId = 0;
let isRunning = false;

const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const millisecondsElement = document.getElementById("milliseconds");
const startButton = document.getElementById("start-button");
const pauseButton = document.getElementById("pause-button");
const resetButton = document.getElementById("reset-button");

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

function startTimer() {
    if (!isRunning) {
        startTime = new Date().getTime();
        intervalId = setInterval(updateTimer, 10);
        isRunning = true;
        startButton.disabled = true;
        pauseButton.disabled = false;
    }
}

function pauseTimer() {
    if (isRunning) {
        clearInterval(intervalId);
        isRunning = false;
        startButton.disabled = false;
        pauseButton.disabled = true;
    }
}

function resetTimer() {
    clearInterval(intervalId);
    isRunning = false;
    startTime = 0;
    currentTime = 0;
    minutesElement.textContent = "00";
    secondsElement.textContent = "00";
    millisecondsElement.textContent = "000";
    startButton.disabled = false;
    pauseButton.disabled = true;
}

function updateTimer() {
    currentTime = new Date().getTime() - startTime;
    const minutes = Math.floor(currentTime / 60000);
    const seconds = Math.floor((currentTime % 60000) / 1000);
    const milliseconds = currentTime % 1000;
    minutesElement.textContent = pad(minutes, 2);
    secondsElement.textContent = pad(seconds, 2);
    millisecondsElement.textContent = pad(milliseconds, 3);
}

function pad(number, length) {
    return (number + "").padStart(length, "0");
}
