import { createSelector } from "@reduxjs/toolkit";
import { uiSelector } from "./uiSelector";
import { UiState } from "../../state";

export const uiNavigateToSelector = createSelector(
  uiSelector,
  (state: UiState) => state.navigateTo,
);
