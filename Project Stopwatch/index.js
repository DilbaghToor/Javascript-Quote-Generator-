//Variables for buttons

const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

//Variables for time values

let seconds = 0;
let minutes = 0;
let hours = 0;

//variables for Leading Zero

let leadingSecond = 0;
let leadingMinutes = 0;
let leadingHour = 0;

//variavles for set interval &  timeStatus

let timeIntervel = null;
let timeStatus = "stopped";

//Stop Watch Function

function stopWatch() {

    seconds++;

    if(seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    if(seconds < 10) {
        leadingSecond = "0" + seconds.toString();
    } else {
        leadingSecond = seconds;
    }


    if(minutes < 10) {
        leadingMinutes = "0" + minutes.toString();
    } else {
        leadingMinutes = minutes;
    }


    if(hours < 10) {
        leadingHour = "0" + hours.toString();
    } else {
        leadingHour = hours;
    }

    let displayTimer = document.getElementById('timer');

    displayTimer.innerText = leadingHour + ":" + leadingMinutes + ":" + leadingSecond;
}


//eventListner for buttons 

startStopBtn.addEventListener('click', function(){

    if(timeStatus === "stopped") {
        timeIntervel = window.setInterval(stopWatch, 1000);
        startStopBtn.innerHTML = '<i class="fa-solid fa-pause" id="pause"></i>';
        timeStatus = "started";
    } else {
        window.clearInterval(timeIntervel);
        startStopBtn.innerHTML = '<i class="fa-solid fa-play" id="play"></i>';
        timeStatus = "stopped";
    }
});

resetBtn.addEventListener('click', function(){
    
    window.clearInterval(timeIntervel);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('timer').innerHTML = "00:00:00";

});

