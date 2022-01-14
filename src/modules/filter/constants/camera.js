import {
  SET_ACTIVE_MATRIX,
  SET_ACTIVE_VIDEO,
} from "@/modules/filter/store/camera/mutation-types";

export const resolutionMatrixValues = ["1mp", "3mp", "5mp", "7mp", "10mp"];
export const resolutionVideoValues = ["any", "HD", "Full_HD", "4K", "5K"];

export const ResolutionMatrixMap = {
  [resolutionMatrixValues[0]]: "1 МП",
  [resolutionMatrixValues[1]]: "3 МП",
  [resolutionMatrixValues[2]]: "5 МП",
  [resolutionMatrixValues[3]]: "7 МП",
  [resolutionMatrixValues[4]]: "10 МП",
};
export const ResolutionVideoMap = {
  [resolutionVideoValues[0]]: "Любое",
  [resolutionVideoValues[1]]: "HD",
  [resolutionVideoValues[2]]: "Full HD",
  [resolutionVideoValues[3]]: "4K",
  [resolutionVideoValues[4]]: "5K",
};

export const TypesCamera = {
  Matrix: "matrix",
  Video: "video",
};

export const TypesCameraState = {
  [TypesCamera.Matrix]: "resolutionMatrix",
  [TypesCamera.Video]: "resolutionVideo",
};

export const TypesCameraMutation = {
  [TypesCamera.Matrix]: SET_ACTIVE_MATRIX,
  [TypesCamera.Video]: SET_ACTIVE_VIDEO,
};
