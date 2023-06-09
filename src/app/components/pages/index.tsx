import { ChatResponse } from "@/app/api/chatResponse";
import { useMainValue } from "@/app/hooks/context/main";
import { styled } from "styled-components";
import { Chat } from "../atom/chat";
import { RootInput } from "../atom/root-input";
import { VoiceComponents } from "../atom/voice";
import { SettingModal } from "../modal/setting";
import { useEffect } from "react";
import { useRootAction } from "@/app/hooks/context/useRootActionContext";

export const MainPage = () => {
  const { scrollRef, mikeOn, chat } = useMainValue();
  const { setToast } = useRootAction();
  const { loading, error } = ChatResponse();
  useEffect(() => {
    if (error) {
      setToast({ comment: "에러입니다. 다시 입력해주세요.", toastState: true });
    }
  }, [error, setToast]);
  return (
    <>
      <_Layout ref={scrollRef}>
        {chat.slice(1, chat.length).map((e, i) => (
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
      {mikeOn && !loading ? (
        <VoiceComponents />
      ) : (
        <RootInput {...{ loading }} />
      )}
      {chat.length === 0 && <SettingModal />}
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
