
  const colors = ["red","green","blue"];
  const wordDiv = document.getElementById("word");
  const buttons = document.querySelectorAll("button");
  let score = parseInt(localStorage.getItem("colorMatchScore") || "0");
  const scoreDiv = document.getElementById("score");
  scoreDiv.textContent = `Correct matches: ${score}`;

  function newWord(){
    const text = colors[Math.floor(Math.random()*colors.length)];
    const color = colors[Math.floor(Math.random()*colors.length)];
    wordDiv.textContent = text;
    wordDiv.style.color = color;
    wordDiv.dataset.color = color;
  }

  buttons.forEach(btn=>{
    btn.addEventListener("click", ()=>{
      if(btn.dataset.color === wordDiv.dataset.color){
        score++;
        localStorage.setItem("colorMatchScore",score);
        scoreDiv.textContent = `Correct matches: ${score}`;
      }
      newWord();
    });
  });

  newWord();
