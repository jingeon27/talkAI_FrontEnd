import { styled } from "styled-components";

export const ChatIcon = () => {
  return (
    <>
      <svg
        width="20"
        height="20"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <_Path d="M27 0H3C1.35 0 0 1.35 0 3V30L6 24H27C28.65 24 30 22.65 30 21V3C30 1.35 28.65 0 27 0Z" />
      </svg>
    </>
  );
};
const _Path = styled.path`
  fill: ${({ theme }) => theme.color.ON_BACKGROUND};
`;
