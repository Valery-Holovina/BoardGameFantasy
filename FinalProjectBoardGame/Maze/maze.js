

  const container = document.getElementById("game-container");
  const message = document.getElementById("message");

  const maze = [
    [1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,1,0,0,0,0,1],
    [1,0,1,0,1,0,1,1,0,1],
    [1,0,1,0,0,0,0,1,0,1],
    [1,0,1,1,1,1,0,1,0,1],
    [1,0,0,0,0,1,0,1,0,1],
    [1,1,1,1,0,1,0,1,0,1],
    [1,0,0,1,0,0,0,1,0,1],
    [1,0,0,0,0,1,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1],
  ]; // 1 = wall, 0 = path

  const exit = {x:8, y:8}; // exit position
  let player = {x:1, y:1}; // start position

 
  function drawMaze() {
    container.innerHTML = "";
    for(let y = 0; y < 10; y++){
      for(let x = 0; x < 10; x++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        if(x === player.x && y === player.y) {
          cell.classList.add("player");
        } else if(x === exit.x && y === exit.y) {
          cell.classList.add("exit");
        } else if(maze[y][x] === 1){
          cell.classList.add("wall");
        } else {
          cell.classList.add("path");
        }
        container.appendChild(cell);
      }
    }
  }

  drawMaze();


  document.addEventListener("keydown", e => {
    let newX = player.x;
    let newY = player.y;

    if(e.key === "ArrowUp") newY--;
    if(e.key === "ArrowDown") newY++;
    if(e.key === "ArrowLeft") newX--;
    if(e.key === "ArrowRight") newX++;

    if(maze[newY][newX] === 0){
      player.x = newX;
      player.y = newY;
    }

    drawMaze();

    if(player.x === exit.x && player.y === exit.y){
      message.textContent = "🎉 You escaped the maze!";
      localStorage.setItem("mazeWinCount", parseInt(localStorage.getItem("mazeWinCount")||0)+1);
      setTimeout(() => {
        player = {x:1, y:1};
        drawMaze();
        message.textContent = "Use arrow keys to reach the green exit!";
      }, 1500);
    }
  });
