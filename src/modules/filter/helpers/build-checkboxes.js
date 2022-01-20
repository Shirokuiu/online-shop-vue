/**
 * @param values - Массив значений по которым будет созданы чекбоксы
 * @param name - Имя чекбокса для всех элементов
 * @param Labels - Текст чекбокса - передается словарь,
 * в котором value ключ для значения
 * @returns {Array<{
 *   id: String | Number,
 *   label: String,
 *   value: String,
 *   name: String,
 *   checked: Boolean
 * }>} - Массив чекбокосов
 */
import { buildDefaultFormActions } from "@/modules/filter/helpers/build-default-form-actions";

export const buildCheckboxes = ({ values, name, Labels }) =>
  buildDefaultFormActions({
    makeCustomValues: () => ({ checked: false, name }),
    values,
    Labels,
  });
