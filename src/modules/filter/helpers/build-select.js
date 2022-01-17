/**
 * @param selectValues - Массив строк значений для селекта ['all', 'estate', и тп]
 * @param selectKeyMap - Словарь для вывода текста согласно значениям из selectValues
 * @param activeValue - Выставление активного значение в селекте
 * @returns {[{id: number, value: string, isSelected: boolean, text: string}]}
 */
export const buildSelect = ({ selectValues, selectKeyMap, activeValue }) => {
  return selectValues.map((selectValue, idx) => ({
    id: idx + 1,
    value: selectValue,
    isSelected: selectValue === activeValue,
    text: selectKeyMap[selectValue],
  }));
};
