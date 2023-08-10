import { createSlice } from "@reduxjs/toolkit";
import { SliceName } from "../util";
import { uiInitialState } from "../initialState";
import {
  uiSetImageUrlsReducer,
  uiSetIsLoggedInReducer,
  uiSetLoadingReducer,
  uiSetNavigateToReducer,
  uiSetNavigatorLocationReducer,
} from "../reducer";
import { UiAction } from "../action";

const slice = createSlice({
  name: SliceName.UI,
  initialState: uiInitialState,
  reducers: {
    [UiAction.SET_IS_LOGGED_IN]: uiSetIsLoggedInReducer,
    [UiAction.SET_LOADING]: uiSetLoadingReducer,
    [UiAction.SET_IMAGE_URLS]: uiSetImageUrlsReducer,
    [UiAction.SET_NAVIGATE_TO]: uiSetNavigateToReducer,
    [UiAction.SET_NAVIGATOR_LOCATION]: uiSetNavigatorLocationReducer,
  },
});

export const uiSlice = slice.reducer;
