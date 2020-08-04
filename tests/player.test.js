import Player from '../src/components/Player';
import Gameboard from '../src/components/GameBoard';
import Ship from '../src/components/Ship';

const playerName = 'Player1';
const player1 = new Player(playerName);
const defaultPlayer = new Player();
const computerPlayer = new Player('computer', true);
const defaultBoard = new Gameboard();

describe('getName', () => {
  test('returns name of player passed as first property on initialisation', () => {
    expect(player1.getName()).toBe(playerName);
  });
  test('not return default player name of if first property passed on initialisation', () => {
    expect(player1.getName()).not.toBe('Player');
  });
  test('return default name when no property passed', () => {
    expect(defaultPlayer.getName()).toBe('Player');
  });
});

describe('getBoard', () => {
  test('getBoard returns a default board upon intialisation', () => {
    expect(player1.getBoard().getBoard()).toEqual(defaultBoard.getBoard());
  });
  test('any changes made in to board outside is reflected in board in Player component', () => {
    const tempBoard = player1.getBoard();
    const ship = new Ship(2);
    tempBoard.placeShip(ship, [0, 0]);
    expect(player1.getBoard().getBoard()[0][0].ship).toBe(ship);
  });
});

describe('makeRandomMove', () => {
  test('computerPlayer to have access to method', () => {
    expect(computerPlayer.makeRandomMove()).not.toBe(undefined);
  });
  test('returns array with valid x and y values', () => {
    expect(Array.isArray(computerPlayer.makeRandomMove())).toBe(true);
  });
});
