import React, { FC, PropsWithChildren } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FloatingImage } from "../../FloatingImage";

export const BackgroundRouter: FC<PropsWithChildren> = () => {
  const { deployLocation } = kings;
  return (
    <BrowserRouter basename={deployLocation}>
      <Routes>
        <Route path="*" element={<FloatingImage />} />
      </Routes>
    </BrowserRouter>
  );
};
