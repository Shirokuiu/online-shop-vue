/**
 * @param options - Массив опций селекта, который билдит buildSelect.js
 * @param activeOptionValue - Активное значение опции селекта,
 * который будет учавствовать в сравнении, для выставления активного селекта
 * @returns {Array<option>} - Новый массив опций с обновленным активным состоянием
 */
export const setActiveSelect = ({ options, activeOptionValue }) =>
  options.map((option) => ({
    ...option,
    isSelected: option.value === activeOptionValue,
  }));
