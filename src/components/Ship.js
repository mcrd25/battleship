const Ship = (length = 2) => {
  const ship = Array(length).fill(false);
  const hit = (pos) => {
    if (!ship[pos] && ship[pos] !== undefined) {
      ship[pos] = true;
      return true;
    }
    return false;
  };

  const isSunk = () => length === 0;

  return {
    isSunk,
    hit,
  };
};

export default Ship;
