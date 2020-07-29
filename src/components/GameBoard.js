import Ship from './Ship';

const Gameboard = (shipCount = 10) => {
  const board = Array(10).fill(null).map(() => Array(10).fill(null));
  let sunkCount = 0;
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

  const isHorizontal = (direction) => {
    if (direction === 'horizontal') {
      return true;
    }
    return false;
  };

  const spaceAvailable = (direction, x, y, ship) => {
    if (isHorizontal(direction)) {
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
    if (isHorizontal(direction)) {
      for (let i = y; i < ship.ship.length + y; i += 1) {
        board[x][i] = ship;
      }
    } else {
      for (let i = x; i < ship.ship.length + x; i += 1) {
        board[i][y] = ship;
      }
    }
  };
  const placeShip = (ship, pos, direction = 'horizontal') => {
    const [x, y] = pos;
    if (spaceAvailable(direction, x, y, ship)) {
      placeShipHelper(x, y, { ship, pos, direction }, direction);
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

  const allSunk = () => sunkCount;

  const receiveAttack = (pos) => {
    const [x, y] = pos;
    if (board[x][y] !== null) {
      const ship = board[x][y];
      const [startx, starty] = ship.pos;
      if (isHorizontal(ship.direction)) {
        ship.ship.hit(y - starty);
      } else {
        ship.ship.hit(x - startx);
      }
      if (ship.ship.isSunk()) {
        sunkCount += 1;
      }
      return true;
    }
    return false;
  };
  const getBoard = () => board;

  return {
    placeShip,
    getBoard,
    setDefaultBoard,
    receiveAttack,
    allSunk,
  };
};

export default Gameboard;