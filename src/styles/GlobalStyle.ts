import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Mont';
    src: url('Mont-SemiBold.woff2') format('woff2'),
        url('Mont-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Mont';
    src:url('Mont-Bold.woff2') format('woff2'),
        url('Mont-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Mont';
    src:url('Mont-Heavy.woff2') format('woff2'),
        url('Mont-Heavy.woff') format('woff');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  body{
    font-family: 'Mont', sans-serif;
      height: 100%;
  }
`;
