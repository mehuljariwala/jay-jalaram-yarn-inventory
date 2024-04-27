"use client";

import { FC } from "react";

import { CssBaseline, ThemeProvider as MUIThemeProvider } from "@mui/joy";
import { StyledEngineProvider } from "@mui/joy/styles";

export const ThemeProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline enableColorScheme />
      {children}
    </StyledEngineProvider>
  );
};
