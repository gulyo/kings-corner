import React, { FC, PropsWithChildren } from "react";
import { t } from "ttag";
import { Content } from "../../Content";
import { Title } from "../../Bubble";

export const Home: FC<PropsWithChildren> = () => {
  return (
    <Content>
      <Title>{t`King's Corner Quarters`}</Title>
    </Content>
  );
};
