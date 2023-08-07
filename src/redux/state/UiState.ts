import { Location } from "react-router-dom";
import { ImageUrlContainer } from "../../type";

export interface UiState {
  loading: boolean;
  isLoggedIn: boolean;
  imageUrls: ImageUrlContainer;
  displayLocation?: Location;
}
