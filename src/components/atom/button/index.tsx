import { ButtonHTMLAttributes } from "react";
import { styled } from "styled-components";
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}
export const Button = ({ text, ...props }: IButtonProps) => (
  <_Button {...props}>{text}</_Button>
);
const _Button = styled.button`
  border: none;
  width: 100%;
  height: 50px;

  border-radius: 5px;
  cursor: pointer;

  background-color: ${({ theme }) => theme.color.PRIMARY_CONTAINER};
  color: ${({ theme }) => theme.color.ON_PRIMARY_CONTAINER};

  &:hover {
    filter: brightness(1.1);
  }
`;
