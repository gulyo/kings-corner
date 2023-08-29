import { ImageName } from "../type";
import { imageCssNameMap } from "./ImageCssNameMap";

export const imageNameCssVarMap = (name: ImageName): string =>
  `--kings-image-${imageCssNameMap[name]}-url`;
