import React, { CSSProperties, FC } from "react";

import { useSelector } from "react-redux";
import styles from "./FloatinImage.module.scss";
import { uiImageUrlsSelector } from "../../redux/selector";
import { ImageName } from "../../type";

export const FloatingImage: FC<Record<string, unknown>> = () => {
  const {
    [ImageName.MAP]: urlMap,
    [ImageName.CULTURE]: urlCulture,
    [ImageName.PARTY]: urlParty,
    [ImageName.VIEW]: urlView,
  } = useSelector(uiImageUrlsSelector);

  const imageStyles: { class: string; style: CSSProperties }[] = [
    {
      class: styles.imageMap,
      style: {
        backgroundImage: `url("${urlMap}")`,
      },
    },
    {
      class: styles.imageView,
      style: {
        backgroundImage: `url("${urlView}")`,
      },
    },
    {
      class: styles.imageCulture,
      style: {
        backgroundImage: `url("${urlCulture}")`,
      },
    },
    {
      class: styles.imageParty,
      style: {
        backgroundImage: `url("${urlParty}")`,
      },
    },
  ];

  return (
    <div className={styles.anchor}>
      {imageStyles.map((imageStyle) => (
        <div
          key={imageStyle.class}
          className={`${styles.image} ${imageStyle.class}`}
          style={imageStyle.style}
        />
      ))}
    </div>
  );
};
