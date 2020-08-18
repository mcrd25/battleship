import Gameboard from './components/GameBoard';
import Player from './components/Player';
import Ship from './components/Ship';
import BoardUI from './UI/board';
import PlacementUI from './UI/placement';
import M from 'materialize-css';
import './sass/style.scss';

M.AutoInit();

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

const computerMove = (display) => {
  const compMove = computer.makeRandomMove();
  const [x, y] = compMove;
  const cell = document.getElementById(`${x}-${y}-p`);
  if (player1.getBoard().receiveAttack(compMove)) {
    console.log('hit');
    cell.className += ' red';
    if (player1.getBoard().allSunk()) {
      display.innerHTML = 'Computer Won!';
    }
  } else {
    console.log('sea');
    cell.className += ' blue';
  }
};

const move = (turn, playerGrid, computerGrid) => {
  const display = document.querySelector('#display');
  if (turn === 'computer') {
    computerGrid.className += ' disabledDiv';
    playerGrid.className = 'grid';
    display.innerHTML = 'Computer\'s turn';
    computerMove(display);
    console.log('comp');
  } else {
    const prevPlayerMoves = player1.getBoard().getMoves().length;
    playerGrid.className += ' disabledDiv';
    computerGrid.className = 'grid';
    console.log('player');
    setTimeout(() => { display.innerHTML = `${player1.getName()}'s turns`; }, 10000);
    // while (prevPlayerMoves === player1.getBoard().getMoves().length) {
    // }
  }
};

const game = (playerGrid, computerGrid) => {
  let turn = player1.getName();
  console.log('start game');
  while (!player1.getBoard().allSunk() && !computer.getBoard().allSunk()) {
    move(turn, playerGrid, computerGrid);
    turn = turn === 'computer' ? player1.getName() : computer.getName();
  }
};

const placementDivs = (ships, parent) => {
  for (let i = 0; i < ships.length; i += 1) {
    const placementDiv = document.createElement('div');
    const [ship1x, labelx, ship1y, labely, shipDiv, placeButton] = placementDOM.drawPlacement(`ship${i + 1}`, ships[i].ship, player1, ships[i].ship.length);
    placementDiv.append(shipDiv, labelx, ship1x, labely, ship1y, placeButton);
    parent.appendChild(placementDiv);
  }
};

const init = () => {
  const content = document.querySelector('#content');
  const boardsDiv = boardDOM.createGameboardDiv('boards', 'boards-div');
  const grid = boardDOM.drawGrid('player', 'grid disabledDiv', player1, computer);
  const grid2 = boardDOM.drawGrid('computer', 'grid disabledDiv', computer, player1, true);
  const defaultBoard = document.createElement('button');
  const display = document.createElement('div');
  const instructionsDiv = document.createElement('div');
  display.id = 'display';
  defaultBoard.className = 'btn waves-effect waves-light use-default';
  defaultBoard.innerHTML = 'Use Default';
  placementDivs(ships, instructionsDiv);
  boardsDiv.append(grid, display, grid2);
  content.append(instructionsDiv, boardsDiv);
  defaultBoard.addEventListener('click', () => {
    player1.getBoard().setDefaultBoard();
    grid2.className = 'grid';
  });
};
init();
