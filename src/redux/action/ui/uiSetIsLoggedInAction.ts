import { PayloadAction } from "@reduxjs/toolkit";
import { slicedActionType, SliceName } from "../../util";
import { UiAction } from "./UiAction";

export type UiSetIsLoggedInAction = PayloadAction<boolean>;

export const uiSetIsLoggedInAction = (
  payload: boolean,
): UiSetIsLoggedInAction => ({
  type: slicedActionType<UiAction>(SliceName.UI, UiAction.SET_IS_LOGGED_IN),
  payload,
});
