"use client";
import { CustomApolloProvider } from "@/api/customApolloProvider";
import { RootContextProvider } from "@/hooks/context";
import { CustomProvider } from "@/theme";
import { ReactNode } from "react";
import { RootComponents } from "@/layout/components";
export interface IRootLayoutProviderProps {
  children: ReactNode;
}

export const RootLayoutProvider = ({ children }: IRootLayoutProviderProps) => {
  return (
    <CustomApolloProvider>
      <CustomProvider>
        <RootContextProvider>
          <RootComponents>{children}</RootComponents>
        </RootContextProvider>
      </CustomProvider>
    </CustomApolloProvider>
  );
};
