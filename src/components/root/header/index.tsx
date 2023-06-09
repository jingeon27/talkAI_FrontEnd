import { ListButtonIcon } from "@/assets/listButton-icon";
import { styled } from "styled-components";
import Image from "next/image";
import { logo } from "@/../public";
export interface IHeaderProps {
  onClick: () => void;
  width: number;
}
export const Header = (props: IHeaderProps) => {
  return (
    <>
      <_Header>
        <div>
          <_Button {...props}>
            <ListButtonIcon />
          </_Button>
          <Image
            src={logo}
            alt={""}
            width={140}
            height={35}
            object-fit="cover"
          />
        </div>

        <nav>로그인</nav>
      </_Header>
    </>
  );
};
const _Header = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  height: 80px;
  border-bottom: 1px solid ${({ theme }) => theme.color.ON_BACKGROUND};
  box-sizing: border-box;

  padding-right: 50px;
  background-color: ${({ theme }) => theme.color.SURFACE_VARIENT};

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
  > div {
    display: flex;
    gap: 20px;
    align-items: center;
    > img {
      cursor: pointer;
    }
  }
`;
const _Button = styled.nav<{ width: number }>`
  height: 79px;
  width: ${({ width }) => width}px;

  background-color: ${({ width, theme }) =>
    width === 250 ? theme.color.BACKGROUND : theme.color.SURFACE_VARIENT};
  &:hover {
    background-color: ${({ theme }) => theme.color.OUTLINE};
  }

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;
