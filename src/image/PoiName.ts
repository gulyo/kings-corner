export const pois = [
  "APARTMENT",
  "HEROES",
  "VIEW",
  "PARLIAMENT",
  "CULTURE",
] as const;

export type PoiName = (typeof pois)[number];
