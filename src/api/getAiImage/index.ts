import { gql, useMutation } from "@apollo/client";

export const AI_IMAGE_MUTATION = gql`
  mutation ProfileImage($prompt: String!) {
    profileImage(prompt: $prompt)
  }
`;
export const useGetImage = () => {
  const [profileImage] = useMutation<{ profileImage: string }>(
    AI_IMAGE_MUTATION
  );
  return { profileImage };
};
