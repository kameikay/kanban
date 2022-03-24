import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media 
  (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    font-size: 16px;
    color: #121212;
    background-color: #5FDAE8;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, textarea, select, button {
    font: 400 1rem "Roboto", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  #root {
    background: url('https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2386x1600/47f09f0e3910259568294477d0bdedac/photo-1576502200916-3808e07386a5.jpg') no-repeat center center/cover;
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }
`;
