import { createGlobalStyle } from 'styled-components';
// import poppinsRegular from 'src/assets/fonts/Poppins-Regular.ttf';
// import poppinsBold from 'src/assets/fonts/Poppins-Bold.ttf';
// import poppinsLight from 'src/assets/fonts/Poppins-Light.ttf';
// import poppinsMedium from 'src/assets/fonts/Poppins-Medium.ttf';

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
