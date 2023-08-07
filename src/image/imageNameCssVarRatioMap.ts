import { ImageName } from "../type";

export const imageNameCssVarRatioMap: {
  [key in ImageName]: string;
} = {
  [ImageName.MAP]: "--kings-image-map-ratio",
  [ImageName.CULTURE]: "--kings-image-culture-ratio",
  [ImageName.VIEW]: "--kings-image-view-ratio",
  [ImageName.PARTY]: "--kings-image-party-ratio",
};
