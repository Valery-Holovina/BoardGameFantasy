const roundsTotal = 3;
let currentRound = 1;
let correctSymbol = "";

const patterns = [
  {
    sequence: ["🔴", "🔴", "🔵", "🔴", "🔴", "🔵"],
    next: "🔴"
  },
  {
    sequence: ["⬆️", "➡️", "⬇️", "⬅️"],
    next: "⬆️"
  },
  {
    sequence: ["⭐", "🌙", "⭐", "🌙", "⭐"],
    next: "🌙"
  }
];

startRound();

function startRound() {
  const pattern = patterns[Math.floor(Math.random() * patterns.length)];

  document.getElementById("sequence").textContent =
    pattern.sequence.join(" ");

  correctSymbol = pattern.next;

  const options = shuffle([
    correctSymbol,
    "❌",
    "⭕",
    "🔺"
  ]);

  document.querySelectorAll(".options button").forEach((btn, i) => {
    btn.textContent = options[i];
  });

  document.getElementById("message").textContent = "";
}

function checkAnswer(button) {
  if (button.textContent === correctSymbol) {
    document.getElementById("message").textContent = "✅ Correct!";
    currentRound++;

    if (currentRound > roundsTotal) {
      document.getElementById("message").textContent = "🎉 You won!";
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
  document.querySelectorAll(".options button")
    .forEach(btn => btn.disabled = true);
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}
