import React, { FC, PropsWithChildren } from "react";
import styles from "./Content.module.scss";

export const Content: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.anchor}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};
