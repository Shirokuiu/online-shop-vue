export const setActiveCheckbox = ({ checkboxes, checkedValues }) =>
  checkboxes.map((checkbox) => ({
    ...checkbox,
    checked: checkedValues.includes(checkbox.value),
  }));
