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
        <nav>로그인</nav>
      </_Header>
    </>
  );
};
const _Header = styled.header`
  height: 80px;
  border-bottom: 1px solid ${({ theme }) => theme.color.ON_BACKGROUND};
  padding-right: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > nav {
    cursor: pointer;
    color: ${({ theme }) => theme.color.ON_SURFACE_VARIENT};

    &:hover {
      color: ${({ theme }) => theme.color.ON_SURFACE};
    }
  }
`;
const _Button = styled.nav<{ active: boolean }>`
  height: 80px;
  width: ${({ active }) => (active ? 250 : 100)}px;

  background-color: ${({ active, theme }) =>
    active ? theme.color.BACKGROUND : theme.color.SURFACE_VARIENT};
  &:hover {
    background-color: ${({ theme }) => theme.color.OUTLINE};
  }

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;
