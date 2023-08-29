import resourceParty from "./resource/party.jpg";
import resourceCulture from "./resource/culture.jpg";
import resourceMap from "./resource/map.jpg";
import resourceView from "./resource/view.jpg";
import resourceHeroes from "./resource/heroes.jpg";
import resourceParliament from "./resource/parliament.jpg";
import resourceApartment from "./resource/apartment.jpg";
import { comLogger } from "../util";
import { store, uiSetImageUrlsAction } from "../redux";
import { ImageName, ImageUrlContainer } from "../type";
import { imageNameCssVarMap } from "./imageNameCssVarMap";
import { ImageRatioContainer } from "./ImageRatioContainer";
import { ResizeObserverArgs } from "./ResizeObserverArgs";
import { ImageDimensionsContainer } from "./ImageDimensionsContainer";

export const loadImages = async (): Promise<ResizeObserverArgs> => {
  return new Promise((resolve) => {
    let imageCounter = 0;
    let wrapped = false;

    const resources: ImageUrlContainer = {
      MAP: resourceMap,
      CULTURE: resourceCulture,
      PARTY: resourceParty,
      VIEW: resourceView,
      HEROES: resourceHeroes,
      PARLIAMENT: resourceParliament,
      APARTMENT: resourceApartment,
      SCOPE: resourceMap,
    };
    const urls = Object.entries(resources);

    const containers = urls.map(([name, resource]: [ImageName, string]) => ({
      name,
      url: resource,
      image: new Image(),
    }));
    const htmlStyle = document.documentElement.style;

    const increase = (): void => {
      ++imageCounter;
      if (!wrapped && imageCounter >= urls.length) {
        wrapped = true;
        const imageRatioContainer: ImageRatioContainer = containers.reduce(
          (res, cur) => ({
            ...res,
            [cur.name]: cur.image.width / cur.image.height,
          }),
          {} as ImageRatioContainer,
        );
        const imageDimensionContainer: ImageDimensionsContainer =
          containers.reduce(
            (res, cur) => ({
              ...res,
              [cur.name]: {
                x: cur.image.naturalWidth,
                y: cur.image.naturalHeight,
              },
            }),
            {} as ImageDimensionsContainer,
          );
        resolve({ htmlStyle, imageRatioContainer, imageDimensionContainer });
      }
    };

    containers.forEach(({ image, url, name }) => {
      image.onload = () => {
        increase();
        htmlStyle.setProperty(imageNameCssVarMap(name), `url("${url}")`);
      };
      image.onerror = () => {
        increase();
        comLogger.error(`${url} cannot be loaded`);
      };
      image.src = url;
    });
    store.dispatch(uiSetImageUrlsAction(resources));
  });
};
