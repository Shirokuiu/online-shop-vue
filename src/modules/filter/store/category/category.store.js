import { buildCategories } from "@/modules/filter/helpers";
import { SET_ACTIVE } from "@/modules/filter/store/category/mutation-types";

export default {
  namespaced: true,

  state: () => ({
    categories: buildCategories(),
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
