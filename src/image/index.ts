import { loadImages } from "./loadImages";
import { wrapReact } from "../main";

loadImages().then(wrapReact);
