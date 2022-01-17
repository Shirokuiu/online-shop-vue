export const buildQueryParamsByArray = (values) =>
  values.length ? values.join(",") : undefined;
