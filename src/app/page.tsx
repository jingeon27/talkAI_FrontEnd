"use client";
import { MainPage } from "@/app/components/pages";
import { MainProvider } from "@/app/hooks/context/main";
import { styled } from "styled-components";
export default function Home() {
  return (
    <>
      <MainProvider>
        <_Main>
          <MainPage isMain={true} />
        </_Main>
      </MainProvider>
    </>
  );
}
const _Main = styled.main`
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;
