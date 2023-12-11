console.log('Script is run');
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';



const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
let intervalId;
let pickedDate;

console.log(input);

startBtn.setAttribute('disabled', 'disabled');

function addLeadingZero(number) {
    return number < 10 ? number.padStart(2, '0') : number;
}

const options = {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates, dateStr, instance) {
        
        // Get the picked date
        pickedDate = selectedDates[0];
        // Get the current date
        const currentDate = new Date();
        // Compare the picked date with the current date
        if (pickedDate < currentDate) {
            //console.log("Wrong date! Picked date is in the past.");
            Notiflix.Notify.warning("Please choose a date in the future");
            console.log('notiflix');
            startBtn.setAttribute('disabled', 'disabled');
            
        } else {
            //console.log(`Selected date is valid. ${pickedDate.getTime()}`);
            startBtn.removeAttribute('disabled');
        } 
    },
};

const dateInput = flatpickr(input, options);


function updateTimer() {
    
    const currentDate = new Date();
    const msDifference = pickedDate.getTime() - currentDate.getTime();

 // Check if there is no more remaining time
 if (msDifference <= 0) {  
    clearInterval(intervalId); 
    // Optionally
    console.log("Timer reached zero!");
    input.removeAttribute('disabled');
    return;
}
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const remDays = addLeadingZero(Math.floor(msDifference / day));
    // Remaining hours
    const remHours = addLeadingZero(Math.floor((msDifference % day) / hour));
    // Remaining minutes
    const remMinutes = addLeadingZero(Math.floor(((msDifference % day) % hour) / minute));
    // Remaining seconds
    const remSeconds = addLeadingZero(Math.floor((((msDifference % day) % hour) % minute) / second));

    // Update the HTML elements
    days.innerText = remDays;
    hours.innerText = remHours;
    minutes.innerText = remMinutes;
    seconds.innerText = remSeconds;
}



// Remove the start button click event listener
startBtn.addEventListener('click', () => {
    
    // Update the timer immediately on button click
    updateTimer();
    // Set up the interval to update the timer every second
    intervalId = setInterval(updateTimer, 1000);
    startBtn.setAttribute('disabled', 'disabled');
    input.setAttribute('disabled', 'disabled');
    
});