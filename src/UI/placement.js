const PlacementUI = () => {
  const drawPlacement = (ship) => {
    const xInput = document.createElement('input');
    const yInput = document.createElement('input');
    xInput.id = `${ship}-x`;
    yInput.id = `${ship}-y`;
    xInput.className = 'placement-input';
    return [xInput, yInput];
  };

  return {
    drawPlacement,
  };
};

export default PlacementUI;