import { ChangeEvent, KeyboardEvent } from "react";
import { styled } from "styled-components";

export interface IInputQuestionProps {
  value: string;
  placeholder: string;
  onInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
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

  outline: none;
  border: none;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.color.OUTLINE};
  color: ${({ theme }) => theme.color.ON_SURFACE};

  &::placeholder {
    color: ${({ theme }) => theme.color.ON_SURFACE_VARIENT};
  }
`;
