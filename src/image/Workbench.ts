import { ImageDimensionsContainer } from "./ImageDimensionsContainer";
import { PoiName } from "./PoiName";
import { Details } from "./Details";

export interface Workbench {
  derivedDetails: Details;
  limitedPoiCoordinatesDifferenceMap?: ImageDimensionsContainer<PoiName>;
}
