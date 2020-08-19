const PlacementUI = () => {
  const drawPlacement = (shipName, ship, player, length = 2) => {
    const xInput = document.createElement('input');
    const yInput = document.createElement('input');
    const xLabel = document.createElement('label');
    const yLabel = document.createElement('label');
    const shipDiv = document.createElement('div');
    const placeButton = document.createElement('button');
    const horizontalRadio = document.createElement('input');
    const horizontalLabel = document.createElement('label');
    const verticalRadio = document.createElement('input');
    const verticalLabel = document.createElement('label');

    horizontalRadio.value = 'horizontal';
    horizontalRadio.id = `${shipName}-h`;
    horizontalRadio.type = 'radio';
    horizontalRadio.name = `${shipName}-direction`;
    horizontalRadio.checked = true;
    horizontalLabel.htmlFor = horizontalRadio.id;
    horizontalLabel.innerHTML = 'horizontal';
    verticalRadio.value = 'vertical';
    verticalRadio.id = `${shipName}-v`;
    verticalRadio.type = 'radio';
    verticalRadio.name = `${shipName}-direction`;
    verticalLabel.htmlFor = verticalRadio.id;
    verticalLabel.innerHTML = 'vertical';
    placeButton.id = shipName;
    placeButton.className = 'btn waves-effect waves-light use-default place-btn';
    placeButton.innerHTML = 'place';
    placeButton.addEventListener('click', () => {
      const x = parseInt(document.getElementById(`${placeButton.id}-x`).value, 10);
      const y = parseInt(document.getElementById(`${placeButton.id}-y`).value, 10);
      const direction = document.querySelector(`input[name=${shipName}-direction]:checked`).value;
      if (player.getBoard().placeShip(ship, [x, y], direction)) {
        placeButton.className += ' disabledDiv place-btn-disabled';
        const allPlaces = document.querySelectorAll('.place-btn-disabled');
        console.log(allPlaces);
        if (allPlaces.length === 10) {
          const start = document.querySelector('#start');
          const display = document.querySelector('#display');
          start.className = 'btn waves-effect waves-light use-default';
          display.innerHTML = 'Ok, we can start now!';
        }
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
    yLabel.htmlFor = yInput.id;
    yLabel.innerHTML = 'y';
    xInput.className = 'placement-input';
    yInput.className = 'placement-input';
    return [xInput, xLabel, yInput, yLabel, shipDiv, placeButton, horizontalRadio, horizontalLabel, verticalRadio, verticalLabel];
  };

  return {
    drawPlacement,
  };
};

export default PlacementUI;