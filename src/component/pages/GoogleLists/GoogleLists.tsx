import React, { FC, PropsWithChildren } from "react";
import { t } from "ttag";
import { Content } from "../../Content";
import { Title } from "../../Bubble";

export const GoogleLists: FC<PropsWithChildren> = () => {
  return (
    <Content>
      <Title>
        <h2>{t`Maps`}</h2>
      </Title>
    </Content>
  );
};
