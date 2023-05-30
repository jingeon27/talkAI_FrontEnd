import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
 body {
    background-color: ${({ theme }) => theme.color.SURFACE_VARIENT};
    overflow-x: hidden;
    scroll-behavior: smooth;
     margin: 0;
 }
 * {
    outline: none;
    box-sizing: border-box;
  }
`;
