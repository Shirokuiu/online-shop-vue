import {
  SET_MAX,
  SET_MIN,
  SET_RANGE,
} from "@/modules/filter/store/price/mutation-types";

export default {
  namespaced: true,

  state: () => ({
    min: 0,
    max: 0,
    range: [0, 0],
  }),

  mutations: {
    [SET_MIN](state, min) {
      state.min = min ?? state.min;
    },

    [SET_MAX](state, max) {
      state.max = max ?? state.max;
    },

    [SET_RANGE](state, { from, to }) {
      state.range = [from, to];
    },
  },

  actions: {
    updatePrice({ dispatch }, { min, max, range }) {
      dispatch("setMin", min);
      dispatch("setMax", max);
      dispatch("setRange", range);
    },

    setMin({ commit }, min) {
      commit(SET_MIN, min);
    },

    setMax({ commit }, max) {
      commit(SET_MAX, max);
    },

    setRange({ commit }, { from, to }) {
      commit(SET_RANGE, { from, to });
    },
  },
};
