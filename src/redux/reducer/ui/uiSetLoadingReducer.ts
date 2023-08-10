import { UiState } from "../../state";
import { UiSetLoadingAction } from "../../action";

export const uiSetLoadingReducer = (
  state: UiState,
  action: UiSetLoadingAction,
): UiState => ({
  ...state,
  loading: action.payload,
});
