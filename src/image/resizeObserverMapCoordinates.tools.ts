import { Coordinates } from "./Coordinates";
import { PoiName, pois } from "./PoiName";
import { imageCssNameMap } from "./ImageCssNameMap";
import { Axis } from "./Axis";
import { Orientation } from "../type";
import { Zoom } from "./Zoom";
import { ImageDimensionsContainer } from "./ImageDimensionsContainer";

export const poiCoordinates: ImageDimensionsContainer<PoiName> = {
  APARTMENT: { x: 1812, y: 1268 },
  HEROES: { x: 2434, y: 475 },
  VIEW: { x: 874, y: 1604 },
  PARLIAMENT: { x: 1128, y: 932 },
  CULTURE: { x: 1473, y: 1315 },
};

export const poiCssVarName = (
  name: string,
  coordinate: Axis = "x",
  zoom: Zoom = "out",
): string => `--kings-tour-poi-${imageCssNameMap[name]}-${coordinate}-${zoom}`;

export const bgSizeCssVarName = (
  axis: Axis = "x",
  zoom: Zoom = "out",
): string => `--kings-tour-bg-size-${axis}-${zoom}`;

export const orientationAxisMultiplier: {
  [orientation in Orientation]: { [axis in Axis]: number };
} = {
  portrait: {
    x: 1,
    y: 0.75,
  },
  landscape: {
    x: 0.75,
    y: 1,
  },
};

export const scopeSizeMultiplier = 0.35;

export const zoomMultiplier: { [zoom in Zoom]: number } = {
  out: 1.1,
  in: 4,
};

export const limitCoordinate: (arg: {
  coord: number;
  screen: Coordinates;
  mapDimensions: Coordinates;
  lengthMultiplier: number;
  axis: Axis;
}) => number = ({ coord, screen, mapDimensions, lengthMultiplier, axis }) =>
  Math.max(
    Math.min(coord, 0),
    -mapDimensions[axis] * lengthMultiplier + screen[axis],
  );

export const createPoiDimensionContainer =
  (): ImageDimensionsContainer<PoiName> =>
    pois.reduce(
      (res, cur) => ({
        ...res,
        [cur]: { x: 0, y: 0 } as Coordinates,
      }),
      {} as ImageDimensionsContainer<PoiName>,
    );
