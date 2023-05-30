import { ListButtonIcon } from "@/assets/listButton-icon.svg";
import { styled } from "styled-components";
export interface IHeaderProps {
  onClick: () => void;
  active: boolean;
}
export const Header = (props: IHeaderProps) => {
  return (
    <>
      <_Header>
        <_Button {...props}>
          <ListButtonIcon />
        </_Button>
      </_Header>
    </>
  );
};
const _Header = styled.header`
  height: 80px;
  border-bottom: 1px solid ${({ theme }) => theme.color.ON_BACKGROUND};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const _Button = styled.nav<{ active: boolean }>`
  height: 80px;
  width: ${({ active }) => (active ? 250 : 100)}px;

  &:hover {
    background-color: ${({ theme }) => theme.color.OUTLINE};
  }

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;
