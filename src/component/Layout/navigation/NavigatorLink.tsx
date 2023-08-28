/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { FC, PropsWithChildren } from "react";
import { clsx } from "clsx";
import { useSelector } from "react-redux";
import styles from "./NavigatorLink.module.scss";
import { NavigatorDirection } from "../../../type";
import {
  uiNavigateToSelector,
  uiNavigatorLocationSelector,
} from "../../../redux/selector";
import { navigatorLocationToMap } from "./navigatorLocationToMap";
import { translatedLinkLabel } from "./translatedLinkLabel";
import { store, uiSetNavigateToAction } from "../../../redux";

interface NavigatorLinkProps {
  direction: NavigatorDirection;
}

export const NavigatorLink: FC<PropsWithChildren<NavigatorLinkProps>> = ({
  direction,
}) => {
  const navigatorLocation = useSelector(uiNavigatorLocationSelector);
  const target = navigatorLocationToMap[navigatorLocation]?.[direction];
  const navigateTo = useSelector(uiNavigateToSelector);

  if (!target) {
    return null;
  }
  const handleClick = (): void => {
    if (navigateTo) {
      return;
    }
    store.dispatch(
      uiSetNavigateToAction({
        navigateTo: target,
        navigatorDirection: direction,
      }),
    );
  };

  return (
    <div
      onClick={handleClick}
      className={clsx({
        [styles.navigatorLink]: true,
        [styles.left]: direction === "left",
        [styles.right]: direction === "right",
        [styles.disabled]: !!navigateTo,
      })}>
      {translatedLinkLabel[target]}
    </div>
  );
};
