import Gameboard from './components/GameBoard';
import Player from './components/Player';
import Ship from './components/Ship';
import BoardUI from './UI/board';
import M from 'materialize-css';
import './sass/style.scss';


const boardDOM = new BoardUI();

const init = () => {
  const content = document.querySelector('#content');
  const boardsDiv = boardDOM.createGameboardDiv('boards', 'boards-div');
  const grid = boardDOM.drawGrid('player', 'grid');
  const grid2 = boardDOM.drawGrid('computer', 'grid');
  boardsDiv.append(grid, grid2);
  content.appendChild(boardsDiv);
};
init();
