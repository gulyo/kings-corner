import { ResizeObserverArgs } from "./ResizeObserverArgs";
import { resizeObserverMapCoordinatesCalculators } from "./resizeObserverMapCoordinates.calculators";
import { Coordinates } from "./Coordinates";

let initialized = false;

export const resizeObserverMapCoordinates: (
  args: ResizeObserverArgs,
) => void = (args) => {
  if (initialized) {
    return;
  }
  initialized = true;

  const calculators = resizeObserverMapCoordinatesCalculators.map((calc) =>
    calc(args),
  );

  // Initialising animations
  let currentDimensions: Coordinates = {
    x: window.innerWidth,
    y: window.innerHeight,
  };
  calculators.forEach((calc) => calc(currentDimensions));

  window.addEventListener("resize", () => {
    currentDimensions = {
      x: window.innerWidth,
      y: window.innerHeight,
    };
    calculators.forEach((calc) => calc(currentDimensions));
  });
};
