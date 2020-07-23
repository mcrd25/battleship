import Ship from './Ship';

const Gameboard = () => {
  const board = {
    0: {
      ship: new Ship(1),
      direction: 'horizontal',
    },
    10: {
      ship: new Ship(1),
      direction: 'horizontal',
    },
    20: {
      ship: new Ship(1),
      direction: 'horizontal',
    },
    30: {
      ship: new Ship(1),
      direction: 'horizontal',
    },
    40: {
      ship: new Ship(2),
      direction: 'horizontal',
    },
    50: {
      ship: new Ship(2),
      direction: 'horizontal',
    },
    60: {
      ship: new Ship(2),
      direction: 'horizontal',
    },
    70: {
      ship: new Ship(3),
      direction: 'horizontal',
    },
    80: {
      ship: new Ship(3),
      direction: 'horizontal',
    },
    90: {
      ship: new Ship(4),
      direction: 'horizontal',
    },
  };

  const placeShip = (pos, ship, direction = 'horizontal') => {
    if (direction === 'horizontal') {
    }
  };

};

export default Gameboard;