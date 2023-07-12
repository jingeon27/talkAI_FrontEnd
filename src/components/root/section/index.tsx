import { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import { Menu } from "../menu";

export interface ISectionProps extends HTMLAttributes<HTMLTableSectionElement> {
  active: boolean;
}

export const Section = ({ children, active }: ISectionProps) => {
  return (
    <>
      <_Section>
        {active ? <Menu /> : <></>}
        {children}
      </_Section>
    </>
  );
};
const _Section = styled.section`
  display: flex;
  flex-grow: 1;
  height: 100vh;
  box-sizing: border-box;
  padding-top: 80px;
  > {
    overflow: scroll;
    ${({ theme }) => theme.scroll}
  }
`;
