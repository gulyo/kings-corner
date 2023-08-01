import { configureStore } from "@reduxjs/toolkit";
import { SliceName } from "./util";
import { uiSlice } from "./slice";

export const store = configureStore({
  reducer: {
    [SliceName.UI]: uiSlice,
  },
});
