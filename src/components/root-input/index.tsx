import { MikeIcon } from "@/assets/mike-icon";
import { styled } from "styled-components";
import { InputQuestion } from "../input";
import { useState } from "react";
import { SendIcon } from "@/assets/send-icon";
import { IRootMikeProps } from "@/util/root-mike-props-interface";
export interface IRootInput extends IRootMikeProps {}
export const RootInput = ({ changeChat }: IRootInput) => {
  const [content, setContent] = useState<string>("");
  return (
    <>
      <_Wrapper>
        <div>
          <InputQuestion
            value={content}
            onInput={(e) => setContent(e.target.value)}
            placeholder={"질문을 입력해주세요."}
          />
          <MikeIcon />
          <_Button len={content.length}>
            <SendIcon
              onClick={() => {
                changeChat({ role: "user", content });
                setContent("");
              }}
            />
          </_Button>
        </div>
      </_Wrapper>
    </>
  );
};
const _Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;

  padding: 20px 0;
  background: linear-gradient(
    180deg,
    rgba(73, 69, 79, 0),
    rgba(73, 69, 79, 1) 60%
  );
  backdrop-filter: blur(4px);

  display: flex;
  justify-content: center;

  > div {
    width: 800px;
    height: 50px;

    border-radius: 10px;
    padding: 0 5px 0 20px;

    background-color: ${({ theme }) => theme.color.OUTLINE};
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;
const _Button = styled.div<{ len: number }>`
  width: 40px;
  height: 40px;

  background-color: ${({ theme, len }) =>
    len ? theme.color.PRIMARY_CONTAINER : theme.color.OUTLINE};

  border-radius: 5px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(${({ len }) => (len ? 0.9 : 1)});
  }
`;
