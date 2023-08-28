import { ResizeObserverArgs } from "./ResizeObserverArgs";
import { pois } from "./PoiName";
import {
  bgSizeCssVarName,
  limitCoordinate,
  orientationAxisMultiplier,
  poiCoordinates,
  poiCssVarName,
  zoomMultiplier,
} from "./resizeObserverMapCoordinates.tools";
import { axes, Axis } from "./Axis";
import { Coordinates } from "./Coordinates";
import { Orientation } from "../type";
import { ImageDimensionsContainer } from "./ImageDimensionsContainer";
import { zooms } from "./Zoom";

const derivedDetails = (
  imageDimensionContainer: ImageDimensionsContainer,
  dimensions: Coordinates,
): {
  screen: Coordinates;
  ratio: number;
  orientation: Orientation;
  mapDimensions: Coordinates;
  mainAxis: Axis;
} => {
  const screenOrientation: Orientation =
    dimensions.x >= dimensions.y ? "landscape" : "portrait";

  const x = dimensions.x * orientationAxisMultiplier[screenOrientation].x;
  const y = dimensions.y * orientationAxisMultiplier[screenOrientation].y;
  const ratio = x / y;
  const orientation: Orientation = ratio >= 1 ? "landscape" : "portrait";

  const mapDimensions = imageDimensionContainer.MAP;

  const mainAxis: Axis = mapDimensions.x / mapDimensions.y < ratio ? "x" : "y";

  return {
    screen: {
      x,
      y,
    },
    ratio,
    orientation,
    mapDimensions,
    mainAxis,
  };
};

export const resizeObserverMapCoordinatesCalculators: ((
  arg: ResizeObserverArgs,
) => (dimensions: Coordinates) => void)[] = [
  ({ htmlStyle, imageDimensionContainer }) =>
    (dimensions) => {
      const { screen, mapDimensions, mainAxis } = derivedDetails(
        imageDimensionContainer,
        dimensions,
      );

      zooms.forEach((zoom) => {
        const lengthMultiplier =
          (screen[mainAxis] * zoomMultiplier[zoom]) / mapDimensions[mainAxis];
        axes.forEach((axis) => {
          pois.forEach((poi) => {
            const coord = limitCoordinate({
              coord:
                -(poiCoordinates[poi][axis] * lengthMultiplier) +
                screen[axis] / 2,
              mapDimensions,
              screen,
              axis,
              lengthMultiplier,
            });
            htmlStyle.setProperty(poiCssVarName(poi, axis, zoom), `${coord}px`);
          });
        });
      });
    },
  ({ htmlStyle, imageDimensionContainer }) =>
    (dimensions) => {
      const { screen, mainAxis } = derivedDetails(
        imageDimensionContainer,
        dimensions,
      );

      zooms.forEach((zoom) => {
        const length = screen[mainAxis] * zoomMultiplier[zoom];
        switch (mainAxis) {
          case "x":
            htmlStyle.setProperty(bgSizeCssVarName("x", zoom), `${length}px`);
            htmlStyle.setProperty(bgSizeCssVarName("y", zoom), `auto`);
            break;
          case "y":
            htmlStyle.setProperty(bgSizeCssVarName("x", zoom), `auto`);
            htmlStyle.setProperty(bgSizeCssVarName("y", zoom), `${length}px`);
            break;
          default:
        }
      });
    },
];
