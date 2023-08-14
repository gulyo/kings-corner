import { ImageName } from "../type";

export const imageNameCssVarMap: {
  [key in ImageName]: { url: string; ratio: string };
} = {
  [ImageName.MAP]: {
    url: "--kings-image-map-url",
    ratio: "--kings-image-map-ratio",
  },
  [ImageName.CULTURE]: {
    url: "--kings-image-culture-url",
    ratio: "--kings-image-culture-ratio",
  },
  [ImageName.VIEW]: {
    url: "--kings-image-view-url",
    ratio: "--kings-image-view-ratio",
  },
  [ImageName.PARTY]: {
    url: "--kings-image-party-url",
    ratio: "--kings-image-party-ratio",
  },
  [ImageName.HEROES]: {
    url: "--kings-image-heroes-url",
    ratio: "--kings-image-heroes-ratio",
  },
  [ImageName.PARLIAMENT]: {
    url: "--kings-image-parliament-url",
    ratio: "--kings-image-parliament-ratio",
  },
  [ImageName.APARTMENT]: {
    url: "--kings-image-apartment-url",
    ratio: "--kings-image-apartment-ratio",
  },
  [ImageName.NEIGHBOURHOOD]: {
    url: "--kings-image-neighbourhood-url",
    ratio: "--kings-image-neighbourhood-ratio",
  },
};
