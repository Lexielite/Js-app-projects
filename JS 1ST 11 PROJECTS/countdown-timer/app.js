const daysEl = document.getElementById('days');
const hoursEl =document.getElementById('hours');
const minutesEl =document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');



const christmas = '25 Dec 2023';

function countdown() {
const christmasDate = new Date(christmas);
const currentDate = new Date();


const totalSeconds = (christmasDate - currentDate) / 1000;

const days = Math.floor(totalSeconds / 3600 / 24);
const hours = Math.floor(totalSeconds / 3600) % 24;
const minutes = Math.floor(totalSeconds / 60) % 60;
const seconds = Math.floor(totalSeconds) % 60;


daysEl.innerHTML = days;
hoursEl.innerHTML = formatTime(hours);
minutesEl.innerHTML = formatTime(minutes);
secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();
setInterval(countdown, 1000)




// // For record-keeping

// // const date1 = new Date('8/27/2023');
// // const date2 = new Date('12/25/2023');
// // const diffTime = Math.abs(date2 - date1);
// // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
// // console.log(diffTime + " milliseconds");
// // console.log(diffDays + " days");





