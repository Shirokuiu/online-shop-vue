import { buildDefaultFormActions } from "@/modules/filter/helpers/build-default-form-actions";

export const buildRadioBtns = ({ values, Labels, name, checkedValue }) =>
  buildDefaultFormActions({
    makeCustomValues: (value) => ({
      checked: checkedValue === value,
      name,
    }),
    values,
    Labels,
  });
