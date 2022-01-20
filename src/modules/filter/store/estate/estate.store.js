import {
  buildCheckboxes,
  buildRadioBtns,
  setActiveCheckbox,
  changeActiveRadio,
} from "@/modules/filter/helpers";
import {
  EstateLabels,
  EstateRoomLabels,
  estateRoomValues,
  estateTypeValues,
} from "@/modules/filter/constants";
import {
  CHANGE_ACTIVE_ROOM,
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
    rooms: buildRadioBtns({
      values: estateRoomValues,
      Labels: EstateRoomLabels,
      name: "rooms",
      checkedValue: "any_room",
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

    [CHANGE_ACTIVE_ROOM](state, changedValues) {
      state.rooms = changedValues;
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

    changeActiveRoom({ state, commit }, activeValue) {
      const changedRadioBtns = changeActiveRadio({
        radioBtns: state.rooms,
        activeValue,
      });

      commit(CHANGE_ACTIVE_ROOM, changedRadioBtns);
    },
  },
};
