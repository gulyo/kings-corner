import { t } from "ttag";
import { PathElement } from "../../type";

export const translatedPath: {
  [path in PathElement]: string;
} = {
  get HOME(): string {
    return t`/`;
  },
  get MAPS(): string {
    return t`/maps`;
  },
  get TOUR(): string {
    return t`/tour`;
  },
  get DICTIONARY(): string {
    return t`/dictionary`;
  },
};
