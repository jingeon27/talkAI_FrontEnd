import { useMainValue } from "@/hooks/context/main";
import { gql, useMutation } from "@apollo/client";

export const CREATE = gql`
  mutation CreateChat(
    $chat: [ChatResponseInput!]!
    $name: String!
    $role: String!
  ) {
    createChat(chat: $chat, name: $name, role: $role) {
      id
      profile
    }
  }
`;
export const useCreateChat = () => {
  const { chat, name, role } = useMainValue();
  const [createChat] = useMutation<{
    createChat: { id: string; profile: string };
  }>(CREATE, {
    variables: { name, chat, role },
  });
  return { createChat };
};
