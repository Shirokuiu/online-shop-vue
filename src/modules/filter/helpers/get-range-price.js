export const getRangePrice = ({ rangePrice, min, max }) => {
  if (!rangePrice) {
    return {
      from: min,
      to: max,
    };
  }

  const range = rangePrice.split(",");
  const fromIdx = 0;
  const toIdx = 1;

  return {
    from: range[fromIdx],
    to: range[toIdx],
  };
};
