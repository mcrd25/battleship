import Gameboard from './GameBoard';
import arrayInArray from '../utilities/helpers';

const Player = (
  name = 'Player',
  computer = false,
) => {
  const board = new Gameboard();
  const moves = [];

  const getName = () => name;

  const getBoard = () => board;

  const makeRandomMove = () => {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    while (arrayInArray(moves, [x, y])) {
      console.log('repeat');
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    }
    console.log(moves);
    moves.push([x, y]);
    return [x, y];
  };

  if (computer) {
    return {
      getName,
      getBoard,
      makeRandomMove,
    };
  }

  return {
    getName,
    getBoard,
  };
};

export default Player;