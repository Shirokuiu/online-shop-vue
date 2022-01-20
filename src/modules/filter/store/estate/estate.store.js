import { buildCheckboxes, setActiveCheckbox } from "@/modules/filter/helpers";
import { EstateLabels, estateTypeValues } from "@/modules/filter/constants";
import {
  SET_ACTIVE_ESTATE_TYPE,
  SET_MIN_SQUARE,
} from "@/modules/filter/store/estate/mutation-types";

export default {
  namespaced: true,

  state: () => ({
    estateTypes: buildCheckboxes({
      values: estateTypeValues,
      name: "estate-type",
      Labels: EstateLabels,
    }),
    minSquare: 0,
  }),

  mutations: {
    [SET_ACTIVE_ESTATE_TYPE](state, updatedValues) {
      state.estateTypes = updatedValues;
    },

    [SET_MIN_SQUARE](state, value) {
      state.minSquare = value;
    },
  },

  actions: {
    setActiveEstateType({ state, commit }, checkedValues) {
      const updatedValues = setActiveCheckbox({
        checkboxes: state.estateTypes,
        checkedValues,
      });

      commit(SET_ACTIVE_ESTATE_TYPE, updatedValues);
    },

    setMinSquare({ commit }, value) {
      const parsedValue = parseInt(value, 10) ?? 0;

      commit(SET_MIN_SQUARE, parsedValue);
    },
  },
};
