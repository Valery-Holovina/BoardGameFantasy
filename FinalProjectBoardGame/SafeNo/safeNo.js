

let value = 0;
let running = false;
let timer;
let boomAt;

const valueEl = document.getElementById("value");
const fillEl = document.getElementById("fill");
const stopBtn = document.getElementById("stopBtn");
const startBtn = document.getElementById("startBtn");
const endScreen = document.getElementById("end");
const resultEl = document.getElementById("result");

startBtn.onclick = start;
stopBtn.onclick = stop;

function start() {
  value = 0;
  boomAt = Math.floor(Math.random() * 60) + 40; // hidden danger
  running = true;
  endScreen.style.display = "none";
  stopBtn.disabled = false;
  startBtn.disabled = true;

  timer = setInterval(() => {
    value++;
    updateUI();
    if (value >= boomAt) explode();
  }, 80);
}

function updateUI() {
  valueEl.textContent = value;
  fillEl.style.width = Math.min(value, 100) + "%";
}

function stop() {
  if (!running) return;
  running = false;
  clearInterval(timer);
  stopBtn.disabled = true;
  resultEl.textContent = "SAFE! Score: " + value;
  endScreen.style.display = "block";
  startBtn.disabled = false;
}

function explode() {
  running = false;
  clearInterval(timer);
  stopBtn.disabled = true;
  resultEl.textContent = "💥 BOOM! Score: 0";
  endScreen.style.display = "block";
  startBtn.disabled = false;
}

function restart() {
  startBtn.disabled = false;
  endScreen.style.display = "none";
  valueEl.textContent = "0";
  fillEl.style.width = "0%";
}

