import React, { FC, PropsWithChildren } from "react";
import { FloatingImage } from "../FloatingImage";
import { ContentRouter } from "./PageRouter";
import { Content } from "../Content";

export const Layout: FC<PropsWithChildren> = () => {
  return (
    <>
      <FloatingImage />
      <Content>
        <ContentRouter />
      </Content>
    </>
  );
};
