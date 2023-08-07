import React, { FC, PropsWithChildren, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { GoogleLists, Home } from "../../pages";
import { translatedPath } from "./translatedPath";
import { uiDisplayLocationSelector } from "../../../redux/selector";
import { store, uiSetDisplayLocationAction } from "../../../redux";

export const PageRouter: FC<PropsWithChildren> = () => {
  const location = useLocation();
  const displayLocation = useSelector(uiDisplayLocationSelector);

  useEffect(() => {
    if (!displayLocation) {
      store.dispatch(uiSetDisplayLocationAction(location));
    }
  }, [location, displayLocation]);

  return (
    <Routes location={displayLocation}>
      <Route path={translatedPath.HOME} element={<Home />} />
      <Route path={translatedPath.MAPS} element={<GoogleLists />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
