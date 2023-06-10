import { IChatResponse } from "@/app/util/chat-response.interface";
import { keyframes, styled } from "styled-components";
import { useChatEffect } from "@/app/hooks/chat";
import { useMainValue } from "@/app/hooks/context/main";
import { useRootValue } from "@/app/hooks/context/useRootValueContext";
export interface IChatProps extends IChatResponse {
  key: string;
  loading?: boolean;
}

export const Chat = ({ content, loading, ...props }: IChatProps) => {
  const { chat, isWriting } = useChatEffect(content);
  const { name } = useMainValue();
  const { user, login } = useRootValue();
  const isUser = props.role === "user";
  return (
    <>
      <_Chat {...props}>
        <div>
          <div>
            {isUser ? `${login ? `${user.name}(나)` : "나"} : ` : `${name} : `}
          </div>
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
