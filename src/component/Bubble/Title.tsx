import React, { FC, PropsWithChildren } from "react";
import { Bubble } from "./Bubble";
import styles from "./Title.module.scss";

export const Title: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.title}>
      <Bubble>{children}</Bubble>
    </div>
  );
};
