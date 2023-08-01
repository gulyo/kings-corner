import { SliceName } from "./SliceName";

export const slicedActionType = <TAction extends string>(
  slice: SliceName,
  action: TAction,
): string => `${slice}/${action}`;
