import React, { FC, PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import { ContentRouter } from "./PageRouter";
import { BackgroundRouter } from "./BackgroundRouter";

export const Layout: FC<PropsWithChildren> = () => {
  const { deployLocation } = kings;
  return (
    <BrowserRouter basename={deployLocation}>
      <BackgroundRouter />
      <ContentRouter />
    </BrowserRouter>
  );
};
