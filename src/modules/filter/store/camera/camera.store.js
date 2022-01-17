import {
  buildCheckboxes,
  buildSelect,
  setActiveCheckbox,
  setActiveSelect,
} from "@/modules/filter/helpers";
import {
  checkboxesCameraValues,
  CheckboxLabel,
  ResolutionMatrixMap,
  resolutionMatrixValues,
  ResolutionVideoMap,
  resolutionVideoValues,
  TypesResolutionMutation,
  TypesCameraState,
} from "@/modules/filter/constants";
import {
  SET_ACTIVE_CAMERA_TYPE,
  SET_ACTIVE_MATRIX,
  SET_ACTIVE_VIDEO,
} from "@/modules/filter/store/camera/mutation-types";

export default {
  namespaced: true,

  state: () => ({
    cameraTypes: buildCheckboxes({
      values: checkboxesCameraValues,
      name: "camera-type",
      Labels: CheckboxLabel,
    }),
    resolutionMatrix: buildSelect({
      selectValues: resolutionMatrixValues,
      selectKeyMap: ResolutionMatrixMap,
      activeValue: resolutionMatrixValues[0],
    }),
    resolutionVideo: buildSelect({
      selectValues: resolutionVideoValues,
      selectKeyMap: ResolutionVideoMap,
      activeValue: resolutionVideoValues[0],
    }),
  }),

  mutations: {
    [SET_ACTIVE_CAMERA_TYPE](state, updatedValues) {
      state.cameraTypes = updatedValues;
    },

    [SET_ACTIVE_MATRIX](state, updatedMatrix) {
      state.resolutionMatrix = updatedMatrix;
    },

    [SET_ACTIVE_VIDEO](state, updatedVideo) {
      state.resolutionVideo = updatedVideo;
    },
  },

  actions: {
    setActiveResolution({ state, commit }, { type, activeOptionValue }) {
      const updatedValues = setActiveSelect({
        options: state[TypesCameraState[type]],
        activeOptionValue,
      });

      commit(TypesResolutionMutation[type], updatedValues);
    },

    setActiveCameraType({ state, commit }, checkedValues) {
      const updatedValues = setActiveCheckbox({
        checkboxes: state.cameraTypes,
        checkedValues,
      });

      commit(SET_ACTIVE_CAMERA_TYPE, updatedValues);
    },
  },
};
