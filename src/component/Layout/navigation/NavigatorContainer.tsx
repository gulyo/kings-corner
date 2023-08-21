import React, { Children, FC, Fragment, PropsWithChildren } from "react";
import styles from "./NavigatorContainer.module.scss";

export const NavigatorContainer: FC<PropsWithChildren> = ({ children }) => {
  const childArray = Children.toArray(children);
  return (
    <div className={styles.container}>
      {childArray.map((child, index) => (
        <Fragment key={Math.random()}>
          {child}
          {index < childArray.length - 1 && <div className={styles.spacer} />}
        </Fragment>
      ))}
    </div>
  );
};
