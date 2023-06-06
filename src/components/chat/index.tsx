import { IChatResponse } from "@/util/chat-response.interface";
import { styled } from "styled-components";
import { useEffect, useState } from "react";

export interface IChatProps extends IChatResponse {
  key: string;
}
export const Chat = ({ content, ...props }: IChatProps) => {
  const [state, setState] = useState<string>("");
  useEffect(() => {
    const interval = setTimeout(() => {
      if (state.length !== content.length) {
        setState(content.slice(0, state.length + 1));
      }
    }, 30);
    return () => clearTimeout(interval);
  }, [state]);
  return (
    <>
      <_Chat {...props}>
        <div>
          <div>{props.role === "user" ? "me : " : "assistant : "}</div>
          <div>{state}</div>
        </div>
      </_Chat>
    </>
  );
};
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
    }
  }
`;
