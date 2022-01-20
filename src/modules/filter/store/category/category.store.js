import { buildSelect, setActiveSelect } from "@/modules/filter/helpers";
import { CHANGE_ACTIVE_CATEGORY } from "@/modules/filter/store/category/mutation-types";
import { CategoriesLabel, CategoriesValues } from "@/modules/filter/constants";

export default {
  namespaced: true,

  state: () => ({
    categories: buildSelect({
      values: CategoriesValues,
      Labels: CategoriesLabel,
      activeValue: CategoriesValues[0],
    }),
  }),

  mutations: {
    [CHANGE_ACTIVE_CATEGORY](state, updatedCategories) {
      state.categories = updatedCategories;
    },
  },

  actions: {
    changeActiveCategory({ state, commit }, category) {
      const updatedCategories = setActiveSelect({
        options: state.categories,
        activeOptionValue: category,
      });

      commit(CHANGE_ACTIVE_CATEGORY, updatedCategories);
    },
  },
};
