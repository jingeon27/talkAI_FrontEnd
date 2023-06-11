import { gql, useLazyQuery } from "@apollo/client";

export const GET_USERINFO_QUERY = gql`
  query GetUserInfo {
    getUserInfo {
      name
      email
    }
  }
`;
export const GetUserInfo = () => {
  const [getUserInfo] = useLazyQuery<{
    getUserInfo: { email: string; name: string };
  }>(GET_USERINFO_QUERY);
  return { getUserInfo };
};
