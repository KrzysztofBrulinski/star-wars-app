export const chunk = (arr = [], size = 0) => {
  const chunks = [];
  const items = [...arr];

  while (items.length) {
    chunks.push(items.splice(0, size));
  }

  return chunks;
};

export const sortFunc = (a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
};
