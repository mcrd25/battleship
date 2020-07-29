import Gameboard from '../src/components/GameBoard';
import Ship from '../src/components/Ship';

const gameboard = new Gameboard();
const gameboard2 = new Gameboard();
const isNull = value => value === null;
const ship2 = new Ship(2);
const ship3 = new Ship(3)
describe('getBoard', () => {
  test('returns an array', () => {
    expect(Array.isArray(gameboard.getBoard())).toBe(true);
  });
  test('returns a two dimensional array', () => {
    expect(Array.isArray(gameboard.getBoard()[0])).toBe(true);
  });
  test('returns array of null values when default board is not set', () => {
    for (let i = 0; i < gameboard.getBoard().length; i += 1) {
      expect(gameboard.getBoard()[i].every(isNull)).toBe(true);
    }
  });
});

describe('placeShip', () => {
  test('places ship on board from starting position', () => {
    gameboard.placeShip(ship2, [0, 0]);
    expect(gameboard.getBoard()[0][0].ship).toBe(ship2);
  });
  test('places ship horizontally by default', () => {
    expect(gameboard.getBoard()[0][1].ship).toBe(ship2);
  });
  test('returns true when place successfully', () => {
    expect(gameboard.placeShip(ship2, [1, 0])).toBe(true);
  });
  test('returns false when place unsuccessfully', () => {
    expect(gameboard.placeShip(ship3, [1, 0])).toBe(false);
  });
});
describe('setDefaultBoard', () => {
  test('places ships on beginning of each row in board array horizontally', () => {
    gameboard2.setDefaultBoard();
    for (let i = 0; i < gameboard2.getBoard().length; i += 1) {
      expect(gameboard2.getBoard()[i][0]).not.toBe(null);
    }
  });
});
// describe('receiveAttack', () => {
// });