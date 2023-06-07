import { useMainAction, useMainValue } from "@/hooks/context/main";
import { ApolloError, gql, useMutation } from "@apollo/client";
import { useEffect } from "react";

const CHAT_RESPONSE_QUERY = gql`
  mutation ChatResponse($question: [ChatResponseInput!]!) {
    chatResponse(question: $question)
  }
`;
export const ChatResponse = (): {
  loading: boolean;
  error: ApolloError | undefined;
} => {
  const { chat } = useMainValue();
  const { changeChat } = useMainAction();
  const [chatResponse, { loading, error }] = useMutation<{
    chatResponse: string;
  }>(CHAT_RESPONSE_QUERY);
  useEffect(() => {
    if (chat.at(-1)?.role === "user") {
      chatResponse({
        variables: { question: chat },
      }).then((res) =>
        changeChat({
          role: "assistant",
          content: res.data?.chatResponse as string,
        })
      );
    }
  }, [chat]);

  return { loading, error };
};
