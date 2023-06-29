"use client";
import { useEffect } from "react";
import { MainPage } from "@/components/pages";
import { useGetBeforeChat } from "@/api/getBeforeChat";
import { useMainAction } from "@/hooks/context/main";
import { styled } from "styled-components";

export default function ServerPage({ params }: { params: { slug: string } }) {
  const { data, loading, error } = useGetBeforeChat(params.slug[0]);
  const { setChatBotAi, setInitial, setID } = useMainAction();
  useEffect(() => {
    console.log(data);
    if (data !== undefined) {
      setChatBotAi(
        data.getBeforeChat.map((e) => ({ role: e.role, content: e.content })),
        data.getOpenAi.name,
        data.getOpenAi.role
      );
      setID(params.slug[0]);
      setInitial(data.getBeforeChat.length);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, data]);

  if (loading) return loading;
  if (error) return error;
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
