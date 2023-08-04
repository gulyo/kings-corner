import { UiState } from "../../state";
import { UiSetImageUrlsAction } from "../../action";

export const uiReducerSetImageUrls = (
  state: UiState,
  action: UiSetImageUrlsAction,
): UiState => ({
  ...state,
  imageUrls: action.payload,
});
