const PlacementUI = () => {
  const drawPlacement = (shipName, ship, player, length = 2) => {
    const xInput = document.createElement('input');
    const yInput = document.createElement('input');
    const xLabel = document.createElement('label');
    const yLabel = document.createElement('label');
    const shipDiv = document.createElement('div');
    const placeButton = document.createElement('button');

    placeButton.id = shipName;
    placeButton.className = 'btn waves-effect waves-light use-default';
    placeButton.innerHTML = 'place';
    placeButton.addEventListener('click', () => {
      const x = parseInt(document.getElementById(`${placeButton.id}-x`).value, 10);
      const y = parseInt(document.getElementById(`${placeButton.id}-y`).value, 10);
      const direction = 'vertical';
      if (player.getBoard().placeShip(ship, [x, y], direction)) {
        placeButton.className += 'disabledDiv';
        if (direction === 'horizontal') {
          for (let i = 0; i < ship.length; i += 1) {
            const cell = document.getElementById(`${x}-${y + i}-p`);
            cell.className += ' ship';
          }
        } else {
          for (let i = 0; i < ship.length; i += 1) {
            const cell = document.getElementById(`${x + i}-${y}-p`);
            cell.className += ' ship';
          }
        }
      }
    });

    for (let i = 0; i < length; i += 1) {
      const cell = document.createElement('div');
      cell.className = 'single-cell';
      shipDiv.appendChild(cell);
    }

    xInput.id = `${shipName}-x`;
    xLabel.htmlFor = xInput.id;
    xLabel.innerHTML = 'x';
    yInput.id = `${shipName}-y`;
    yLabel.for = yInput.id;
    yLabel.innerHTML = 'y';
    xInput.className = 'placement-input';
    yInput.className = 'placement-input';
    return [xInput, xLabel, yInput, yLabel, shipDiv, placeButton];
  };

  return {
    drawPlacement,
  };
};

export default PlacementUI;