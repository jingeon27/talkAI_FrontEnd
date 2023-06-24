import { gql, useQuery } from "@apollo/client";

export const CHAT_LIST = gql`
  query ChatList {
    chatList {
      id
      title
      date
    }
  }
`;

export const GetConversationContent = () => {
  const { data, loading, error, refetch } = useQuery<{
    chatList: {
      title: string;
      id: string;
      date: number;
    }[];
  }>(CHAT_LIST);
  console.log(data);
  return { data, loading, error, refetch };
};
