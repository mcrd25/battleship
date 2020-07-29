import Ship from './Ship';

const Gameboard = () => {
  const board = Array(10).fill(null).map(() => Array(10).fill(null));
  const defaultPlacements = [
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
  const placeShip = (ship, pos, direction = 'horizontal') => {
    const [x, y] = pos;
    if (spaceAvailable(direction, x, y, ship)) {
      placeShipHelper(x, y, ship, direction);
      return true;
    }
    return false;
  };

  const setDefaultBoard = () => {
    let ship;
    for (let i = 0; i < defaultPlacements.length; i += 1) {
      ship = defaultPlacements[i];
      placeShip(ship.ship, ship.pos, ship.direction);
    }
  };

  const getBoard = () => board;

  return {
    placeShip,
    getBoard,
    setDefaultBoard,
  };
};

export default Gameboard;