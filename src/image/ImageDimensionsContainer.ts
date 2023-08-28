import { ImageName } from "../type";
import { Coordinates } from "./Coordinates";

export type ImageDimensionsContainer = {
  [name in ImageName]: Coordinates;
};
