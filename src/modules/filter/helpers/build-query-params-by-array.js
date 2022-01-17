/**
 * @param values - Массив строк
 * @returns {string}
 */
export const buildQueryParamsByArray = (values) =>
  values.length ? values.join(",") : undefined;
