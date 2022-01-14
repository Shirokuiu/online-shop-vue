import { buildSelect, setActiveSelect } from "@/modules/filter/helpers";
import {
  ResolutionMatrixMap,
  resolutionMatrixValues,
  ResolutionVideoMap,
  resolutionVideoValues,
  TypesCameraMutation,
  TypesCameraState,
} from "@/modules/filter/constants";
import {
  SET_ACTIVE_MATRIX,
  SET_ACTIVE_VIDEO,
} from "@/modules/filter/store/camera/mutation-types";

export default {
  namespaced: true,

  state: () => ({
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

      commit(TypesCameraMutation[type], updatedValues);
    },
  },
};
