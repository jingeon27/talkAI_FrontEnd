"use client";
import { ChatResponse, MUTATION } from "@/api/chatResponse";
import { REISSUE } from "@/api/reissue";
import { Chat, IChatProps } from "@/components/chat";
import { RootInput } from "@/components/root-input";
import { VoiceComponents } from "@/components/voice";
import { useRootValue } from "@/hooks/context/useRootValueContext";
import { IChatResponse } from "@/util/chat-response.interface";
import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
export default function Home() {
  const { mikeOn } = useRootValue();
  // const [reissue, { error, reset }] = useMutation(REISSUE);
  // useEffect(() => {
  //   reissue();
  // }, []);
  const [state, setState] = useState<IChatResponse[]>([]);
  const changeChat = (props: IChatResponse) => {
    setState((prev) => [...prev, props]);
  };
  // const [chatResponseMutation, { data, error }] = useMutation(MUTATION);
  // useEffect(() => {
  //   chatResponseMutation({ variables: { question: state } });
  // }, []);
  const { data } = ChatResponse(state);
  return (
    <>
      <_Main>
        {state.map((e, i) => (
          <Chat {...e} key={`asmdklasdma${i}`} />
        ))}
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
