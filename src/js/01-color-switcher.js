const startBtnEl = document.querySelector('button[data-start]');
const stopBtnEl = document.querySelector('button[data-stop]');

let intervalID = null;
stopBtnEl.disabled = true;

startBtnEl.addEventListener('click', onStartBtnClick);
stopBtnEl.addEventListener('click', onStopBtnClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onStartBtnClick() {
  document.body.style.backgroundColor = getRandomHexColor();

  stopBtnEl.disabled = false;
  startBtnEl.disabled = true;

  intervalID = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopBtnClick() {
  clearInterval(intervalID);
  startBtnEl.disabled = false;
  stopBtnEl.disabled = true;
}
