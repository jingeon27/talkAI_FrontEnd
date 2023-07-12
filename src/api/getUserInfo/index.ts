import { gql, useLazyQuery } from "@apollo/client";

export const GET_USERINFO_QUERY = gql`
  query GetUserInfo {
    getUserInfo {
      name
      email
      profile
    }
  }
`;
export const useGetUserInfo = () => {
  const [getUserInfo] = useLazyQuery<{
    getUserInfo: { email: string; name: string; profile: string };
  }>(GET_USERINFO_QUERY);
  return { getUserInfo };
};
