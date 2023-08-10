import { t } from "ttag";
import { PathElement } from "../../../type";

export const translatedLinkLabel: {
  [key in PathElement]: string;
} = {
  get HOME(): string {
    return t`Home`;
  },
  get MAPS(): string {
    return t`Maps`;
  },
};
