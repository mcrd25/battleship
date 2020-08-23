import Player from './components/Player';
import Ship from './components/Ship';
import BoardUI from './UI/board';
import PlacementUI from './UI/placement';

import './sass/style.scss';

const boardDOM = new BoardUI();
const ships = [
  {
    ship: new Ship(1),
    pos: [0, 0],
    direction: 'horizontal',
  },
  {
    ship: new Ship(1),
    pos: [1, 0],
    direction: 'horizontal',
  },
  {
    ship: new Ship(1),
    pos: [2, 0],
    direction: 'horizontal',
  },
  {
    ship: new Ship(1),
    pos: [3, 0],
    direction: 'horizontal',
  },
  {
    ship: new Ship(2),
    pos: [4, 0],
    direction: 'horizontal',
  },
  {
    ship: new Ship(2),
    pos: [5, 0],
    direction: 'horizontal',
  },
  {
    ship: new Ship(2),
    pos: [6, 0],
    direction: 'horizontal',
  },
  {
    ship: new Ship(3),
    pos: [7, 0],
    direction: 'horizontal',
  },
  {
    ship: new Ship(3),
    pos: [8, 0],
    direction: 'horizontal',
  },
  {
    ship: new Ship(4),
    pos: [9, 0],
    direction: 'horizontal',
  },

];
const placementDOM = new PlacementUI();
const player1 = new Player('Player1');
const computer = new Player('computer', true);
computer.getBoard().setDefaultBoard();

const placementDivs = (ships, parent) => {
  const row1 = document.createElement('div');
  const row2 = document.createElement('div');
  row1.className = 'place-row';
  row2.className = 'place-row';
  for (let i = 0; i < ships.length; i += 1) {
    const placementDiv = document.createElement('div');
    const [
      ship1x, labelx, ship1y, labely, shipDiv, placeButton, hLabel, vLabel,
    ] = placementDOM.drawPlacement(`ship${i + 1}`, ships[i].ship, player1, ships[i].ship.length);
    placementDiv.className = 'placement';
    placementDiv.append(
      shipDiv, labelx, ship1x, labely, ship1y, hLabel, vLabel, placeButton,
    );
    if (i < parseInt(ships.length / 2, 10)) {
      row1.appendChild(placementDiv);
    } else {
      row2.appendChild(placementDiv);
    }
    parent.append(row1, row2);
  }
};

const init = () => {
  const content = document.querySelector('#content');
  const boardsDiv = boardDOM.createGameboardDiv('boards', 'boards-div');
  const grid = boardDOM.drawGrid('player', 'grid disabledDiv', player1, computer);
  const grid2 = boardDOM.drawGrid('computer', 'grid disabledDiv', computer, player1, true);
  const display = document.createElement('div');
  const instructionsDiv = document.createElement('div');
  const startDiv = document.createElement('div');
  const instruction = document.createElement('div');
  const instructionsP = document.createElement('p');
  const startBtn = document.createElement('button');

  instructionsDiv.id = 'instructions';
  instructionsP.className = 'instruction-text center';
  instructionsP.innerHTML = 'You have to place all ships before starting game. x represents the row and y the column. You must enter numbers between 0 and 9';
  instruction.appendChild(instructionsP);
  instructionsDiv.appendChild(instruction);
  display.id = 'display';
  startBtn.id = 'start';
  startBtn.className = 'btn waves-effect waves-light use-default disabledDiv';
  startBtn.innerHTML = 'Start';
  startDiv.className = 'center';
  startDiv.appendChild(startBtn);
  placementDivs(ships, instructionsDiv);
  boardsDiv.append(grid, display, grid2);
  content.append(instructionsDiv, startDiv, boardsDiv);
  startBtn.addEventListener('click', () => {
    display.innerHTML = 'Your turn';
    grid2.className = 'grid';
    startBtn.className += ' disabledDiv';
  });
};
init();
