import { ResizeObserverArgs } from "./ResizeObserverArgs";
import { ImageName } from "../type";
import { imageCssNameMap } from "./ImageCssNameMap";

const rawCalculators: ((arg: ResizeObserverArgs) => (ratio: number) => void)[] =
  [
    ({ htmlStyle, imageRatioContainer }) =>
      (ratio) => {
        (["CULTURE", "HEROES", "PARTY", "VIEW"] as ImageName[]).forEach(
          (name) => {
            htmlStyle.setProperty(
              `--kings-floating-${imageCssNameMap[name]}-animation-name`,
              `${imageCssNameMap[name]}Floating${
                imageRatioContainer[name] < ratio ? "Landscape" : "Portrait"
              }`,
            );
          },
        );
      },
    ({ htmlStyle }) =>
      (ratio) => {
        (
          [
            "APARTMENT",
            "HEROES",
            "VIEW",
            "PARLIAMENT",
            "CULTURE",
          ] as ImageName[]
        ).forEach((name) => {
          htmlStyle.setProperty(
            `--kings-tour-${imageCssNameMap[name]}-animation-name`,
            `${imageCssNameMap[name]}Tour${
              ratio >= 1 ? "Landscape" : "Portrait"
            }`,
          );
        });
      },
    ({ htmlStyle, imageRatioContainer }) =>
      (ratio) => {
        const orientationMultiplier: number = ratio <= 1 ? 4 / 3 : 3 / 4;
        const animationName =
          imageRatioContainer.MAP < ratio * orientationMultiplier
            ? "Portrait"
            : "Landscape";
        const fullName = `${imageCssNameMap.MAP}Tour${animationName}`;
        htmlStyle.setProperty(
          `--kings-tour-${imageCssNameMap.MAP}-animation-name`,
          `${fullName}`,
        );
      },
  ];

let initialized = false;

export const resizeObserverVariables = (args: ResizeObserverArgs): void => {
  if (initialized) {
    return;
  }
  initialized = true;
  const calculators = rawCalculators.map((calc) => calc(args));

  // Initialising animations
  let currentRatio = window.innerWidth / window.innerHeight;
  calculators.forEach((calc) => calc(currentRatio));

  window.addEventListener("resize", () => {
    currentRatio = window.innerWidth / window.innerHeight;
    calculators.forEach((calc) => calc(currentRatio));
  });
};
