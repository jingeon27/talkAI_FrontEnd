import { useMainAction, useMainValue } from "@/hooks/context/main";
import { ApolloError, gql, useMutation } from "@apollo/client";
import { useEffect } from "react";
import { useCreateChat } from "../createChat";
import { getAccessToken } from "@/util/storage/getAccessToken";
import { GetConversationContent } from "../getChatList";
import { useUpdateResponse } from "../updateResponse";
import { useGetImage } from "../getAiImage";

export const CHAT_RESPONSE_MUTATION = gql`
  mutation ChatResponse($chat: [ChatResponseInput!]!) {
    chatResponse(chat: $chat)
  }
`;

export const useChatResponse = (): {
  loading: boolean;
  error: ApolloError | undefined;
} => {
  const { chat, ai } = useMainValue();
  const { changeChat, setAi } = useMainAction();
  const { createChat } = useCreateChat();
  const { refetch, data } = GetConversationContent();
  const { updateChat, authHandling } = useUpdateResponse();
  const { profileImage } = useGetImage();
  const [chatResponse, handling] = useMutation<{
    chatResponse: string;
  }>(CHAT_RESPONSE_MUTATION);

  const isToken = getAccessToken();
  useEffect(() => {
    if (chat.at(-1)?.role === "user") {
      {
        if (isToken) {
          if (chat.length === 2) {
            createChat().then((res) => {
              setAi(res.data!.createChat);

              updateChat({ variables: { id: ai.id, chat } }).then((res) => {
                changeChat({
                  role: "assistant",
                  content: res.data!.updateChat.content,
                });
                if (data) {
                  refetch();
                }
              });
            });
          } else {
            updateChat({ variables: { id: ai.id, chat } }).then((res) => {
              changeChat({
                role: "assistant",
                content: res.data!.updateChat.content,
              });
              if (data) {
                refetch();
              }
            });
          }
        } else {
          if (chat.length === 2) {
            profileImage({ variables: { prompt: chat[0].content } }).then(
              (res) => {
                console.log(res);
                setAi({ id: "", profile: res.data!.profileImage });
              }
            );
          }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chat]);

  return {
    loading: (isToken ? authHandling : handling).loading,
    error: (isToken ? authHandling : handling).error,
  };
};
