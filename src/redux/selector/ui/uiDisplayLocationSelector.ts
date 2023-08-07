import { createSelector } from "@reduxjs/toolkit";
import { uiSelector } from "./uiSelector";
import { UiState } from "../../state";

export const uiDisplayLocationSelector = createSelector(
  uiSelector,
  (state: UiState) => state.displayLocation,
);
