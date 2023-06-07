import { ChatResponse } from "@/api/chatResponse";
import { useMainAction, useMainValue } from "@/hooks/context/main";
import { styled } from "styled-components";
import { Chat } from "../atom/chat";
import { RootInput } from "../atom/root-input";
import { VoiceComponents } from "../atom/voice";

export const MainPage = () => {
  const { scrollRef, mikeOn, chat } = useMainValue();
  const { loading, error } = ChatResponse();
  return (
    <>
      <_Layout ref={scrollRef}>
        {chat.map((e, i) => (
          <Chat {...e} key={`asmdklasdma${i}`} />
        ))}
        {loading && (
          <Chat
            key={"smdklmwkmdqwmld"}
            role={"assistant"}
            content={""}
            loading
          />
        )}
      </_Layout>
      {mikeOn ? <VoiceComponents /> : <RootInput />}
    </>
  );
};
const _Layout = styled.div`
  width: 100%;
  height: 100%;

  box-sizing: border-box;
  padding-bottom: 100px;

  display: flex;
  flex-direction: column;

  overflow: scroll;
`;
