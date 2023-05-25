"use client";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./global";
export const CustomProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider {...{ theme }}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
