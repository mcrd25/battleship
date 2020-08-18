import Gameboard from './components/GameBoard';
import Player from './components/Player';
import Ship from './components/Ship';
import BoardUI from './UI/board';
import PlacementUI from './UI/placement';
import M from 'materialize-css';
import './sass/style.scss';

const boardDOM = new BoardUI();
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

const init = () => {
  const content = document.querySelector('#content');
  const boardsDiv = boardDOM.createGameboardDiv('boards', 'boards-div');
  const grid = boardDOM.drawGrid('player', 'grid disabledDiv', player1, computer);
  const grid2 = boardDOM.drawGrid('computer', 'grid disabledDiv', computer, player1, true);
  const defaultBoard = document.createElement('button');
  const display = document.createElement('div');
  const placementDiv = document.createElement('div');
  const placeButton = document.createElement('button');
  const [ship1x, ship1y] = placementDOM.drawPlacement('ship1');

  display.id = 'display';
  placeButton.id = 'ship1';
  placeButton.className = 'btn waves-effect waves-light use-default';
  placeButton.innerHTML = 'place';
  placeButton.addEventListener('click', () => {
    const x = parseInt(document.getElementById(`${placeButton.id}-x`).value, 10);
    const y = parseInt(document.getElementById(`${placeButton.id}-y`).value, 10);
    const ship = new Ship();
    const direction = 'vertical';
    if (player1.getBoard().placeShip(ship, [x, y], direction)) {
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
  placementDiv.append(ship1x, ship1y, placeButton);
  defaultBoard.className = 'btn waves-effect waves-light use-default';
  defaultBoard.innerHTML = 'Use Default';
  content.appendChild(defaultBoard);
  content.appendChild(placementDiv);
  boardsDiv.append(grid, display, grid2);
  content.appendChild(boardsDiv);
  defaultBoard.addEventListener('click', () => {
    player1.getBoard().setDefaultBoard();
    grid2.className = 'grid';
    // game(grid, grid2);
  });
};
init();
