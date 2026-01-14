const roundsTotal = 3;
let currentRound = 1;

const symbols = [
  { original: "▶︎", mirror: "◀" },
  { original: "◀", mirror: "▶︎" },
  { original: "▲", mirror: "▼" },
  { original: "▼", mirror: "▲" }
];

let correctAnswer = "";

startRound();

function startRound() {
  const random = symbols[Math.floor(Math.random() * symbols.length)];
  document.getElementById("symbol").textContent = random.original;
  correctAnswer = random.mirror;

  document.getElementById("message").textContent = "";
}

function checkAnswer(buttonId) {
  const chosenSymbol = document.getElementById(buttonId).textContent;

  if (chosenSymbol === correctAnswer) {
    document.getElementById("message").textContent = "✅ Correct!";
    currentRound++;

    if (currentRound > roundsTotal) {
      document.getElementById("message").textContent = "🎉 You won the game!";
      disableButtons();
    } else {
      document.getElementById("round").textContent = currentRound;
      setTimeout(startRound, 800);
    }
  } else {
    document.getElementById("message").textContent = "❌ Wrong! You lost.";
    disableButtons();
  }
}

function disableButtons() {
  document.querySelectorAll("button").forEach(btn => btn.disabled = true);
}
