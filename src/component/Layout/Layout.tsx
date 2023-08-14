import React, { FC, PropsWithChildren } from "react";
import { ContentRouter } from "./PageRouter";
import { BackgroundRouter } from "./BackgroundRouter";

export const Layout: FC<PropsWithChildren> = () => {
  return (
    <>
      <BackgroundRouter />
      <ContentRouter />
    </>
  );
};
