const boardSize = 5; 
  const totalTreasures = 5;
  let treasuresFound = 0;

  const board = document.getElementById('board');

  
  const cells = [];
  for (let i = 0; i < boardSize * boardSize; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.index = i;
    board.appendChild(cell);
    cells.push(cell);
  }


  const treasureIndexes = [];
  while (treasureIndexes.length < totalTreasures) {
    const randomIndex = Math.floor(Math.random() * boardSize * boardSize);
    if (!treasureIndexes.includes(randomIndex)) {
      treasureIndexes.push(randomIndex);
    }
  }


  cells.forEach(cell => {
    cell.addEventListener('click', () => {
      const index = parseInt(cell.dataset.index);
      if (cell.classList.contains('found')) return; 

      if (treasureIndexes.includes(index)) {
        cell.textContent = '💎';
        cell.classList.add('found');
        treasuresFound++;
        document.getElementById('status').textContent = 
          `Treasures found: ${treasuresFound} / ${totalTreasures}`;
      } else {
        cell.textContent = '❌';
        setTimeout(() => cell.textContent = '', 500);
      }

      if (treasuresFound === totalTreasures) {
        alert('🎉 Congratulations! You found all the treasures!');
      }
    });
  });