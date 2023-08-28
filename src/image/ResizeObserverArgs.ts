import { ImageRatioContainer } from "./ImageRatioContainer";
import { ImageDimensionsContainer } from "./ImageDimensionsContainer";

export type ResizeObserverArgs = {
  htmlStyle: CSSStyleDeclaration;
  imageRatioContainer: ImageRatioContainer;
  imageDimensionContainer: ImageDimensionsContainer;
};
