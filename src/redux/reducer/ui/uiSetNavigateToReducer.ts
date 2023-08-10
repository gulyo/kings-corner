import { UiState } from "../../state";
import { UiSetNavigateToAction } from "../../action";

export const uiSetNavigateToReducer = (
  state: UiState,
  action: UiSetNavigateToAction,
): UiState => ({
  ...state,
  navigateTo: action.payload.navigateTo,
  navigatorDirection:
    action.payload.navigatorDirection ?? state.navigatorDirection,
});
