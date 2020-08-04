import Player from '../src/components/Player';
import Gameboard from '../src/components/GameBoard';

const playerName = 'Player1';
const player1 = new Player(playerName);
const defaultPlayer = new Player();
const computerPlayer = new Player('computer', true);

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