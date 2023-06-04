"use client";
import { RootInput } from "@/components/root-input";
import { VoiceComponents } from "@/components/voice";
import { useRootValue } from "@/hooks/context/useRootValueContext";
import { styled } from "styled-components";
export default function Home() {
  const { mikeOn } = useRootValue();
  return (
    <>
      <_Main>{mikeOn ? <VoiceComponents /> : <RootInput />}</_Main>
    </>
  );
}
const _Main = styled.main`
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;
