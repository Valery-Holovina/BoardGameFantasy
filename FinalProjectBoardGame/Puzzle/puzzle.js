

  const puzzleDiv = document.getElementById("puzzle");
  const message = document.getElementById("message");
  const countDisplay = document.getElementById("count");

  let puzzle = [1,2,3,4,5,6,7,8,null]; 
  let completeCount = parseInt(localStorage.getItem("puzzleCompleteCount") || "0");

  countDisplay.textContent = `Puzzles completed: ${completeCount}`;

  function shuffle(array) {
    let shuffled = array.slice();
    for(let i = shuffled.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i+1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  function drawPuzzle() {
    puzzleDiv.innerHTML = "";
    puzzle.forEach((num, index) => {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      if(num === null){
        tile.classList.add("empty");
      } else {
        tile.textContent = num;
        tile.addEventListener("click", () => moveTile(index));
      }
      puzzleDiv.appendChild(tile);
    });
  }

  function moveTile(index){
    const emptyIndex = puzzle.indexOf(null);
    const validMoves = [emptyIndex-1, emptyIndex+1, emptyIndex-3, emptyIndex+3];
    if(validMoves.includes(index)){
      [puzzle[index], puzzle[emptyIndex]] = [puzzle[emptyIndex], puzzle[index]];
      drawPuzzle();
      checkWin();
    }
  }

  function checkWin(){
    const isComplete = puzzle.slice(0,8).every((num, i) => num === i+1);
    if(isComplete){
      message.textContent = "🎉 Puzzle Completed!";
      completeCount++;
      localStorage.setItem("puzzleCompleteCount", completeCount);
      countDisplay.textContent = `Puzzles completed: ${completeCount}`;
      setTimeout(() => {
        puzzle = shuffle([1,2,3,4,5,6,7,8,null]);
        message.textContent = "";
        drawPuzzle();
      }, 1500);
    }
  }

  puzzle = shuffle(puzzle);
  drawPuzzle();
