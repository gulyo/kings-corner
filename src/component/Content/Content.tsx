import React, { FC, PropsWithChildren, useCallback } from "react";
import { useSelector } from "react-redux";
import { clsx } from "clsx";
import { useNavigate } from "react-router";
import styles from "./Content.module.scss";
import {
  uiNavigateToSelector,
  uiNavigatorDirectionSelector,
} from "../../redux/selector";
import { navigatorAnimationMap } from "./navigatorAnimationMap";
import {
  store,
  uiSetNavigateToAction,
  uiSetNavigatorLocationAction,
} from "../../redux";
import { translatedPath } from "../Layout/translatedPath";

export const Content: FC<PropsWithChildren> = ({ children }) => {
  const direction = useSelector(uiNavigatorDirectionSelector) ?? "right";
  const navigateTo = useSelector(uiNavigateToSelector);
  const navigate = useNavigate();

  const handleAnimationEnd = useCallback<() => void>(() => {
    const navigateToAnimation = uiNavigateToSelector(store.getState());
    if (!navigateToAnimation) {
      return;
    }
    store.dispatch(uiSetNavigatorLocationAction(navigateToAnimation));
    store.dispatch(uiSetNavigateToAction({}));
    navigate(translatedPath[navigateToAnimation]);
  }, [navigate]);

  return (
    <div className={styles.anchor}>
      <div
        onAnimationEndCapture={handleAnimationEnd}
        className={clsx({
          [styles.container]: true,
          [navigatorAnimationMap.to[direction]]: !navigateTo,
          [navigatorAnimationMap.from[direction]]: navigateTo,
        })}>
        {children}
      </div>
    </div>
  );
};
