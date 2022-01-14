import { buildSelect, setActiveSelect } from "@/modules/filter/helpers";
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
    [SET_ACTIVE](state, updatedCategories) {
      state.categories = updatedCategories;
    },
  },

  actions: {
    setActive({ state, commit }, category) {
      const updatedCategories = setActiveSelect({
        options: state.categories,
        activeOptionValue: category,
      });

      commit(SET_ACTIVE, updatedCategories);
    },
  },
};
