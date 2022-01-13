import { buildSelect } from "@/modules/filter/helpers";
import {
  ResolutionMatrixMap,
  resolutionMatrixValues,
  ResolutionVideoMap,
  resolutionVideoValues,
} from "@/modules/filter/constants";

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
};
