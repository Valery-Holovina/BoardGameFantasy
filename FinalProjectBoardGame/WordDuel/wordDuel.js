let correctAnswer = null;

loadFact();

function loadFact() {
  fetch("https://opentdb.com/api.php?amount=1&type=boolean")
    .then(response => response.json())
    .then(data => {
      const question = data.results[0];
      document.getElementById("fact").innerHTML = question.question;
      correctAnswer = question.correct_answer === "True";
    })
    .catch(() => {
      document.getElementById("fact").textContent =
        "Error loading fact. Try again.";
    });
}

function answer(choice) {
  const message = document.getElementById("message");

  if (choice === correctAnswer) {
    message.textContent = "✅ Correct! You win.";
  } else {
    message.textContent = "❌ Wrong! You lose.";
  }

  disableButtons();
}

function disableButtons() {
  document.querySelectorAll("button")
    .forEach(btn => btn.disabled = true);
}
