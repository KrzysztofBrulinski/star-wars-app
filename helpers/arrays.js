export const chunk = (arr = [], size = 0) => {
  const chunks = [];
  const items = [...arr];

  while (items.length) {
    chunks.push(items.splice(0, size));
  }

  return chunks;
};
