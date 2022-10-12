export const compareFunction = (a, b) => {
  if (a.index < b.index) {
    return -1;
  }
  if (a.index > b.index) {
    return 1;
  }
  return 0;
};

export const clearTheArrayOfTypename = (data) => {
  return Object.keys(data).slice(1, Object.keys(data).length);
};
