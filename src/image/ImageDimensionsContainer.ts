import { ImageName } from "../type";
import { Coordinates } from "./Coordinates";

export type ImageDimensionsContainer<T extends ImageName = ImageName> = {
  [name in T]: Coordinates;
};
