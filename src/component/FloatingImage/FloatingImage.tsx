import React, { FC, PropsWithChildren } from "react";
import styles from "./FloatinImage.module.scss";

export const FloatingImage: FC<PropsWithChildren> = () => {
  const imageStyles: string[] = [
    styles.imageView,
    styles.imageCulture,
    styles.imageParty,
    styles.imageHeroes,
  ];

  return (
    <div className={styles.anchor}>
      {imageStyles.map((imageStyle) => (
        <div key={imageStyle} className={`${styles.image} ${imageStyle}`} />
      ))}
    </div>
  );
};
