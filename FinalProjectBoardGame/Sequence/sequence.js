

  const runes = document.querySelectorAll(".rune");
  const message = document.getElementById("message");
  const countDisplay = document.getElementById("count");

  let playerSequence = [];
  let correctSequence = [];
  let unlockCount = parseInt(localStorage.getItem("spellUnlockCount") || "0");


  countDisplay.textContent = `Times spell unlocked: ${unlockCount}`;

 
  function generateSequence() {
    correctSequence = [];
    let options = ["1","2","3","4"];
    while(options.length > 0){
      let index = Math.floor(Math.random() * options.length);
      correctSequence.push(options.splice(index,1)[0]);
    }
    console.log("New sequence:", correctSequence); 
  }


  generateSequence();

  runes.forEach(rune => {
    rune.addEventListener("click", () => {
      playerSequence.push(rune.dataset.id);

      for(let i = 0; i < playerSequence.length; i++){
        if(playerSequence[i] !== correctSequence[i]){
          message.textContent = "❌ Wrong sequence! Try again.";
          playerSequence = [];
          return;
        }
      }

     
      if(playerSequence.length === correctSequence.length){
        unlockCount++;
        localStorage.setItem("spellUnlockCount", unlockCount);
        countDisplay.textContent = `Times spell unlocked: ${unlockCount}`;
        message.textContent = "✨ Spell Unlocked! Try the next spell sequence! ✨";
        playerSequence = [];
        generateSequence();
      } else {
        message.textContent = "Good! Keep going...";
      }
    });
  });
