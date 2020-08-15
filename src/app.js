import Gameboard from './components/GameBoard';
import Player from './components/Player';
import Ship from './components/Ship';
import BoardUI from './UI/board';
import M from 'materialize-css';
import './sass/style.scss';

const boardDOM = new BoardUI();
const player1 = new Player('Player1');
const computer = new Player('computer', true);
computer.getBoard().setDefaultBoard();

const move  = () => {
  const turn = player1.getName();
  const display = document.querySelector('#display');
  if (turn === 'computer') {
    display.innerHTML = 'Computer\'s turn';
    const compMove = computer.makeRandomMove();
    player1.getBoard().receiveAttack(compMove);
    const cell = document.getElement
  } else {
    display.innerHTML = `${player1.getName()}'s turns`;
  }

}

const init = () => {
  const content = document.querySelector('#content');
  const boardsDiv = boardDOM.createGameboardDiv('boards', 'boards-div');
  const grid = boardDOM.drawGrid('player', 'grid', player1.getBoard());
  const grid2 = boardDOM.drawGrid('computer', 'grid', computer.getBoard(), true);
  const defaultBoard = document.createElement('button');
  const display = document.createElement('div');
  display.id = 'display';
  defaultBoard.className = 'btn waves-effect waves-light use-default';
  defaultBoard.innerHTML = 'Use Default';
  defaultBoard.addEventListener('click', () => {
    player1.getBoard().setDefaultBoard();
  });
  content.appendChild(defaultBoard);
  boardsDiv.append(grid, display, grid2);
  content.appendChild(boardsDiv);
};
init();
