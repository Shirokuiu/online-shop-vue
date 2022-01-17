import { buildCheckboxes, setActiveCheckbox } from "@/modules/filter/helpers";
import { EstateLabels, estateTypeValues } from "@/modules/filter/constants";
import { SET_ACTIVE_ESTATE_TYPE } from "@/modules/filter/store/estate/mutation-types";

export default {
  namespaced: true,

  state: () => ({
    estateTypes: buildCheckboxes({
      values: estateTypeValues,
      name: "estate-type",
      Labels: EstateLabels,
    }),
  }),

  mutations: {
    [SET_ACTIVE_ESTATE_TYPE](state, updatedValues) {
      state.estateTypes = updatedValues;
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
  },
};
