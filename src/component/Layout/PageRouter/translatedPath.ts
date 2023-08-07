import { t } from "ttag";
import { PathElement } from "./PathElement";

export const translatedPath: {
  [path in PathElement]: string;
} = {
  get HOME(): string {
    return t`/`;
  },
  get MAPS(): string {
    return t`/maps`;
  },
};
