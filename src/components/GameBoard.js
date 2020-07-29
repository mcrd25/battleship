import Ship from './Ship';

const Gameboard = () => {
  const board = Array(10).fill(null).map(() => Array(10).fill(null));
  const ships = [
    {
      ship: new Ship(2),
      pos: [0, 0],
      direction: 'horizontal',
    },
  ];
  const spaceAvailable = (direction, x, y, ship) => {
    if (direction === 'horizontal') {
      for (let i = y; i < ship.length; i += 1) {
        if (board[x][i] !== null) {
          return false;
        }
      }
    } else {
      for (let i = x; i < ship.length; i += 1) {
        if (board[i][y] !== null) {
          return false;
        }
      }
    }
    return true;
  };
  const placeShipHelper = (x, y, ship, direction) => {
    if (direction === 'horizontal') {
      for (let i = y; i < ship.length; i += 1) {
        board[x][i] = ship;
      }
    } else {
      for (let i = x; i < ship.length; i += 1) {
        board[i][y] = ship;
      }
    }
  };
  const placeShip = (pos, ship, direction = 'horizontal') => {
    const [x, y] = pos;
    if (spaceAvailable(direction, x, y, ship)) {
      placeShipHelper(x, y, ship, direction);
      return true;
    }
    return false;
  };

  const getBoard = () => board;

  return {
    placeShip,
    getBoard,
  };
};

export default Gameboard;