import React, { FC, PropsWithChildren } from "react";
import { Route, Routes } from "react-router-dom";
import { translatedPath } from "../translatedPath";
import { CityTour } from "../../CityTour";
import { FloatingImage } from "../../FloatingImage";

export const BackgroundRouter: FC<PropsWithChildren> = () => {
  return (
    <Routes>
      <Route path={translatedPath.TOUR} element={<CityTour />} />
      <Route path="*" element={<FloatingImage />} />
    </Routes>
  );
};
