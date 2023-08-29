import { ResizeObserverArgs } from "./ResizeObserverArgs";
import { resizeObserverMapCoordinatesCalculators } from "./resizeObserverMapCoordinates.calculators";
import { Coordinates } from "./Coordinates";
import { derivedDetails } from "./derivedDetails";

let initialized = false;

export const resizeObserverMapCoordinates: (
  args: ResizeObserverArgs,
) => void = ({ htmlStyle, imageDimensionContainer }) => {
  if (initialized) {
    return;
  }
  initialized = true;

  const calculators = resizeObserverMapCoordinatesCalculators.map((calc) =>
    calc(htmlStyle),
  );

  // Initialising animations
  let currentDimensions: Coordinates = {
    x: window.innerWidth,
    y: window.innerHeight,
  };
  calculators.reduce((res, calc) => calc(res), {
    derivedDetails: derivedDetails(imageDimensionContainer, currentDimensions),
  });

  window.addEventListener("resize", () => {
    currentDimensions = {
      x: window.innerWidth,
      y: window.innerHeight,
    };
    calculators.reduce((res, calc) => calc(res), {
      derivedDetails: derivedDetails(
        imageDimensionContainer,
        currentDimensions,
      ),
    });
  });
};
