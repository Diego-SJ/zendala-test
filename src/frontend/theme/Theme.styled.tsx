import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: poppins;
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: poppins;
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: poppins;
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: poppins;
    src: url() format('truetype');
    font-weight: 700;
    font-style: bold;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
      Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background: ${({ theme }: any) => theme.primary};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
