"use client";
import { InputQuestion } from "@/components/input";
import { useState } from "react";
import { styled } from "styled-components";
export default function Home() {
  const [value, setValue] = useState<string>("");
  return (
    <>
      <_Main>
        <_Layout>
          <_Wrapper>
            <InputQuestion
              value={value}
              onInput={(e) => setValue(e.target.value)}
            />
          </_Wrapper>
        </_Layout>
      </_Main>
    </>
  );
}
const _Wrapper = styled.div`
  display: flex;
  width: 700px;
  height: 50px;
`;
const _Main = styled.main`
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;
const _Layout = styled.div`
  position: fixed;
  bottom: 0;
  height: 100px;
  width: 100%;

  background-color: ${({ theme }) => theme.color.SURFACE};
  display: flex;
  align-items: center;
  justify-content: center;
`;
