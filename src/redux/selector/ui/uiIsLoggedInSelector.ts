import { createSelector } from "@reduxjs/toolkit";
import { uiSelector } from "./uiSelector";
import { UiState } from "../../state";

export const uiIsLoggedInSelector = createSelector(
  uiSelector,
  (state: UiState) => state.isLoggedIn,
);
