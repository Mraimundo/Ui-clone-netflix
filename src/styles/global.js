import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #111;
    --red: #e52e4d;
    --green: #33cc95;
    --blue: #5429cc;
    --blue-ligth: #6933ff;
    --text-title: #363F5F;
    --text-body: #969cb3;
    /* --background: #f0f2f5; */
    --white: #ffffff;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  }
  html {
    @media (max-width: 1080px) {
      font-size: 93.75% // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5% // 14px
    }
  }
  body {
    background: var(--background);
    color: var(--white);
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }
  button {
    cursor: pointer;
  }
`