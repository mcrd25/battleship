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
});
