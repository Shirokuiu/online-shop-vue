/**
 * @param values - Массив строк
 * @returns {string}
 */
export const buildQueryParamsByArray = (values) => {
  if (!values.isArray) {
    return values;
  }

  return values.length ? values.join(",") : undefined;
};
