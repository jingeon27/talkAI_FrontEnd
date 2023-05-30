import { ReactNode } from "react";
import { styled } from "styled-components";
import { Menu } from "../menu";
export interface ISectionProps {
  children: ReactNode;
  active: boolean;
}
export const Section = ({ children, active }: ISectionProps) => {
  return (
    <>
      <_Section>
        {active ? <Menu /> : <></>}
        <main>{children}</main>
      </_Section>
    </>
  );
};
const _Section = styled.section`
  display: flex;

  > main {
    flex-grow: 1;
  }
`;
