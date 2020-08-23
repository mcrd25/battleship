const arrayInArray = (parent, child) => {
  const stringifiedParent = JSON.stringify(parent);
  const stringifiedChild = JSON.stringify(child);
  return stringifiedParent.includes(stringifiedChild);
};

export default arrayInArray;