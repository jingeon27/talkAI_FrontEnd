import { IChatResponse } from "@/util/chat-response.interface";
import { keyframes, styled } from "styled-components";
import { useChatEffect } from "@/hooks/chat";
export interface IChatProps extends IChatResponse {
  key: string;
  loading?: boolean;
}
// eslint-disable-next-line react/display-name
export const Chat = ({ content, loading, ...props }: IChatProps) => {
  const { chat, isWriting } = useChatEffect(content);
  const isUser = props.role === "user";
  return (
    <>
      <_Chat {...props}>
        <div>
          <div>{isUser ? "나 : " : "오정수 : "}</div>
          <div>
            {isUser ? content : chat}
            {(!isWriting || loading) && !isUser && <span>|</span>}
          </div>
        </div>
      </_Chat>
    </>
  );
};
const ChatAnimate = keyframes`
    0% {
        opacity: 1;
    }
    50% {
        opacity:1;
    }
    100% {
        opacity: 0;
    }
`;
const _Chat = styled.div<Omit<IChatProps, "content">>`
  width: 100%;
  ${({ theme }) => theme.font.BODY_LARGE};
  background-color: ${({ theme, role }) =>
    theme.color[role === "user" ? "SURFACE" : "SURFACE_VARIENT"]};

  display: flex;
  justify-content: center;
  > div {
    width: 800px;
    padding: 20px 0;
    display: flex;
    > div {
      white-space: pre;
      &:first-child {
        width: 120px;
        color: ${({ theme }) => theme.color.ON_SURFACE_VARIENT};
        ${({ theme }) => theme.font.TITLE_LAGRE};
      }
      &:last-child {
        width: 700px;
        color: ${({ theme }) => theme.color.ON_BACKGROUND};
        white-space: break-spaces;
        ${({ theme }) => theme.font.TITLE_LAGRE};
      }
      > span {
        animation: ${ChatAnimate} 0.3s linear 0s infinite;
      }
    }
  }
`;
