export const setActiveSelect = ({ options, activeOptionValue }) =>
  options.map((option) => ({
    ...option,
    isSelected: option.value === activeOptionValue,
  }));
