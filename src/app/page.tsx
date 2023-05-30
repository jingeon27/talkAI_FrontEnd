"use client";
import styled from "styled-components";
export default function Home() {
  return (
    <>
      <_Div>안녕하세요.</_Div>
    </>
  );
}
const _Div = styled.div`
  color: ${({ theme }) => theme.color.ERROR};
  font: ${({ theme }) => theme.font.DISPLAY_LARGE};
  height: 100vh;
`;
