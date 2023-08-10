import React, { FC, PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import { PageRouter } from "./PageRouter";
import { NavigatorLink } from "../navigation";
import { Content } from "../../Content";

export const ContentRouter: FC<PropsWithChildren> = () => {
  const { deployLocation } = kings;
  return (
    <BrowserRouter basename={deployLocation}>
      <Content>
        <PageRouter />
      </Content>
      <NavigatorLink direction="left" />
      <NavigatorLink direction="right" />
    </BrowserRouter>
  );
};
