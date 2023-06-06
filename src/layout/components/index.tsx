import { Header } from "@/components/header";
import { Section } from "@/components/section";
import { ReactNode, useState } from "react";

export interface IRootComponentsProps {
  children: ReactNode;
}

export const RootComponents = ({ children }: IRootComponentsProps) => {
  const [active, setActive] = useState<boolean>(false);
  const onClick = () => {
    setActive((prev) => !prev);
  };
  return (
    <>
      <Header {...{ width: active ? 250 : 100, onClick }} />
      <Section {...{ active }}>{children}</Section>
    </>
  );
};