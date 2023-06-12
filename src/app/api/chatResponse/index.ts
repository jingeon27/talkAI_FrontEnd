"use client";
import { useMainAction, useMainValue } from "@/app/hooks/context/main";
import { ApolloError, gql, useMutation } from "@apollo/client";
import { useEffect } from "react";
import { useCreateChat } from "../createChat";
import { getAccessToken } from "@/app/util/storage/getAccessToken";

export const CHAT_RESPONSE_MUTATION = gql`
  mutation ChatResponse($chat: [ChatResponseInput!]!) {
    chatResponse(chat: $chat)
  }
`;
export const UPDATE_RESPONSE_MUTATION = gql`
  mutation Update($chat: [ChatResponseInput!]!, $id: ID!) {
    updateChat(chat: $chat, id: $id) {
      content
    }
  }
`;
export const useChatResponse = (): {
  loading: boolean;
  error: ApolloError | undefined;
} => {
  const { chat, id } = useMainValue();
  const { changeChat, setID } = useMainAction();
  const { createChat } = useCreateChat();
  const [chatResponse, handling] = useMutation<{
    chatResponse: string;
  }>(CHAT_RESPONSE_MUTATION);
  const [updateChat, authHandling] = useMutation<{
    updateChat: { content: string };
  }>(UPDATE_RESPONSE_MUTATION);
  const isToken = getAccessToken();
  useEffect(() => {
    if (chat.at(-1)?.role === "user") {
      {
        if (isToken) {
          if (chat.length === 2) {
            createChat().then((res) => {
              const id = res.data!.createChat.id;
              setID(id);
              updateChat({ variables: { id, chat } }).then((res) => {
                console.log(res);
                changeChat({
                  role: "assistant",
                  content: res.data!.updateChat.content,
                });
              });
            });
          } else {
            updateChat({ variables: { id, chat } }).then((res) => {
              console.log(res);
              changeChat({
                role: "assistant",
                content: res.data!.updateChat.content,
              });
            });
          }
        } else {
          console.log("asdf");
          chatResponse({
            variables: { chat },
          }).then((res) =>
            changeChat({
              role: "assistant",
              content: res.data!.chatResponse,
            })
          );
        }
      }
    }
  }, [chat]);

  return {
    loading: (isToken ? authHandling : handling).loading,
    error: (isToken ? authHandling : handling).error,
  };
};
