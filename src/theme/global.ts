import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
 body { 
    width: 100vw;
    height: 100vh;

    background-color: ${({ theme }) => theme.color.SURFACE_VARIENT};
    overflow-x: hidden;

    box-sizing: border-box;
    margin: 0;
 }
`;
