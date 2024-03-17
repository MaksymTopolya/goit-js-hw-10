
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

startBtn.addEventListener("click", handleClick)

function closeModal(params) {
    if (userSelectedDate < Date.now()) {
        iziToast.show({
    title: 'Hey',
    message: 'Please choose a date in the future',
            theme: 'dark',
            position: 'topCenter',
            color: 'black', 
    
});
        startBtn.disabled = true; 
    } else {
        startBtn.disabled = false; 
    }

}


function handleClick(params) {
    let interval = setInterval(()=> {
        let time = Date.now()
        let needToWait = userSelectedDate - time

        if (needToWait <= 0) {
            clearInterval(interval)
        }

        let converted = convertMs(needToWait)
        days.textContent = addLeadingZero(converted.days)
        hours.textContent = addLeadingZero(converted.hours)
        min.textContent = addLeadingZero(converted.minutes)
        sec.textContent = addLeadingZero(converted.seconds)
        input.disabled = true
    },1000)
   
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
        closeModal()
    console.log(selectedDates[0]);
  },
};

flatpickr(input, options); 

