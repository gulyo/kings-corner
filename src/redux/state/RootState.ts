import { SliceName } from "../util";
import { UiState } from "./UiState";

export interface RootState {
  [SliceName.UI]: UiState;
}
