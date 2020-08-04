const Player = (name, board) => {

  const getName = () => name;

  const getBoard = () => board;

  return {
    getName,
    getBoard,
  };
};

export default Player;