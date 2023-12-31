import { createPreloader } from "./preLoad/createPreLoader";
import "./style/themes.scss";

const getHours = (): number => new Date().getHours();

export const applyTheme = (): void => {
  const hours = getHours();
  if (hours >= 20 || hours <= 7) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.add("light");
  }
};

applyTheme();
createPreloader();
