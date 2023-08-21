import React, { FC, PropsWithChildren } from "react";
import { PageRouter } from "./PageRouter";
import { NavigatorContainer, NavigatorLink } from "../navigation";
import { Content } from "../../Content";

export const ContentRouter: FC<PropsWithChildren> = () => {
  return (
    <>
      <Content>
        <PageRouter />
      </Content>
      <NavigatorContainer>
        <NavigatorLink direction="left" />
        <NavigatorLink direction="right" />
      </NavigatorContainer>
    </>
  );
};
