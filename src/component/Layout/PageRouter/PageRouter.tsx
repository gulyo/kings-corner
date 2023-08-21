import React, { FC, PropsWithChildren } from "react";
import { Route, Routes } from "react-router-dom";
import { Dictionary, Home, Maps, Tour } from "../../pages";
import { translatedPath } from "../translatedPath";
import { useNavigatorLocation } from "./useNavigatorLocation";

export const PageRouter: FC<PropsWithChildren> = () => {
  // NavigatorLinks will need the current location
  useNavigatorLocation();

  return (
    <Routes>
      <Route path={translatedPath.HOME} element={<Home />} />
      <Route path={translatedPath.MAPS} element={<Maps />} />
      <Route path={translatedPath.TOUR} element={<Tour />} />
      <Route path={translatedPath.DICTIONARY} element={<Dictionary />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
