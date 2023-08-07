import { UiState } from "../../state";
import { UiSetDisplayLocationAction } from "../../action";

export const uiReducerSetDisplayLocation = (
  state: UiState,
  action: UiSetDisplayLocationAction,
): UiState => {
  if (state.displayLocation?.pathname === action.payload.pathname) {
    return state;
  }
  return {
    ...state,
    displayLocation: action.payload,
  };
};
