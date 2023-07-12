"use client";
import { useEffect } from "react";
import { MainPage } from "@/components/pages";
import { useGetBeforeChat } from "@/api/getBeforeChat";
import { useMainAction } from "@/hooks/context/main";
import { styled } from "styled-components";

export default function ServerPage({ params }: { params: { slug: string } }) {
  const { data, loading } = useGetBeforeChat(params.slug[0]);
  const { setChatBotAi, setInitial, setAi } = useMainAction();
  useEffect(() => {
    if (data !== undefined) {
      setChatBotAi(
        data.getBeforeChat.map((e) => ({ role: e.role, content: e.content })),
        data.getOpenAi.name,
        data.getOpenAi.role
      );
      setAi({ id: params.slug[0], profile: data.getOpenAi.profile });
      setInitial(data.getBeforeChat.length);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, loading]);
  return (
    <>
      <_Main>
        <MainPage isMain={false} />
      </_Main>
    </>
  );
}
const _Main = styled.main`
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;
