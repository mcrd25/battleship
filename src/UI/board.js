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

  const drawGrid = (id, className) => {
    const grid = document.createElement('div');
    grid.id = id;
    grid.className = className;
    for (let x = 0; x < gridSize; x += 1) {
      for (let y = 0; y < gridSize; y += 1) {
        const cell = createCell('cell', `${x}-${y}`);
        cell.addEventListener('click', () => {
          cell.className += ' blue';
        });
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
