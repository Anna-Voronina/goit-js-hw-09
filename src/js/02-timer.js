import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  dateInputEl: document.querySelector('#datetime-picker'),
  startBtnEl: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

let dateInputValue = '';
refs.startBtnEl.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: '',
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < Date.now()) {
      Notify.failure('Please choose a date in the future');
      return;
    }

    dateInputValue = selectedDates[0];
    refs.startBtnEl.disabled = false;
  },
};

flatpickr(refs.dateInputEl, options);

refs.startBtnEl.addEventListener('click', onStartBtnClick);

function onStartBtnClick() {
  const intervalID = setInterval(() => {
    const diff = dateInputValue - Date.now();

    if (diff <= 0) {
      stopInterval(intervalID);
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(diff);
    refs.days.textContent = addLeadingZero(days);
    refs.hours.textContent = addLeadingZero(hours);
    refs.minutes.textContent = addLeadingZero(minutes);
    refs.seconds.textContent = addLeadingZero(seconds);
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function stopInterval(id) {
  clearInterval(id);
}
