import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
    }

    *, *::after, *::before {
        box-sizing: border-box;
      }

    html,body {
        height: 100%;
        overflow: auto;
    }

    ${({ theme }) => `
    body {
        font-family: ${theme.font};
        color: ${theme.colors.textColor};
        display: flex;
        justify-content: center;
        align-items: center;
    }
    `}
  
`;
