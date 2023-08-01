import { UiState } from "../../state";
import { UiSetIsLoggedInAction } from "../../action";

export const uiReducerSetIsLoggedIn = (
  state: UiState,
  action: UiSetIsLoggedInAction,
): UiState => ({
  ...state,
  isLoggedIn: action.payload,
});
