/* eslint-disable @next/next/no-img-element */
import { IChatResponse } from "@/util/chat-response.interface";
import { keyframes, styled } from "styled-components";
import { useChatEffect } from "@/hooks/chat";
import { useMainValue } from "@/hooks/context/main";
import { useRootValue } from "@/hooks/context/useRootValueContext";
export interface IChatProps extends IChatResponse {
  key: string;
  initial: boolean;
  loading?: boolean;
}

export const Chat = ({ content, loading, initial, ...props }: IChatProps) => {
  const { chat, isWriting } = useChatEffect(initial ? "" : content);
  const { name } = useMainValue();
  const { user, login } = useRootValue();
  const { ai } = useMainValue();
  const isUser = props.role === "user";
  return (
    <>
      <_Chat {...props}>
        <div>
          <div>
            <_Layout>
              <div>
                <img
                  src={
                    isUser
                      ? user.profile ||
                        "https://storage.googleapis.com/talkai-storage/profile.png"
                      : ai.profile ||
                        "https://storage.googleapis.com/talkai-storage/blur.png"
                  }
                  alt={""}
                />
              </div>
              <div>
                {isUser
                  ? `${login ? `${user.name}(나)` : "나"} : `
                  : `${name} : `}
              </div>
            </_Layout>
          </div>
          <div>
            {initial ? content : isUser ? content : chat}
            {!initial && (!isWriting || loading) && !isUser && <span>|</span>}
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
const _Layout = styled.div`
  display: flex;
  gap: 10px;
  > div {
    > img {
      &:first-child {
        position: relative;
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
    }
  }
`;
const _Chat = styled.div<Omit<IChatProps, "content" | "loading" | "initial">>`
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
        width: 200px;
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
