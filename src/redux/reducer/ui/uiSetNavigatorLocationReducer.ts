import { UiState } from "../../state";
import { UiSetNavigatorLocationAction } from "../../action";

export const uiSetNavigatorLocationReducer = (
  state: UiState,
  action: UiSetNavigatorLocationAction,
): UiState => ({
  ...state,
  navigatorLocation: action.payload,
});
