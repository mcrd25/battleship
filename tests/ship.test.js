import Ship from '../src/components/Ship';

describe('Behaviour', () => {
  describe('hit', () => {
    test('returns true if ship was successfully hit', () => {
      const ship = new Ship(3);
      expect(ship.hit(2)).toBe(true);
    });
    test('returns false if position is already hit', () => {
      const ship = new Ship(4);
      ship.hit(1);
      expect(ship.hit(1)).toBe(false);
    });
    test('returns false if position is undefined', () => {
      const ship = new Ship(2);
      expect(ship.hit(2)).toBe(false);
    });
  });

  describe('isSunk', () => {
    const ship = new Ship(3);
    test('returns false if no position is hit in ship', () => {
      expect(ship.isSunk()).toBe(false);
    });
    test('returns false if only less than all positions are hit', () => {
      ship.hit(0);
      expect(ship.isSunk()).toBe(false);
    });
    test('returns true if ship is sunk (every position in ship is hit)', () => {
      ship.hit(1);
      ship.hit(2);
      expect(ship.isSunk()).toBe(true);
    });
  });
});
