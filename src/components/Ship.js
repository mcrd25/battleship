const Ship = (length = 2) => {
  const ship = Array(length).fill(false);
  const hit = (pos) => {
    if (!ship[pos] && ship[pos] !== undefined) {
      ship[pos] = true;
      return true;
    }
    return false;
  };

  const isHit = value => value === true;
  const isSunk = () => ship.every(isHit);

  return {
    isSunk,
    hit,
  };
};

export default Ship;
