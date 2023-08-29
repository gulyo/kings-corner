import { ResizeObserverArgs } from "./ResizeObserverArgs";
import { ImageName } from "../type";
import { imageCssNameMap } from "./ImageCssNameMap";

export const resizeObserverVariablesCalculators: ((
  arg: ResizeObserverArgs,
) => (ratio: number) => void)[] = [
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
          "MAP",
          "SCOPE",
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
];
