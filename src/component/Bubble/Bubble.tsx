import React, { CSSProperties, FC, PropsWithChildren } from "react";
import styles from "./Bubble.module.scss";

interface BubbleProps {
  style?: CSSProperties;
}

export const Bubble: FC<PropsWithChildren<BubbleProps>> = ({
  children,
  style = {},
}) => {
  return (
    <div className={styles.bubble} style={style}>
      {children}
    </div>
  );
};
