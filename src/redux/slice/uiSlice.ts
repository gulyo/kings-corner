import { createSlice } from "@reduxjs/toolkit";
import { SliceName } from "../util";
import { uiInitialState } from "../initialState";
import {
  uiReducerSetImageUrls,
  uiReducerSetIsLoggedIn,
  uiReducerSetLoading,
} from "../reducer";
import { UiAction } from "../action";

const slice = createSlice({
  name: SliceName.UI,
  initialState: uiInitialState,
  reducers: {
    [UiAction.SET_IS_LOGGED_IN]: uiReducerSetIsLoggedIn,
    [UiAction.SET_LOADING]: uiReducerSetLoading,
    [UiAction.SET_IMAGE_URLS]: uiReducerSetImageUrls,
  },
});

export const uiSlice = slice.reducer;
