import { useChatResponse } from "@/api/chatResponse";
import { useMainValue } from "@/hooks/context/main";
import { styled } from "styled-components";
import { Chat } from "../atom/chat";
import { RootInput } from "../atom/root-input";
import { VoiceComponents } from "../atom/voice";
import { SettingModal } from "../modal/setting";
import { useEffect } from "react";
import { useRootAction } from "@/hooks/context/useRootActionContext";
import { StartBox } from "../atom/start-box";
import { useRootValue } from "@/hooks/context/useRootValueContext";
export interface IMainPageProps {
  isMain: boolean;
}
export const MainPage = ({ isMain }: IMainPageProps) => {
  const { scrollRef, mikeOn, chat, initial, name, role } = useMainValue();
  const { user } = useRootValue();
  const { setToast } = useRootAction();
  const { loading, error } = useChatResponse();
  useEffect(() => {
    if (error) {
      setToast({ comment: "에러입니다. 다시 입력해주세요.", toastState: true });
    }
  }, [error, setToast]);
  return (
    <>
      <_Layout ref={scrollRef}>
        {chat.length === 1 && <StartBox {...{ name, role, user }} />}
        {chat.slice(1, initial).map((e, i) => (
          <Chat {...e} key={`asmdklasdma${i}`} initial={true} />
        ))}
        {chat.slice(initial, chat.length).map((e, i) => (
          <Chat {...e} key={`asmdklasdma${i}`} initial={false} />
        ))}
        {loading && (
          <Chat
            key={"smdklmwkmdqwmld"}
            role={"assistant"}
            content={""}
            initial={false}
            loading
          />
        )}
      </_Layout>
      {mikeOn && !loading ? (
        <VoiceComponents />
      ) : (
        <RootInput {...{ loading }} />
      )}
      {chat.length === 0 && isMain && <SettingModal />}
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
  align-items: center;

  ${({ theme }) => theme.scroll};
  overflow-x: hidden;
`;
