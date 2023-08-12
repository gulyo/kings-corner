import { t } from "ttag";

export const mapUrls: { url: string; get label(): string }[] = [
  {
    url: "https://goo.gl/maps/BpMzUYosBc4Qxf7t9",
    get label() {
      return t`Cultural spots`;
    },
  },
  {
    url: "https://goo.gl/maps/BpMzUYosBc4Qxf7t9",
    get label() {
      return t`Restaurants`;
    },
  },
  {
    url: "https://goo.gl/maps/BpMzUYosBc4Qxf7t9",
    get label() {
      return t`Thermal beaches`;
    },
  },
  {
    url: "https://goo.gl/maps/BpMzUYosBc4Qxf7t9",
    get label() {
      return t`Pubs & craft beer`;
    },
  },
  {
    url: "https://goo.gl/maps/BpMzUYosBc4Qxf7t9",
    get label() {
      return t`For kids`;
    },
  },
  {
    url: "https://goo.gl/maps/BpMzUYosBc4Qxf7t9",
    get label() {
      return t`Let's go party!`;
    },
  },
];
