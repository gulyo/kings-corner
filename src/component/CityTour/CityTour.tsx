import React, { FC, PropsWithChildren, useEffect, useRef } from "react";
import styles from "./CityTour.module.scss";
import { photoLabels } from "./photoLabels";
import { TourPhoto } from "./TourPhoto";

export const CityTour: FC<PropsWithChildren> = () => {
  const mapRef = useRef<HTMLDivElement>();
  const scopeRef = useRef<HTMLDivElement>();
  useEffect(() => {
    if (!mapRef.current || !scopeRef.current) {
      return () => undefined;
    }
    const { current: map } = mapRef;
    const { current: scope } = scopeRef;
    const orientationHandler = (): void => {
      map.classList.remove(styles.map);
      scope.classList.remove(styles.scope);
      setTimeout(() => {
        map.classList.add(styles.map);
        scope.classList.add(styles.scope);
      }, 1);
    };
    window.screen.orientation.addEventListener("change", orientationHandler);
    return () =>
      window.screen.orientation.removeEventListener(
        "change",
        orientationHandler,
      );
  }, [mapRef, scopeRef]);

  return (
    <div className={styles.anchor}>
      <div className={`${styles.image} ${styles.map}`} ref={mapRef}>
        <div className={styles.scope} ref={scopeRef} />
      </div>

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
