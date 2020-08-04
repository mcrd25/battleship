const Player = (name, board, computer = false) => {

  const moves = [];

  const getName = () => name;

  const getBoard = () => board;

  const makeRandomMove = () => {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    while (moves.includes([x, y])) {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    }
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