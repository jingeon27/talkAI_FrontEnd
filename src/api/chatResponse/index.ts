import { IChatResponse } from "@/util/chat-response.interface";
import { gql, useMutation } from "@apollo/client";
import { useEffect } from "react";

const CHAT_RESPONSE_QUERY = gql`
  mutation ChatResponse($question: [ChatResponseInput!]!) {
    chatResponse(question: $question)
  }
`;
export interface IChatResponseProps {
  question: IChatResponse[];
  changeChat: (props: IChatResponse) => void;
}
export const ChatResponse = ({ question, changeChat }: IChatResponseProps) => {
  const [chatResponse] = useMutation<{
    chatResponse: string;
  }>(CHAT_RESPONSE_QUERY);
  useEffect(() => {
    if (question.at(-1)?.role === "user") {
      chatResponse({
        variables: { question },
      }).then((res) =>
        changeChat({
          role: "assistant",
          content: res.data?.chatResponse as string,
        })
      );
    }
  }, [question]);
};
