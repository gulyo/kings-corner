import { RootState, UiState } from "../../state";
import { SliceName } from "../../util";

export const uiSelector = (state: RootState): UiState => state[SliceName.UI];
