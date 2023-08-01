import { PayloadAction } from "@reduxjs/toolkit";
import { slicedActionType, SliceName } from "../../util";
import { UiAction } from "./UiAction";

export type UiSetLoadingAction = PayloadAction<boolean>;

export const uiSetLoadingAction = (payload: boolean): UiSetLoadingAction => ({
  type: slicedActionType<UiAction>(SliceName.UI, UiAction.SET_LOADING),
  payload,
});
