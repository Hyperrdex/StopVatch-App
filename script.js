console.log("hello working");

const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");
const milliSecondsLabel = document.getElementById("milliseconds");


const startButton = document.getElementById("startBtn");
const stopButton = document.getElementById("stopBtn");
const pauseButton = document.getElementById("pauseBtn");
const resetButton = document.getElementById("resetBtn");


let minutes =0;
let seconds =0;
let milliseconds=0;
let interval;

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

function startTimer(){
    if(!interval){
        interval = setInterval(updateTimer,10);
        startButton.disabled = true;
    }
    
}

function stopTimer(){

    // interval = clearInterval(updateTimer);
    clearInterval(interval);
    interval= null;
    minutes = 0;
    seconds = 0;
    milliseconds= 0;
    startButton.disabled = false;
    displayTimer();
}

function pauseTimer(){
    clearInterval(interval);
    interval = null;
    startButton.disabled= false;
}

function resetTimer(){
    clearInterval(interval);
    interval = null;
    minutes=0;
    seconds=0; 
    milliseconds= 0;
    startButton.disabled = false;
    resetButton.disabled = false;

    displayTimer();

}
function updateTimer(){
    milliseconds++;
    if(milliseconds === 100){
        milliseconds= 0;
        seconds++;
        if(seconds === 60){
            seconds=0;
            minutes++;
        }
    }

    displayTimer();
}

function displayTimer(){
    if(milliseconds < 10 ) milliSecondsLabel.textContent= "0" + milliseconds ;
    else milliSecondsLabel.textContent = milliseconds;

    if(seconds < 10) secondsLabel.textContent = "0" + seconds;
    else secondsLabel.textContent = seconds;
    
    if(minutes < 10) minutesLabel.textContent = "0" + minutes;
    else minutesLabel.textContent = minutes;
}