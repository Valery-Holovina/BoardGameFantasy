
  let wins = parseInt(localStorage.getItem("magicWins") || "0");
  const buttons = document.querySelectorAll("button");
  const message = document.getElementById("message");
  const winsDiv = document.getElementById("wins");
  winsDiv.textContent = `Wins: ${wins}`;

  function newMagicNumber(){ 
    return Math.floor(Math.random()*3)+1; 
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const magic = newMagicNumber();
      const guess = parseInt(btn.dataset.number);
      if(guess === magic){
        message.textContent = `✨ Correct! It was ${magic}`;
        wins++;
        localStorage.setItem("magicWins", wins);
        winsDiv.textContent = `Wins: ${wins}`;
      } else {
        message.textContent = `❌ Wrong! It was ${magic}, try again`;
      }
    });
  });
