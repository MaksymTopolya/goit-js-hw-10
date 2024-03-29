
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const days = document.querySelector("[data-days]")
const hours = document.querySelector("[data-hours]")
const min = document.querySelector("[data-minutes]")
const sec = document.querySelector("[data-seconds]")
const input = document.getElementById("datetime-picker"); 
const startBtn = document.querySelector("[data-start]")


let userSelectedDate = null
let interval = null
startBtn.addEventListener("click", handleClick)

function validateSelectedDate() {
    var currentDate = new Date();
    if (userSelectedDate.getTime() < currentDate.getTime()) {
        iziToast.error({
    title: 'Hey',
    message: 'Please choose a date in the future',
            theme: 'dark',
            position: 'topCenter',
            color: 'black', 
    
});
        startBtn.disabled = true; 

        if (interval) {
            clearInterval(interval); 
        }

    } else {
        startBtn.disabled = false; 
    }

}

startBtn.disabled = true; 

function handleClick() {
    if (interval) clearInterval(interval);

    interval = setInterval(() => {
        const currentTime = Date.now();
        const remainingTime = userSelectedDate - currentTime;

        if (remainingTime <= 0) {
            clearInterval(interval);
            updateTimerDisplay(0, 0, 0, 0);
            startBtn.disabled = true;
            return; 
        }

        const convertedTime = convertMs(remainingTime);
        console.log(convertedTime)
        updateTimerDisplay(convertedTime.days, convertedTime.hours, convertedTime.minutes, convertedTime.seconds);
        startBtn.disabled = true;
    }, 1000);
}

function updateTimerDisplay(days, hours, minutes, seconds) {
    document.querySelector("[data-days]").textContent = addLeadingZero(days);
    document.querySelector("[data-hours]").textContent = addLeadingZero(hours);
    document.querySelector("[data-minutes]").textContent = addLeadingZero(minutes);
    document.querySelector("[data-seconds]").textContent = addLeadingZero(seconds);
}


function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}





const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        userSelectedDate = selectedDates[0]
        validateSelectedDate()
    console.log(selectedDates[0]);
  },
};

flatpickr(input, options); 

