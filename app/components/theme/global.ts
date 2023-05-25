import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
background-color: ${({ theme }) => theme.color.black};
`;
