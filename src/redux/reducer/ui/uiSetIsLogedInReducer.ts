import { UiState } from "../../state";
import { UiSetIsLoggedInAction } from "../../action";

export const uiSetIsLoggedInReducer = (
  state: UiState,
  action: UiSetIsLoggedInAction,
): UiState => ({
  ...state,
  isLoggedIn: action.payload,
});
