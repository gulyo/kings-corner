import React, { FC, PropsWithChildren } from "react";
import { t } from "ttag";
import { Content } from "../../Content";
import { Title } from "../../Bubble";

export const Dictionary: FC<PropsWithChildren> = () => {
  return (
    <Content>
      <Title>{t`Most frequent phrases`}</Title>
    </Content>
  );
};
