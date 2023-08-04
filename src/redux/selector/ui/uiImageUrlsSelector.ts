import { createSelector } from "@reduxjs/toolkit";
import { uiSelector } from "./uiSelector";
import { UiState } from "../../state";

export const uiImageUrlsSelector = createSelector(
  uiSelector,
  (state: UiState) => state.imageUrls,
);
