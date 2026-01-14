
let score = 0;
let time = 5.0;
let started = false;
let interval;

const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");
const barEl = document.getElementById("bar");
const clickBtn = document.getElementById("clickBtn");
const endScreen = document.getElementById("end");
const finalScore = document.getElementById("finalScore");

clickBtn.onclick = () => {
  if (!started) startGame();
  if (time > 0) {
    score++;
    scoreEl.textContent = "Score: " + score;
  }
};

function startGame() {
  started = true;
  interval = setInterval(() => {
    time -= 0.05;
    if (time <= 0) endGame();
    updateUI();
  }, 50);
}

function updateUI() {
  timeEl.textContent = "Time: " + Math.max(time, 0).toFixed(1);
  barEl.style.width = (time / 5 * 100) + "%";
}

function endGame() {
  clearInterval(interval);
  clickBtn.disabled = true;
  endScreen.style.display = "block";
  finalScore.textContent = "Your score: " + score;
}

function restart() {
  score = 0;
  time = 5.0;
  started = false;
  clickBtn.disabled = false;
  endScreen.style.display = "none";
  scoreEl.textContent = "Score: 0";
  updateUI();
}
