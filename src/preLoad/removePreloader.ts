import { PRELOADER_ID } from "./preloader.constant";

export const removePreloader = (): void => {
  document.getElementById(PRELOADER_ID)?.remove();
};
