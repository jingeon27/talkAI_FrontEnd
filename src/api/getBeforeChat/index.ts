import { IChatResponse } from "@/util/chat-response.interface";
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
      profile
    }
  }
`;
export interface IGetBeforChat {
  getBeforeChat: IChatResponse[];
  getOpenAi: { role: string; name: string; profile: string };
}

export const useGetBeforeChat = (id: string) => {
  console.log(id);
  const { data, loading } = useQuery<IGetBeforChat>(GET_BEFROE_CHAT_QUERY, {
    variables: { id },
  });
  return { data, loading };
};
