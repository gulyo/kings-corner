import { useLocation } from "react-router";
import { useSelector } from "react-redux";
import { uiNavigatorLocationSelector } from "../../../redux/selector";
import { translatedPath } from "../translatedPath";
import { store, uiSetNavigatorLocationAction } from "../../../redux";
import { PathElement } from "../../../type";

export const useNavigatorLocation = (): void => {
  const navigatorLocation = useSelector(uiNavigatorLocationSelector);
  const location = useLocation();

  if (navigatorLocation) {
    return;
  }

  store.dispatch(
    uiSetNavigatorLocationAction(
      (Object.entries(translatedPath).find(
        ([, path]) => location.pathname === path,
      )?.[0] as PathElement) ?? "HOME",
    ),
  );
};
