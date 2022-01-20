/**
 * @param values - - Массив значений по которым будут созданы
 * чекбоксы, селекты, радиокнопки
 * @param Labels - Текст [чекбокса, селекта, радиокнопки] передается словарь,
 * в котором value ключ для значения
 * @param makeCustomValues - Коллбек функция, для формирования кастомного объекта,
 * который будет заспреден к итоговому результату. В коллбек параметром через
 * замыкание передается значение каждого элемента массива
 * @returns {Array<{
 *   id: String | Number,
 *   label: String,
 *   value: String,
 *   customParams
 * }>}
 */
export const buildDefaultFormActions = ({
  values,
  Labels,
  makeCustomValues,
}) => {
  return values.map((value) => {
    const params = makeCustomValues(value);

    return {
      id: value,
      label: Labels[value],
      value,
      ...params,
    };
  });
};
