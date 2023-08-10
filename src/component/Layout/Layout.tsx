import React, { FC, PropsWithChildren } from "react";
import { FloatingImage } from "../FloatingImage";
import { ContentRouter } from "./PageRouter";

export const Layout: FC<PropsWithChildren> = () => {
  return (
    <>
      <FloatingImage />
      <ContentRouter />
    </>
  );
};
