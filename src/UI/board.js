const BoardUI = (gridSize = 10) => {
  const createCell = (className, id) => {
    const cell = document.createElement('div');
    cell.className = className;
    cell.id = id;
    return cell;
  };

  const createGameboardDiv = (id, className) => {
    const gameboardDiv = document.createElement('div');
    gameboardDiv.className = className;
    gameboardDiv.id = id;
    return gameboardDiv;
  };
  const computerMove = (computer, player) => {
    const compMove = computer.makeRandomMove();
    const [x, y] = compMove;
    console.log(compMove);
    const cell = document.getElementById(`${x}-${y}-p`);
    if (player.getBoard().receiveAttack(compMove)) {
      console.log('hit');
      cell.className += ' hit';
      if (player.getBoard().allSunk()) {
        const display = document.querySelector('#display');
        display.innerHTML = 'Computer Won!';
      }
    } else {
      console.log('sea');
      cell.className += ' sea';
    }
  };
  const drawGrid = (id, className, player, opponent, computer = false) => {
    const grid = document.createElement('div');
    grid.id = id;
    grid.className = className;

    for (let x = 0; x < gridSize; x += 1) {
      for (let y = 0; y < gridSize; y += 1) {
        const cell = computer ? createCell('cell', `${x}-${y}`) : createCell('cell', `${x}-${y}-p`);
        if (computer) {
          cell.addEventListener('click', () => {
            const [x2, y2] = cell.id.split('-');
            if (!player.getBoard().getMoves().includes([x2, y2])) {
              if (player.getBoard().receiveAttack([x2, y2])) {
                cell.className += ' hit';
                if (player.getBoard().allSunk()) {
                  const display = document.querySelector('#display');
                  display.innerHTML = 'You Won!';
                } else {
                  computerMove(player, opponent);
                }
              } else {
                cell.className += ' sea';
                computerMove(player, opponent);
              }
            }
          });
        }
        grid.appendChild(cell);
      }
    }
    return grid;
  };

  return {
    createGameboardDiv,
    drawGrid,
  };
};

export default BoardUI;
