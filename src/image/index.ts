import { loadImages } from "./loadImages";
import { wrapReact } from "../main";
import { resizeObserverVariables } from "./resizeObserverVariables";
import { resizeObserverMapCoordinates } from "./resizeObserverMapCoordinates";

loadImages().then((result) => {
  resizeObserverVariables(result);
  resizeObserverMapCoordinates(result);
  wrapReact();
});
