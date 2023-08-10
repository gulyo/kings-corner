import { PayloadAction } from "@reduxjs/toolkit";
import { slicedActionType, SliceName } from "../../util";
import { UiAction } from "./UiAction";
import { NavigatorDirection, PathElement } from "../../../type";

interface NavigateToPayload {
  navigateTo?: PathElement;
  navigatorDirection?: NavigatorDirection;
}

export type UiSetNavigateToAction = PayloadAction<NavigateToPayload>;

export const uiSetNavigateToAction = (
  payload: NavigateToPayload,
): UiSetNavigateToAction => ({
  type: slicedActionType<UiAction>(SliceName.UI, UiAction.SET_NAVIGATE_TO),
  payload,
});
