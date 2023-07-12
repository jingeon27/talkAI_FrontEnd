import { gql, useMutation } from "@apollo/client";

export const UPDATE_RESPONSE_MUTATION = gql`
  mutation Update($chat: [ChatResponseInput!]!, $id: ID!) {
    updateChat(chat: $chat, id: $id) {
      content
    }
  }
`;
export const useUpdateResponse = () => {
  const [updateChat, authHandling] = useMutation<{
    updateChat: { content: string };
  }>(UPDATE_RESPONSE_MUTATION);
  return { updateChat, authHandling };
};
