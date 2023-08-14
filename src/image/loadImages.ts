import resourceParty from "./resource/party.jpg";
import resourceCulture from "./resource/culture.jpg";
import resourceMap from "./resource/map.jpg";
import resourceView from "./resource/view.jpg";
import resourceHeroes from "./resource/heroes.jpg";
import resourceParliament from "./resource/parliament.jpg";
import resourceApartment from "./resource/apartment.jpg";
import resourceNeighbourhood from "./resource/neighbourhood.jpg";
import { comLogger } from "../util";
import { store, uiSetImageUrlsAction } from "../redux";
import { ImageName, ImageUrlContainer } from "../type";
import { imageNameCssVarMap } from "./imageNameCssVarMap";

export const loadImages = async (): Promise<void> => {
  return new Promise((resolve) => {
    let imageCounter = 0;
    let wrapped = false;

    const resources: ImageUrlContainer = {
      [ImageName.MAP]: resourceMap,
      [ImageName.CULTURE]: resourceCulture,
      [ImageName.PARTY]: resourceParty,
      [ImageName.VIEW]: resourceView,
      [ImageName.HEROES]: resourceHeroes,
      [ImageName.PARLIAMENT]: resourceParliament,
      [ImageName.APARTMENT]: resourceApartment,
      [ImageName.NEIGHBOURHOOD]: resourceNeighbourhood,
    };
    const urls = Object.entries(resources);

    const increase = (): void => {
      ++imageCounter;
      if (!wrapped && imageCounter >= urls.length) {
        wrapped = true;
        resolve();
      }
    };

    const containers = urls.map(([name, resource]) => ({
      name,
      url: resource,
      image: new Image(),
    }));
    const htmlStyle = document.documentElement.style;
    containers.forEach(({ image, url, name }) => {
      image.onload = () => {
        increase();
        htmlStyle.setProperty(
          imageNameCssVarMap[name].ratio,
          (image.width / image.height).toString(10),
        );
        htmlStyle.setProperty(imageNameCssVarMap[name].url, `url("${url}")`);
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
