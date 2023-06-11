import { styled } from "styled-components";
import { MainPage } from "..";
import { useMainValue } from "@/app/hooks/context/main";
import { useEffect } from "react";
import { SettingModal } from "../../modal/setting";

export const RootPage = () => {
  const { chat } = useMainValue();
  useEffect(() => {
    return () => {};
  }, []);
  console.log(chat);
  return (
    <>
      <_Main>
        <MainPage />
      </_Main>
      {chat.length === 0 && <SettingModal />}
    </>
  );
};
const _Main = styled.main`
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;
