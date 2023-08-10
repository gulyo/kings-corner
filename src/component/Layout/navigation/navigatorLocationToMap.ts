import { NavigatorDirection, PathElement } from "../../../type";

export const navigatorLocationToMap: {
  [key in PathElement]: { [dir in NavigatorDirection]?: PathElement };
} = {
  HOME: { right: "MAPS" },
  MAPS: { left: "HOME" },
};
