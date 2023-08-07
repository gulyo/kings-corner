import React, { FC, PropsWithChildren } from "react";
import { t } from "ttag";
import { Content } from "../../Content";
import { Title } from "../../Bubble";

export const Home: FC<PropsWithChildren> = () => {
  return (
    <Content>
      <Title>
        <h3>{t`King's Corner Quarters`}</h3>
      </Title>
    </Content>
  );
};
