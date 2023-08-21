import { t } from "ttag";
import { PathElement } from "../../type";

export const translatedPageTitle: {
  [path in PathElement]: string;
} = {
  get HOME(): string {
    return t`Home`;
  },
  get MAPS(): string {
    return t`Maps`;
  },
  get TOUR(): string {
    return t`City tour`;
  },
  get DICTIONARY(): string {
    return t`Dictionary`;
  },
};
