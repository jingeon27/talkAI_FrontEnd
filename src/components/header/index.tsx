"use client";
import { ListButtonIcon } from "@/assets/listButton-icon.svg";
import { ReactNode, useState } from "react";
import { styled } from "styled-components";
import { Menu } from "../menu";

export const Header = ({ children }: { children: ReactNode }) => {
  const [active, setActive] = useState<boolean>(false);
  const onClick = () => {
    setActive((prev) => !prev);
  };
  return (
    <>
      <_Header>
        <_Button {...{ active, onClick }}>
          <ListButtonIcon />
        </_Button>
      </_Header>
      <_Section>
        <div>{active ? <Menu /> : <></>}</div>
        <main>{children}</main>
      </_Section>
    </>
  );
};
const _Header = styled.header`
  height: 80px;
  border-bottom: 1px solid ${({ theme }) => theme.color.ON_BACKGROUND};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const _Button = styled.nav<{ active: boolean }>`
  height: 80px;
  width: ${({ active }) => (active ? 250 : 100)}px;

  &:hover {
    background-color: ${({ theme }) => theme.color.OUTLINE};
  }

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;
const _Section = styled.section`
  display: flex;

  > div {
    width: 250px;
    background-color: ${({ theme }) => theme.color.BACKGROUND};
  }

  > main {
    flex-grow: 1;
  }
`;
