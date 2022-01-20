/**
 * @param rangePrice - Массив из двух чисел, например: [0, 120]
 * данные числа будут использованы, для выставления промежутка цены слайдера
 * @param min - Предустановленное значения для показа мин значения
 * @param max - Предустановленное значения для показа макс значения
 * @returns {{
 *   from: Number,
 *   to: Number
 * }}
 */
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
