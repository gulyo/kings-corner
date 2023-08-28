import { ResizeObserverArgs } from "./ResizeObserverArgs";
import { resizeObserverVariablesCalculators } from "./resizeObserverVariables.calculators";

let initialized = false;

export const resizeObserverVariables = (args: ResizeObserverArgs): void => {
  if (initialized) {
    return;
  }
  initialized = true;
  const calculators = resizeObserverVariablesCalculators.map((calc) =>
    calc(args),
  );

  // Initialising animations
  let currentRatio = window.innerWidth / window.innerHeight;
  calculators.forEach((calc) => calc(currentRatio));

  window.addEventListener("resize", () => {
    currentRatio = window.innerWidth / window.innerHeight;
    calculators.forEach((calc) => calc(currentRatio));
  });
};
