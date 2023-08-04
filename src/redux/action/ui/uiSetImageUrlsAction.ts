import { PayloadAction } from "@reduxjs/toolkit";
import { slicedActionType, SliceName } from "../../util";
import { UiAction } from "./UiAction";
import { ImageUrlContainer } from "../../../type";

export type UiSetImageUrlsAction = PayloadAction<ImageUrlContainer>;

export const uiSetImageUrlsAction = (
  payload: ImageUrlContainer,
): UiSetImageUrlsAction => ({
  type: slicedActionType<UiAction>(SliceName.UI, UiAction.SET_IMAGE_URLS),
  payload,
});
