"use client";
import { Header } from "@/components/root/header";
import { Section } from "@/components/root/section";
import { useRootAction } from "@/hooks/context/useRootActionContext";
import { useRootValue } from "@/hooks/context/useRootValueContext";
import { ReactNode, useState } from "react";

export interface IRootComponentsProps {
  children: ReactNode;
}

export const RootComponents = ({ children }: IRootComponentsProps) => {
  const [active, setActive] = useState<boolean>(false);
  const { login } = useRootValue();
  const { setToast } = useRootAction();
  const onClick = () => {
    if (login) {
      setActive((prev) => !prev);
    } else {
      setToast({ comment: "로그인이 필요합니다.", toastState: true });
    }
  };
  return (
    <>
      <Header {...{ width: active ? 250 : 100, onClick }} />
      <Section {...{ active }}>{children}</Section>
    </>
  );
};
