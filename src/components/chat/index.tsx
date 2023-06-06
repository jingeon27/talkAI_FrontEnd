import { IChatResponse } from "@/util/chat-response.interface";
import { styled } from "styled-components";
export interface IChatProps extends IChatResponse {
  key: string;
}
export const Chat = (props: IChatProps) => {
  return (
    <>
      <_Chat></_Chat>
    </>
  );
};
const _Chat = styled.div`
  padding: 0 20px;
  ${({ theme }) => theme.font.BODY_LARGE};
`;
