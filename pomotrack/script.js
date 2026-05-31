const timerDisplay = document.getElementById("timer");

const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");

let timeLeft = 25 * 60;
let timerInterval = null;

function updateDisplay() {

    const minutes = Math.floor(timeLeft / 60);

    const seconds = timeLeft % 60;

    timerDisplay.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function startTimer() {

    if (timerInterval !== null) {
        return;
    }

    timerInterval = setInterval(() => {

        if (timeLeft > 0) {

            timeLeft--;

            updateDisplay();

        } else {

            clearInterval(timerInterval);

            timerInterval = null;

            alert("Pomodoro Session Complete!");
        }

    }, 1000);
}

function pauseTimer() {

    clearInterval(timerInterval);

    timerInterval = null;
}

function resetTimer() {

    clearInterval(timerInterval);

    timerInterval = null;

    timeLeft = 25 * 60;

    updateDisplay();
}

startBtn.addEventListener("click", startTimer);

pauseBtn.addEventListener("click", pauseTimer);

resetBtn.addEventListener("click", resetTimer);

updateDisplay();