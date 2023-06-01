import { ChangeEvent } from "react";
import { styled } from "styled-components";

export interface IInputQuestionProps {
  value: string;
  onInput: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const InputQuestion = (props: IInputQuestionProps) => {
  return (
    <>
      <_Input {...props} />
    </>
  );
};
const _Input = styled.input`
  flex-grow: 1;
  height: 50px;

  outline: none;
  border: none;

  padding: 0 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.OUTLINE};
  color: ${({ theme }) => theme.color.ON_SURFACE};
`;
