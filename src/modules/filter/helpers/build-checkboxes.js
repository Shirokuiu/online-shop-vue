/**
 *
 * @param values - Массив значений по которым будет созданы чекбоксы
 * @param name - Имя чекбокса для всех элементов
 * @param label - Текст чекбокса - передается словарь,
 * в котором value ключ для значения
 * @returns {Array<Object>} - Массив чекбокосов
 */
export const buildCheckboxes = ({ values, name, label }) =>
  values.map((value) => ({
    id: value,
    label: label[value],
    checked: false,
    name,
    value,
  }));
