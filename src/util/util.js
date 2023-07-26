let id = 0;
export const getId = () => {
  return id++;
};

export const replaceItemAtIndex = (arr, index, item) => {
  return [...arr.slice(0, index), item, ...arr.slice(index + 1)];
};

export const removeItemAtIndex = (arr, index) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};
