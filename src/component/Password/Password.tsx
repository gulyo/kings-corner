import React, { FC, PropsWithChildren } from "react";
import styles from "./Password.module.scss";

export const PasswordWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
      <div className={styles.container}>password</div>
    </>
  );
};
