import { InputHTMLAttributes } from "react";
import { styled } from "styled-components";

export interface IInputQuestionProps
  extends InputHTMLAttributes<HTMLInputElement> {}
export const InputQuestion = (props: IInputQuestionProps) => {
  return (
    <>
      <_Input {...props} />
    </>
  );
};
const _Input = styled.input`
  flex-grow: 1;

  outline: none;
  border: none;
  border-radius: 10px;

  padding: 0 20px;
  background-color: ${({ theme }) => theme.color.OUTLINE};
  color: ${({ theme }) => theme.color.ON_SURFACE};

  ${({ theme }) => theme.font.LABEL_LARGE}
  &::placeholder {
    color: ${({ theme }) => theme.color.ON_SURFACE_VARIENT};
  }
`;
