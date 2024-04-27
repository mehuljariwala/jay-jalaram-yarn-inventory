"use client";

import { FC } from "react";

import { CssBaseline, ThemeProvider as MUIThemeProvider } from "@mui/joy";
import { StyledEngineProvider } from "@mui/joy/styles";
import { LIGHTTHEME } from "../styles/MuiTheme";

export const ThemeProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={LIGHTTHEME}>
        <CssBaseline enableColorScheme />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};
