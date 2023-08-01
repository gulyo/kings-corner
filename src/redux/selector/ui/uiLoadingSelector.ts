import { createSelector } from "@reduxjs/toolkit";
import { uiSelector } from "./uiSelector";
import { UiState } from "../../state";

export const uiLoadingSelector = createSelector(
  uiSelector,
  (state: UiState) => state.loading,
);
