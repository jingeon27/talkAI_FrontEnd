import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
 body {
    background-color: ${({ theme }) => theme.color.SURFACE_VARIENT};
    overflow-x: hidden;
    scroll-behavior: smooth;
    margin: 0;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
 }
`;
