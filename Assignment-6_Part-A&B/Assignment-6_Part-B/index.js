let time = document.querySelector('.time');
let startBtn = document.getElementById("start");
let pauseBtn = document.getElementById("pause");
let resetBtn = document.getElementById("reset");

let seconds = 0;
let interval = null;

//Event Listener:
startBtn.addEventListener('click', start);
pauseBtn.addEventListener('click', pause);
resetBtn.addEventListener('click', reset);

function timer () {
    seconds++;
    let hrs = Math.floor(seconds/3600);
    let mins = Math.floor((seconds - (hrs * 3600) / 60));
    let secs = seconds % 60;

    if (secs < 10) {
        secs = "0" + secs;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (hrs < 10) {
        hrs = "0" + hrs;
    }

    time.innerHTML = `${hrs}:${mins}`;
}

function start () {
    if (interval) {
        return;
    }
   interval = setInterval(timer,1000);
}

function pause () {
    clearInterval(interval);
    interval = null;
}

function reset () {
    stop();
    seconds = 0;
    time.innerHTML = '00:00';
}