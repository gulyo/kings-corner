import { Coordinates } from "./Coordinates";
import { Orientation } from "../type";
import { Axis } from "./Axis";
import { Zoom } from "./Zoom";

export interface Details {
  screen: Coordinates;
  scope: Coordinates;
  ratio: number;
  orientation: Orientation;
  mapDimensions: Coordinates;
  scopeDimensions: Coordinates;
  scopeRatio: number;
  mainAxis: Axis;
  scopeMainAxis: Axis;
  derivedScopeSizeMultiplier: number;
  derivedZoomMultiplier: { [zoom in Zoom]: number };
}
