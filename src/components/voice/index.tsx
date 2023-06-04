import { useRootAction } from "@/hooks/context/useRootActionContext";
import { useEffect, useState } from "react";
import { keyframes, styled } from "styled-components";

export const VoiceComponents = () => {
  const { setMikeState } = useRootAction();
  const [state, setState] = useState<boolean>(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const NativeSpeechRecognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition ||
        window.mozSpeechRecognition ||
        window.msSpeechRecognition)();
      NativeSpeechRecognition.lang = "ko";
      NativeSpeechRecognition.continuous = true;
      NativeSpeechRecognition.interimResults = false;
      NativeSpeechRecognition.start();
      NativeSpeechRecognition.onstart = () => {
        setState(true);
      };
      NativeSpeechRecognition.onresult = (event: any) => {
        const result = [...event.results[0]];
        console.log(
          result.map((e: { transcript: string }) => e.transcript).join("")
        );
        setState(false);
        setMikeState();
      };
    }
  }, []);
  return (
    <>
      <_Layout>
        <_DeleteButton onClick={setMikeState}>X</_DeleteButton>
        <_Table>
          <div />
          <div />
          <div />
        </_Table>
        {state ? "말하세요." : "마이크 연결을 확인해주세요."}
      </_Layout>
    </>
  );
};
const changeHeight = keyframes`
    0% { transform: scale(1,1.2)}
  100% { transform: scale(1,0.1)}
`;
const _Layout = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  top: 0;
  left: 0;
  z-index: 3;

  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.5);
  color: ${({ theme }) => theme.color.ON_BACKGROUND};
`;
const _DeleteButton = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;

  cursor: pointer;
  color: ${({ theme }) => theme.color.ON_BACKGROUND};
  ${({ theme }) => theme.font.HEADLINE_LARGE};

  &:hover {
    color: ${({ theme }) => theme.color.OUTLINE};
  }
`;
const _Table = styled.div`
  display: flex;
  gap: 25px;
  > div {
    background-color: ${({ theme }) => theme.color.ON_BACKGROUND};
    width: 15px;
    height: 80px;
    border-radius: 5px;
    box-sizing: border-box;
    animation: ${changeHeight} 0.5s 0.3s ease infinite alternate;
    &:first-child {
      animation-delay: 0.45s;
    }
    &:last-child {
      animation-delay: 0s;
    }
  }
`;
