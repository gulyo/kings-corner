import { createSelector } from "@reduxjs/toolkit";
import { uiSelector } from "./uiSelector";
import { UiState } from "../../state";

export const uiNavigatorDirectionSelector = createSelector(
  uiSelector,
  (state: UiState) => state.navigatorDirection,
);
