"use client";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
export const CustomProvider = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider {...{ theme }}>{children}</ThemeProvider>;
};
