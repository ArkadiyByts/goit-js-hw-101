const body = document.body;
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let colChange = null;
console.log(body);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

stopBtn.setAttribute('disabled', 'disabled');

startBtn.addEventListener("click", () => {
  colChange = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
}, 1000);
    startBtn.setAttribute('disabled', 'disabled');
    stopBtn.removeAttribute('disabled', 'disabled');
});

stopBtn.addEventListener("click", () => {
    clearInterval(colChange);
    startBtn.removeAttribute('disabled');
    stopBtn.setAttribute('disabled', 'disabled');
});