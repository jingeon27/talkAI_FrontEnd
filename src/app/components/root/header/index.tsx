import { ListButtonIcon } from "@/app/assets/listButton-icon";
import { styled } from "styled-components";
import Image from "next/image";
import { logo } from "@/../public";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useReissue } from "@/app/api/reissue";
import { setAccessToken } from "@/app/util/storage/setAccessToken";
import { useRootAction } from "@/app/hooks/context/useRootActionContext";
import { getAccessToken } from "@/app/util/storage/getAccessToken";
import { useGetUserInfo } from "@/app/api/getUserInfo";
import { useRootValue } from "@/app/hooks/context/useRootValueContext";
import { Logout } from "@/app/util/logout";
import Link from "next/link";

export interface IHeaderProps {
  onClick: () => void;
  width: number;
}
export const Header = (props: IHeaderProps) => {
  const router = useRouter();
  const { reissue } = useReissue();
  const { setLoginState, setUser } = useRootAction();
  const { login } = useRootValue();
  const { getUserInfo } = useGetUserInfo();

  useEffect(() => {
    const isCsr = typeof window !== undefined;
    if (isCsr) {
      if (!getAccessToken()) {
        reissue()
          .then((res) => {
            setAccessToken(res.data!.reissue);
            setLoginState(true);
            getUserInfo().then((response) => {
              setUser(response.data!.getUserInfo);
            });
          })
          .catch(() => {
            Logout();
            setLoginState(false);
          });
      } else if (!login) {
        setLoginState(true);
        getUserInfo()
          .then((response) => {
            setUser(response.data!.getUserInfo);
          })
          .catch(() => {
            Logout();
            setLoginState(false);
          });
      }
    }
    const interval = setTimeout(() => {
      if (isCsr) {
        reissue().then((res) => {
          setAccessToken(res.data!.reissue);
        });
      }
    }, 85000000);
    return () => clearTimeout(interval);
  }, [reissue]);

  return (
    <>
      <_Header>
        <div>
          <_Button {...props}>
            <ListButtonIcon />
          </_Button>
          <a href="/">
            <Image
              src={logo}
              alt={""}
              width={140}
              height={35}
              object-fit="cover"
            />
          </a>
        </div>
        {login ? (
          <nav
            onClick={() => {
              Logout();
              setLoginState(false);
            }}
          >
            <a href="/"> 로그아웃</a>
          </nav>
        ) : (
          <nav onClick={() => router.push("/login")}>로그인</nav>
        )}
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
    > a {
      text-decoration: none;
      color: ${({ theme }) => theme.color.ON_SURFACE_VARIENT};
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
