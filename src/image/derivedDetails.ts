import { ImageDimensionsContainer } from "./ImageDimensionsContainer";
import { Coordinates } from "./Coordinates";
import { Orientation } from "../type";
import {
  orientationAxisMultiplier,
  scopeSizeMultiplier,
  zoomMultiplier,
} from "./resizeObserverMapCoordinates.tools";
import { Axis } from "./Axis";
import { Details } from "./Details";
import { Zoom } from "./Zoom";

export const derivedDetails = (
  imageDimensionContainer: ImageDimensionsContainer,
  dimensions: Coordinates,
): Details => {
  const screenOrientation: Orientation =
    dimensions.x >= dimensions.y ? "landscape" : "portrait";

  const screen: Coordinates = {
    x: dimensions.x * orientationAxisMultiplier[screenOrientation].x,
    y: dimensions.y * orientationAxisMultiplier[screenOrientation].y,
  };

  const ratio = screen.x / screen.y;
  const orientation: Orientation = ratio >= 1 ? "landscape" : "portrait";

  const mapDimensions = imageDimensionContainer.MAP;
  const scopeDimensions: Coordinates = imageDimensionContainer.SCOPE;
  const scopeRatio = 1;

  const mainAxis: Axis = mapDimensions.x / mapDimensions.y < ratio ? "x" : "y";
  const scopeMainAxis: Axis =
    scopeDimensions.x / scopeDimensions.y < scopeRatio ? "x" : "y";

  const derivedScopeSizeMultiplier: number =
    scopeSizeMultiplier * (ratio + (1 - ratio) / 2);
  const derivedZoomMultiplier: { [zoom in Zoom]: number } = {
    out: zoomMultiplier.out,
    in: zoomMultiplier.in / scopeSizeMultiplier,
  };

  const scopeSize = screen[scopeMainAxis] * derivedScopeSizeMultiplier;
  const scope: Coordinates = {
    x: scopeSize,
    y: scopeSize,
  };

  return {
    screen,
    scope,
    ratio,
    orientation,
    mapDimensions,
    scopeDimensions,
    mainAxis,
    scopeRatio,
    scopeMainAxis,
    derivedScopeSizeMultiplier,
    derivedZoomMultiplier,
  };
};
