import { NavigatorDirection, PathElement } from "../../../type";

export const navigatorLocationToMap: {
  [key in PathElement]: { [dir in NavigatorDirection]?: PathElement };
} = {
  HOME: { right: "MAPS", left: "TOUR" },
  MAPS: { right: "DICTIONARY", left: "HOME" },
  DICTIONARY: { right: "TOUR", left: "MAPS" },
  TOUR: { right: "HOME", left: "DICTIONARY" },
};
