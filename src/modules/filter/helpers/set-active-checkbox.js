/**
 * @param checkboxes - Массив чекбоксов сбилженный хелпером - buildCheckboxes
 * @param checkedValues - Массив выбранных чекбоксов
 * @returns {Array<checkboxes>}
 */
export const setActiveCheckbox = ({ checkboxes, checkedValues }) =>
  checkboxes.map((checkbox) => ({
    ...checkbox,
    checked: checkedValues.includes(checkbox.value),
  }));
