"use client";
import { CustomApolloProvider } from "@/api/customApolloProvider";
import { RootContextProvider } from "@/hooks/context";
import { CustomProvider } from "@/theme";
import { ReactNode } from "react";
import { RootComponents } from "@/layout/components";
import { Toast } from "@/components/toast";
export interface IRootLayoutProviderProps {
  children: ReactNode;
}

export const RootLayoutComponents = ({
  children,
}: IRootLayoutProviderProps) => {
  return (
    <CustomApolloProvider>
      <CustomProvider>
        <RootContextProvider>
          <RootComponents>{children}</RootComponents>
          <Toast />
        </RootContextProvider>
      </CustomProvider>
    </CustomApolloProvider>
  );
};
