/**
 * @param selectValues - Массив строк значений для селекта ['all', 'estate', и тп]
 * @param selectKeyMap - Словарь для вывода текста согласно значениям из selectValues
 * @param activeValue - Выставление активного значение в селекте
 * @returns {Array<{
 *  id: number,
 *  value: string,
 *  isSelected: boolean,
 *  text: string
 * }>}
 */
import { buildDefaultFormActions } from "@/modules/filter/helpers/build-default-form-actions";

export const buildSelect = ({ values, Labels, activeValue }) =>
  buildDefaultFormActions({
    makeCustomValues: (selectValue) => ({
      isSelected: selectValue === activeValue,
    }),
    values,
    Labels,
  });
