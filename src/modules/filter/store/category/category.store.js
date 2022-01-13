import { buildSelect } from "@/modules/filter/helpers";
import { SET_ACTIVE } from "@/modules/filter/store/category/mutation-types";
import { CategoriesLabel, CategoriesValues } from "@/modules/filter/constants";

export default {
  namespaced: true,

  state: () => ({
    categories: buildSelect({
      selectValues: CategoriesValues,
      selectKeyMap: CategoriesLabel,
      activeValue: CategoriesValues[0],
    }),
  }),

  mutations: {
    [SET_ACTIVE](state, category) {
      state.categories = state.categories.map((categoryItem) => ({
        ...categoryItem,
        isSelected: categoryItem.value === category,
      }));
    },
  },

  actions: {
    setActive({ commit }, category) {
      commit(SET_ACTIVE, category);
    },
  },
};
