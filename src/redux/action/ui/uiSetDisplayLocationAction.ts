import { PayloadAction } from "@reduxjs/toolkit";
import { Location } from "react-router-dom";
import { slicedActionType, SliceName } from "../../util";
import { UiAction } from "./UiAction";

export type UiSetDisplayLocationAction = PayloadAction<Location>;

export const uiSetDisplayLocationAction = (
  payload: Location,
): UiSetDisplayLocationAction => ({
  type: slicedActionType<UiAction>(SliceName.UI, UiAction.SET_DISPLAY_LOCATION),
  payload,
});
