import React, { FC, PropsWithChildren, useEffect, useRef } from "react";
import styles from "./CityTour.module.scss";
import { photoLabels } from "./photoLabels";
import { TourPhoto } from "./TourPhoto";

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

  return (
    <div className={styles.anchor}>
      <div className={`${styles.image} ${styles.map}`} ref={mapRef} />

      <TourPhoto
        className={`${styles.image} ${styles.photo} ${styles.apartment}`}
        label={photoLabels.APARTMENT}
      />
      <TourPhoto
        className={`${styles.image} ${styles.photo} ${styles.heroes}`}
        label={photoLabels.HEROES}
      />
      <TourPhoto
        className={`${styles.image} ${styles.photo} ${styles.view}`}
        label={photoLabels.VIEW}
      />
      <TourPhoto
        className={`${styles.image} ${styles.photo} ${styles.parliament}`}
        label={photoLabels.PARLIAMENT}
      />
      <TourPhoto
        className={`${styles.image} ${styles.photo} ${styles.culture}`}
        label={photoLabels.CULTURE}
      />
    </div>
  );
};
