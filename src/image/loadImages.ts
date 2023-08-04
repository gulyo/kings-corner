import resourceParty from "./resource/party.jpg";
import resourceCulture from "./resource/culture.jpg";
import resourceMap from "./resource/map.jpg";
import resourceView from "./resource/view.jpg";
import { comLogger } from "../util";
import { store, uiSetImageUrlsAction } from "../redux";
import { ImageName, ImageUrlContainer } from "../type";

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
    const urls = Object.values(resources);

    const increase = (): void => {
      ++imageCounter;
      if (!wrapped && imageCounter >= urls.length) {
        wrapped = true;
        resolve();
      }
    };

    const containers = urls.map((resource) => ({
      url: resource,
      image: new Image(),
    }));
    containers.forEach(({ image, url }) => {
      image.onload = increase;
      image.onerror = () => {
        increase();
        comLogger.error(`${url} cannot be loaded`);
      };
      image.src = url;
    });
    store.dispatch(uiSetImageUrlsAction(resources));
  });
};
