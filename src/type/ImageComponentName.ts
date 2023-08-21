import { FloatingImage } from "../component/FloatingImage";
import { CityTour } from "../component/CityTour";

const imageComponents: readonly string[] = [
  FloatingImage.name,
  CityTour.name,
] as const;

export type ImageComponentName = (typeof imageComponents)[number];
