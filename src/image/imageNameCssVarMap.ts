import { ImageName } from "../type";

export const imageNameCssVarMap: {
  [key in ImageName]: { url: string };
} = {
  MAP: {
    url: "--kings-image-map-url",
  },
  CULTURE: {
    url: "--kings-image-culture-url",
  },
  VIEW: {
    url: "--kings-image-view-url",
  },
  PARTY: {
    url: "--kings-image-party-url",
  },
  HEROES: {
    url: "--kings-image-heroes-url",
  },
  PARLIAMENT: {
    url: "--kings-image-parliament-url",
  },
  APARTMENT: {
    url: "--kings-image-apartment-url",
  },
};
