export const imageNames = [
  "APARTMENT",
  "CULTURE",
  "HEROES",
  "MAP",
  "PARLIAMENT",
  "PARTY",
  "VIEW",
  "SCOPE",
] as const;

export type ImageName = (typeof imageNames)[number];
