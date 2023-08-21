import React, { FC, PropsWithChildren } from "react";
import { t } from "ttag";
import { Content } from "../../Content";
import { Title } from "../../Bubble";

export const Tour: FC<PropsWithChildren> = () => {
  return (
    <Content>
      <Title>{t`City tour`}</Title>
    </Content>
  );
};
