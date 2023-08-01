import resource001 from "./resource/001.jpg";
import resource002 from "./resource/002.jpg";
import resource003 from "./resource/003.jpg";
import { comLogger } from "../util";

let imageUrls: string[] = [];

export const loadImages = async (): Promise<void> => {
  return new Promise((resolve) => {
    let imageCounter = 0;
    let wrapped = false;

    const resources: string[] = [resource001, resource002, resource003];

    const increase = (): void => {
      ++imageCounter;
      if (!wrapped && imageCounter >= resources.length) {
        wrapped = true;
        resolve();
      }
    };

    const containers = [resource001, resource002, resource003].map(
      (resource) => ({
        url: resource,
        image: new Image(),
      }),
    );
    containers.forEach(({ image, url }) => {
      image.onload = increase;
      image.onerror = () => {
        increase();
        comLogger.error(`${url} cannot be loaded`);
      };
      image.src = url;
    });
    imageUrls = containers.map((container) => container.url);
  });
};

export const getImageUrls = (): string[] => imageUrls;
