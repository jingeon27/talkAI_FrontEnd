import { MikeIcon } from "@/assets/mike-icon";
import { styled } from "styled-components";
import { InputQuestion } from "../input";
import { useState } from "react";
import { SendIcon } from "@/assets/send-icon";

export const RootInput = () => {
  const [value, setValue] = useState<string>("");
  return (
    <>
      <_Wrapper>
        <InputQuestion
          value={value}
          onInput={(e) => setValue(e.target.value)}
          placeholder={"질문을 입력해주세요."}
        />
        <MikeIcon />
        <_Button len={value.length}>
          <SendIcon onClick={() => {}} />
        </_Button>
      </_Wrapper>
    </>
  );
};
const _Wrapper = styled.div`
  position: fixed;
  bottom: 20px;

  width: 700px;
  height: 50px;

  flex-grow: 1;
  border-radius: 10px;
  padding: 0 5px 0 20px;

  background-color: ${({ theme }) => theme.color.OUTLINE};
  display: flex;
  align-items: center;
  gap: 20px;
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
