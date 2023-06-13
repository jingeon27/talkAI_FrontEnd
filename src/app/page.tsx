"use client";
import { MainPage } from "@/app/components/pages";
import { MainProvider } from "@/app/hooks/context/main";
import { Suspense } from "react";
import { styled } from "styled-components";
export default function Home() {
  return (
    <>
      <MainProvider>
        <_Main>
          <Suspense>
            <MainPage isMain={true} />
          </Suspense>
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
