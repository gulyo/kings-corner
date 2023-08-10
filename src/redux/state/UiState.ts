import { ImageUrlContainer, NavigatorDirection, PathElement } from "../../type";

export interface UiState {
  loading: boolean;
  isLoggedIn: boolean;
  imageUrls: ImageUrlContainer;
  navigateTo?: PathElement;
  navigatorDirection: NavigatorDirection;
  navigatorLocation?: PathElement;
}
