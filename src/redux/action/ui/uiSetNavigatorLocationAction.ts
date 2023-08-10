import { PayloadAction } from "@reduxjs/toolkit";
import { slicedActionType, SliceName } from "../../util";
import { UiAction } from "./UiAction";
import { PathElement } from "../../../type";

export type UiSetNavigatorLocationAction = PayloadAction<PathElement>;

export const uiSetNavigatorLocationAction = (
  payload: PathElement,
): UiSetNavigatorLocationAction => ({
  type: slicedActionType<UiAction>(
    SliceName.UI,
    UiAction.SET_NAVIGATOR_LOCATION,
  ),
  payload,
});
