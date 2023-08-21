import { loadImages } from "./loadImages";
import { wrapReact } from "../main";
import { resizeObserverVariables } from "./resizeObserverVariables";

loadImages().then((result) => {
  resizeObserverVariables(result);
  wrapReact();
});
