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

export const TypesResolution = {
  Matrix: "matrix",
  Video: "video",
};

export const TypesCameraState = {
  [TypesResolution.Matrix]: "resolutionMatrix",
  [TypesResolution.Video]: "resolutionVideo",
};

export const TypesResolutionMutation = {
  [TypesResolution.Matrix]: SET_ACTIVE_MATRIX,
  [TypesResolution.Video]: SET_ACTIVE_VIDEO,
};

export const checkboxesCameraValues = ["mirror", "digital", "mirrorless"];
export const CheckboxLabel = {
  [checkboxesCameraValues[0]]: "Зеркальный",
  [checkboxesCameraValues[1]]: "Цифровой",
  [checkboxesCameraValues[2]]: "Беззеркальный",
};
