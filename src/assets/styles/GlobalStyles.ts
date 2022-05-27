import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
    box-sizing: border-box;
}

*, *::after, *::before{
    box-sizing: inherit;
}

body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
}

a, button {
    font-family: 'Montserrat', sans-serif;
}

h1, h2, h3, p{
    margin: 0;
}
`;
