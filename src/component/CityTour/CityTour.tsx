import React, { FC, PropsWithChildren, useEffect, useRef } from "react";
import styles from "./CityTour.module.scss";

export const CityTour: FC<PropsWithChildren> = () => {
  const mapRef = useRef<HTMLDivElement>();
  useEffect(() => {
    if (!mapRef.current) {
      return () => undefined;
    }
    const { current: map } = mapRef;
    const orientationHandler = (): void => {
      map.classList.remove(styles.map);
      setTimeout(() => map.classList.add(styles.map), 1);
    };
    window.screen.orientation.addEventListener("change", orientationHandler);
    return () =>
      window.screen.orientation.removeEventListener(
        "change",
        orientationHandler,
      );
  }, [mapRef]);

  // screen.orientation.addEventListener("change", )
  return (
    <div className={styles.anchor}>
      <div className={`${styles.image} ${styles.map}`} ref={mapRef} />

      <div className={`${styles.image} ${styles.photo} ${styles.apartment}`} />
      <div className={`${styles.image} ${styles.photo} ${styles.heroes}`} />
      <div className={`${styles.image} ${styles.photo} ${styles.view}`} />
      <div className={`${styles.image} ${styles.photo} ${styles.parliament}`} />
      <div className={`${styles.image} ${styles.photo} ${styles.culture}`} />
    </div>
  );
};
