import React, { FC, PropsWithChildren } from "react";
import { t } from "ttag";
import { Content } from "../../Content";
import { Bubble, Title } from "../../Bubble";

export const Home: FC<PropsWithChildren> = () => {
  return (
    <Content>
      <Title>{t`King's Corner Quarters`}</Title>
      <Bubble>{t`Cosy rooms in the center of Downtown - Budapest`}</Bubble>
      <Bubble>{t`Numerous cultural spots and party places are in the vicinity`}</Bubble>
      <Bubble>{t`Great public transportation options`}</Bubble>
      <Bubble>{t`Perfect for family meetings or for groups up to 9 people`}</Bubble>
    </Content>
  );
};
