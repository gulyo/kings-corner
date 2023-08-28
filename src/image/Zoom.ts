export const zooms = ["in", "out"] as const;

export type Zoom = (typeof zooms)[number];
