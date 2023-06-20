import { gql, useMutation } from "@apollo/client";

const REISSUE = gql`
  mutation reissue {
    reissue
  }
`;
export const useReissue = () => {
  const [reissue] = useMutation<{ reissue: string }>(REISSUE);
  return { reissue };
};
