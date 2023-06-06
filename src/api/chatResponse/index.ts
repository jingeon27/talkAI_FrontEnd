import { IChatResponse } from "@/util/chat-response.interface";
import { gql, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";

// export const CHAT_RESPONSE = gql`
//   {
//     mutation
//     chatResponse(question: [{ role: String, content: String }]) {
//       chatResponse(question: $question)
//     }
//   }
// `;

export const MUTATION = gql`
  mutation ChatResponse {
    chatResponse
  }
`;
const initialState = {
  chatResponse: "",
};
export const ChatResponse = (state: IChatResponse[]) => {
  const [chatResponseMutation, { data, error }] = useMutation(MUTATION);
  const getData = async () => {
    return await chatResponseMutation();
  };
  useEffect(() => {
    getData();
  }, [state]);
  console.log(data);
  return { data };
};
