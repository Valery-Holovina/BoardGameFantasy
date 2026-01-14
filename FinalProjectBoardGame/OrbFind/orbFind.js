
  const container = document.getElementById("game-container");
  const orb = document.getElementById("orb");
  const scoreDisplay = document.getElementById("score");
  const timerDisplay = document.getElementById("timer");
  const message = document.getElementById("message");

  let score = 0;
  let highScore = parseInt(localStorage.getItem("magicOrbHighScore") || "0");
  let timeLeft = 30; 
  let gameActive = true;
  let orbTimeout;

  scoreDisplay.textContent = `Score: ${score} | High Score: ${highScore}`;

  function moveOrb() {
    if(!gameActive) return; 

    const maxX = container.clientWidth - orb.clientWidth;
    const maxY = container.clientHeight - orb.clientHeight;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    orb.style.left = x + "px";
    orb.style.top = y + "px";
    orb.style.display = "block";

    orbTimeout = setTimeout(() => {
      orb.style.display = "none";
      if(gameActive) moveOrb(); 
    }, 1500);
  }

  orb.addEventListener("click", () => {
    if(!gameActive) return;

    score++;
    scoreDisplay.textContent = `Score: ${score} | High Score: ${highScore}`;
    orb.style.display = "none";
    clearTimeout(orbTimeout); 
    if(score > highScore){
      highScore = score;
      localStorage.setItem("magicOrbHighScore", highScore);
      scoreDisplay.textContent = `Score: ${score} | High Score: ${highScore}`;
    }
    if(gameActive) moveOrb(); 
  });


  const timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Time left: ${timeLeft}s`;

    if(timeLeft <= 0){
      gameActive = false;
      clearInterval(timerInterval);
      clearTimeout(orbTimeout);
      orb.style.display = "none";
      message.textContent = `Time's up! Final Score: ${score}`;
    }
  }, 1000);

  moveOrb();
