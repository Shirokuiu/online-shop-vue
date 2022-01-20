export const changeActiveRadio = ({ radioBtns, activeValue }) =>
  radioBtns.map((radioBtn) => ({
    ...radioBtn,
    checked: activeValue === radioBtn.value,
  }));
