import { IChatResponse } from "@/app/util/chat-response.interface";
import { gql, useQuery } from "@apollo/client";

export const GET_BEFROE_CHAT_QUERY = gql`
  query GetBeforeChat($id: ID!) {
    getBeforeChat(id: $id) {
      content
      role
      id
    }
    getOpenAi(id: $id) {
      name
      role
    }
  }
`;
export const useGetBeforeChat = (id: string) => {
  const { data, loading, error } = useQuery<{
    getBeforeChat: IChatResponse[];
    getOpenAi: { role: string; name: string };
  }>(GET_BEFROE_CHAT_QUERY, {
    variables: { id },
  });
  return { data, loading, error };
};
