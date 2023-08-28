/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, PropsWithChildren } from "react";

export const TourPhoto: FC<
  PropsWithChildren<{
    className: string;
    label: string;
  }>
> = (props) => <div {...props} />;
