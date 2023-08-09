import React, { FC, PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import { PageRouter } from "./PageRouter";

export const ContentRouter: FC<PropsWithChildren> = () => {
  const { deployLocation } = kings;
  return (
    <BrowserRouter basename={deployLocation}>
      <PageRouter />
    </BrowserRouter>
  );
};
