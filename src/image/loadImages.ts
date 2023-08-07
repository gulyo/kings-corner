import resourceParty from "./resource/party.jpg";
import resourceCulture from "./resource/culture.jpg";
import resourceMap from "./resource/map.jpg";
import resourceView from "./resource/view.jpg";
import { comLogger } from "../util";
import { store, uiSetImageUrlsAction } from "../redux";
import { ImageName, ImageUrlContainer } from "../type";
import { imageNameCssVarRatioMap } from "./imageNameCssVarRatioMap";

export const loadImages = async (): Promise<void> => {
  return new Promise((resolve) => {
    let imageCounter = 0;
    let wrapped = false;

    const resources: ImageUrlContainer = {
      [ImageName.MAP]: resourceMap,
      [ImageName.CULTURE]: resourceCulture,
      [ImageName.PARTY]: resourceParty,
      [ImageName.VIEW]: resourceView,
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
          imageNameCssVarRatioMap[name],
          (image.width / image.height).toString(10),
        );
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
