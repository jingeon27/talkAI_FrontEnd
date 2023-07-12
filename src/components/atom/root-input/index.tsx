import { MikeIcon } from "@/assets/mike-icon";
import { styled } from "styled-components";
import { InputQuestion } from "../input";
import { ChangeEvent, useState } from "react";
import { SendIcon } from "@/assets/send-icon";
import { useMainAction } from "@/hooks/context/main";
import { ILoadingProps } from "@/util/loading";
export const RootInput = ({ loading }: ILoadingProps) => {
  const [content, setContent] = useState<string>("");
  const { changeChat } = useMainAction();
  const out = () => {
    changeChat({ role: "user", content });
    setContent("");
  };
  return (
    <>
      <_Wrapper>
        <div>
          <InputQuestion
            type="text"
            value={content}
            onInput={(e: ChangeEvent<HTMLInputElement>) => {
              setContent(e.target.value);
            }}
            placeholder={"질문을 입력해주세요."}
            onKeyDown={(e) => {
              if (content && e.key === "Enter" && !e.nativeEvent.isComposing) {
                out();
              }
            }}
            readOnly={loading}
          />
          <MikeIcon />
          <_Button len={content.length}>
            <SendIcon
              onClick={() => {
                if (content) out();
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
    padding: 0 5px 0 0;

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
