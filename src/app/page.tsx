"use client";
import { ChatResponse } from "@/api/chatResponse";
import { Chat } from "@/components/chat";
import { RootInput } from "@/components/root-input";
import { VoiceComponents } from "@/components/voice";
import { useRootValue } from "@/hooks/context/useRootValueContext";
import { IChatResponse } from "@/util/chat-response.interface";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
export default function Home() {
  const { mikeOn } = useRootValue();
  const [state, setState] = useState<IChatResponse[]>([]);
  const changeChat = (props: IChatResponse) => {
    setState((prev) => [...prev, props]);
    console.log(state);
  };
  ChatResponse({ question: state, changeChat });
  useEffect(() => {
    return () => {
      console.log("asdf");
    };
  }, []);
  return (
    <>
      <_Main>
        <_Layout>
          {state.map((e, i) => (
            <Chat {...e} key={`asmdklasdma${i}`} />
          ))}
        </_Layout>

        {mikeOn ? (
          <VoiceComponents {...{ changeChat }} />
        ) : (
          <RootInput {...{ changeChat }} />
        )}
      </_Main>
    </>
  );
}
const _Main = styled.main`
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;
const _Layout = styled.div`
  width: 100%;
  height: 100%;

  box-sizing: border-box;
  padding-bottom: 100px;

  display: flex;
  flex-direction: column;

  overflow: scroll;
`;
