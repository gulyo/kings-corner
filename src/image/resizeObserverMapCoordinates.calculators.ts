import { pois } from "./PoiName";
import {
  bgSizeCssVarName,
  createPoiDimensionContainer,
  limitCoordinate,
  poiCoordinates,
  poiCssVarName,
} from "./resizeObserverMapCoordinates.tools";
import { axes } from "./Axis";
import { Zoom } from "./Zoom";
import { Workbench } from "./Workbench";
import { imageCssNameMap } from "./ImageCssNameMap";

/**
 * IMPORTANT: I needed some way of communicating among calculator functions.
 * So, now the order is important, some functions depend on each other.
 */
export const resizeObserverMapCoordinatesCalculators: ((
  htmlStyle: CSSStyleDeclaration,
) => (workbench: Workbench) => Workbench)[] = [
  (htmlStyle) => (workbench) => {
    // Map PoiCoordinates
    const { screen, mapDimensions, mainAxis, derivedZoomMultiplier } =
      workbench.derivedDetails;

    const zoom: Zoom = "out";
    const lengthMultiplier =
      (screen[mainAxis] * derivedZoomMultiplier[zoom]) /
      mapDimensions[mainAxis];

    const limitedPoiCoordinatesDifferenceMap = createPoiDimensionContainer();

    axes.forEach((axis) => {
      pois.forEach((poi) => {
        const coord =
          -(poiCoordinates[poi][axis] * lengthMultiplier) + screen[axis] / 2;
        const coordLimited = limitCoordinate({
          coord,
          screen,
          mapDimensions,
          lengthMultiplier,
          axis,
        });
        htmlStyle.setProperty(
          poiCssVarName(poi, axis, zoom),
          `${coordLimited}px`,
        );
        limitedPoiCoordinatesDifferenceMap[poi][axis] = coordLimited - coord;
      });
    });
    return { ...workbench, limitedPoiCoordinatesDifferenceMap };
  },
  (htmlStyle) => (workbench) => {
    // Map zoom
    const { screen, mainAxis, derivedZoomMultiplier } =
      workbench.derivedDetails;
    const zoom: Zoom = "out";
    const length = screen[mainAxis] * derivedZoomMultiplier[zoom];
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
    return { ...workbench };
  },
  (htmlStyle) => (workbench) => {
    // Scope dimensions
    const { scope } = workbench.derivedDetails;

    htmlStyle.setProperty("--kings-tour-scope-width", `${scope.x}px`);
    htmlStyle.setProperty("--kings-tour-scope-height", `${scope.y}px`);
    htmlStyle.setProperty(
      "--kings-tour-scope-shadow-width",
      `${scope.x / 4}px`,
    );
    return { ...workbench };
  },
  (htmlStyle) => (workbench) => {
    // Scope Poi Coordinates
    const { scope, scopeMainAxis, scopeDimensions, derivedZoomMultiplier } =
      workbench.derivedDetails;

    const zoom: Zoom = "in";
    const lengthMultiplier =
      (scope[scopeMainAxis] * derivedZoomMultiplier[zoom]) /
      scopeDimensions[scopeMainAxis];

    axes.forEach((axis) => {
      pois.forEach((poi) => {
        const coord = limitCoordinate({
          coord:
            -(poiCoordinates[poi][axis] * lengthMultiplier) + scope[axis] / 2,
          screen: scope,
          mapDimensions: scopeDimensions,
          lengthMultiplier,
          axis,
        });
        htmlStyle.setProperty(poiCssVarName(poi, axis, zoom), `${coord}px`);
      });
    });
    return { ...workbench };
  },
  (htmlStyle) => (workbench) => {
    // Scope zoom
    const { scope, scopeMainAxis, derivedZoomMultiplier } =
      workbench.derivedDetails;
    const zoom: Zoom = "in";
    const length = scope[scopeMainAxis] * derivedZoomMultiplier[zoom];
    switch (scopeMainAxis) {
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
    return { ...workbench };
  },
  (htmlStyle) => (workbench) => {
    // Scope position

    const { limitedPoiCoordinatesDifferenceMap } = workbench;
    const { screen } = workbench.derivedDetails;

    pois.forEach((poi) => {
      const diff = limitedPoiCoordinatesDifferenceMap[poi];
      axes.forEach((axis) => {
        htmlStyle.setProperty(
          `--kings-tour-scope-position-${imageCssNameMap[poi]}-${axis}`,
          `${screen[axis] / 2 + diff[axis]}px`,
        );
      });
    });

    return { ...workbench };
  },
];
