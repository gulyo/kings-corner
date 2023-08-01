import React, { FC } from "react";
import { t } from "ttag";

export const AppMenu: FC<Record<string, unknown>> = () => {
  return <div>{t`Hello`}</div>;
};
