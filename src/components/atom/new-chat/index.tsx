import { styled } from "styled-components";

export const NewChat = () => (
  <>
    <_Layout href="/">
      <_NewChat>
        <div>+</div>새 채팅 시작하기
      </_NewChat>
    </_Layout>
  </>
);

export const _Template = styled.li`
  list-style: none;
  height: 60px;

  display: flex;
  align-items: center;

  padding: 0 20px;
  gap: 20px;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.OUTLINE};
  }
`;
const _Layout = styled.a`
  width: 100%;

  display: block;
  box-sizing: border-box;
  padding: 10px 25px;
  text-decoration: none;
`;
const _NewChat = styled(_Template)`
  width: 150px;
  > div {
    ${({ theme }) => theme.font.DISPLAY_SMALL};
  }
  border: 1px solid ${({ theme }) => theme.color.ON_BACKGROUND};
  border-radius: 5px;
  color: ${({ theme }) => theme.color.ON_BACKGROUND};
  ${({ theme }) => theme.font.LABEL_LARGE};
`;
