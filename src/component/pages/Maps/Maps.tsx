import React, { FC, PropsWithChildren } from "react";
import { t } from "ttag";
import { Content } from "../../Content";
import { Bubble, Title } from "../../Bubble";
import { mapUrls } from "./mapUrls";

export const Maps: FC<PropsWithChildren> = () => {
  return (
    <Content>
      <Title>{t`Maps`}</Title>
      {mapUrls.map((link) => (
        <Bubble key={link.label}>
          <a target="_blank" rel="noopener noreferrer" href={link.url}>
            {link.label}
          </a>
        </Bubble>
      ))}
    </Content>
  );
};
