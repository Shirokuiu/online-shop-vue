import { CategoriesLabel, CategoriesValues } from "@/modules/filter/constants";

export const buildCategories = () =>
  CategoriesValues.map((categoriesValue, idx) => ({
    id: idx + 1,
    value: categoriesValue,
    isSelected: idx === 0,
    text: CategoriesLabel[categoriesValue],
  }));
