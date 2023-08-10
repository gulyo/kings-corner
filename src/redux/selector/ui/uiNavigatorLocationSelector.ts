import { createSelector } from "@reduxjs/toolkit";
import { uiSelector } from "./uiSelector";
import { UiState } from "../../state";

export const uiNavigatorLocationSelector = createSelector(
  uiSelector,
  (state: UiState) => state.navigatorLocation,
);
