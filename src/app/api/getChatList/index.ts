import { gql, useQuery } from "@apollo/client";

export const CHAT_LIST = gql`
  query ChatList {
    chatList {
      id
      title
    }
  }
`;

export const GetConversationContent = () => {
  const { data, loading, error } = useQuery<{
    chatList: {
      title: string;
      id: string;
    }[];
  }>(CHAT_LIST);
  console.log(data);
  return { data, loading, error };
};
