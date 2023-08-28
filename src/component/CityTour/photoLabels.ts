import { t } from "ttag";
import { ImageName } from "../../type";

export const photoLabels: { [name in ImageName]?: string } = {
  get APARTMENT(): string {
    return t`Apartment`;
  },
  get HEROES(): string {
    return t`Heroes Square`;
  },
  get VIEW(): string {
    return t`Buda Castle`;
  },
  get PARLIAMENT(): string {
    return t`Parliament`;
  },
  get CULTURE(): string {
    return t`Basilica`;
  },
};
