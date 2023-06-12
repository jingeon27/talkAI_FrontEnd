"use client";
import { useEffect } from "react";
import { MainPage } from "@/app/components/pages";
import { useGetBeforeChat } from "@/app/api/getBeforeChat";
import { useMainAction, useMainValue } from "@/app/hooks/context/main";
import { styled } from "styled-components";

export default function IDPage({ params }: { params: { slug: string } }) {
  const { data, loading } = useGetBeforeChat(params.slug[0]);
  const { chat } = useMainValue();
  const { setChatBotAi, setInitial, setID } = useMainAction();
  useEffect(() => {
    if (data !== undefined) {
      console.log(
        data?.getBeforeChat.map((e) => ({
          role: e.role,
          content: e.content,
        }))
      );
      setChatBotAi(
        data.getBeforeChat.map((e) => ({ role: e.role, content: e.content })),
        data.getOpenAi.name,
        data.getOpenAi.role
      );
      setID(params.slug[0]);
      setInitial(data.getBeforeChat.length);
    }

    console.log(chat);
    console.log(
      data?.getBeforeChat.map((e) => ({ role: e.role, content: e.content }))
    );
    console.log(data?.getBeforeChat);
  }, [loading, data]);
  console.log(params);
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
