import { styled } from "styled-components";
import { ModalLayout } from "..";
import Image from "next/image";
import { loginArray, bgColorType, colorType } from "@/app/util/login-array";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const LoginModal = () => {
  const router = useRouter();
  return (
    <>
      <ModalLayout>
        <_Table>
          <div>
            <div>TalkAi를 제대로 사용해보기!</div>
            <div>로그인 후 이전 채팅 기록을 저장해보세요.</div>
          </div>
          {loginArray.map((e) => (
            <_StyledLink
              href={`${process.env.NEXT_PUBLIC_API_URL}login/${e.path}`}
              key={`${e.path}`}
            >
              <_Button bgcolor={e.bgColor} color={e.color}>
                <Image
                  src={e.src}
                  alt={e.text}
                  width={40}
                  height={40}
                  object-fit="contain"
                />
                <div>{e.text}</div>
              </_Button>
            </_StyledLink>
          ))}
          <div onClick={() => router.back()}>아니요, 로그인 안할래요.</div>
        </_Table>
      </ModalLayout>
    </>
  );
};
const _Table = styled.div`
  padding: 50px 150px;

  display: flex;
  flex-direction: column;
  gap: 25px;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.BACKGROUND};
  > div {
    &:first-child {
      > div {
        &:first-child {
          letter-spacing: 2px;
          ${({ theme }) => theme.font.HEADLINE_MEDIUM};
          color: ${({ theme }) => theme.color.ON_BACKGROUND};
        }
        &:last-child {
          ${({ theme }) => theme.font.BODY_MEDIUM};
          color: ${({ theme }) => theme.color.ON_SURFACE_VARIENT};
        }
      }
    }
    &:last-child {
      cursor: pointer;
      ${({ theme }) => theme.font.BODY_MEDIUM};
      text-decoration: underline;
      text-align: end;

      color: ${({ theme }) => theme.color.ON_SURFACE_VARIENT};
      &:hover {
        color: ${({ theme }) => theme.color.ON_SURFACE};
      }
    }
  }
`;
const _StyledLink = styled(Link)`
  text-decoration: none;
`;
const _Button = styled.button<{
  bgcolor: bgColorType;
  color: colorType;
}>`
  width: 400px;
  height: 50px;

  border-radius: 5px;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  background-color: ${({ theme, bgcolor }) => theme.color[bgcolor]};

  > div {
    &:last-child {
      flex-grow: 1;
      color: ${({ theme, color }) => theme.color[color]};
      ${({ theme }) => theme.font.TITLE_MEDIUM}
    }
  }
`;
