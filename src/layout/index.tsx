"use client";
import { CustomApolloProvider } from "@/api/customApolloProvider";
import { Header } from "@/components/header";
import { Section } from "@/components/section";
import { RootContextProvider } from "@/hooks/context";
import { CustomProvider } from "@/theme";
import { ReactNode, useState } from "react";

export interface IRootLayoutProviderProps {
  children: ReactNode;
}

export const RootLayoutProvider = ({ children }: IRootLayoutProviderProps) => {
  const [active, setActive] = useState<boolean>(false);
  const onClick = () => {
    setActive((prev) => !prev);
  };
  return (
    <CustomApolloProvider>
      <CustomProvider>
        <RootContextProvider>
          <Header {...{ active, onClick }} />
          <Section {...{ active }}>{children}</Section>
        </RootContextProvider>
      </CustomProvider>
    </CustomApolloProvider>
  );
};
