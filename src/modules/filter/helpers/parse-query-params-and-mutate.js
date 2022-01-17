import { buildQueryParamsByArray } from "@/modules/filter/helpers/build-query-params-by-array";

/**
 * @param checkedValues - Массив выбранных значений
 * @param forHocChangeCb - Коллбек для вызова метода из HOC, который доблавляет
 * квери параметры в адресноу строку
 * @param storeAction - Коллбек для вызова функции определенной мутации из стора
 */
export const parseQueryParamsAndMutate = ({
  checkedValues,
  forHocChangeCb,
  storeAction,
}) => {
  forHocChangeCb(buildQueryParamsByArray(checkedValues));

  storeAction();
};
