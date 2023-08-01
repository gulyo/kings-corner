import { PRELOADER_ID } from "./preloader.constant";
import styles from "./preloader.module.scss";

export const createPreloader = (): void => {
  const elem = document.createElement("div");
  elem.setAttribute("id", PRELOADER_ID);
  elem.classList.add(styles.spinner);
  document.body.appendChild(elem);
};
