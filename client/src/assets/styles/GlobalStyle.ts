import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'ONE-Mobile-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/ONE-Mobile-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'ONE-Mobile-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/ONE-Mobile-Title.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
  
  * {
    box-sizing: border-box;
  }

  :root {
    --toastify-toast-width: 450px;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: "ONE-Mobile-Regular";
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: revert;
    font-weight: 400;
  }

  ol, ul, li {
    list-style: none;
  }

  a {
    color: black;
    text-decoration: none;

    &:hover, &:active {
      color: black;
      text-decoration: none;
    }
  }

  button {
    cursor: pointer;
  }

  // react-toastify Nav바 가리지 않도록 위치 수정
  div.Toastify__toast-container--top-right {
    top: 145px;
  }

  div.toastui-editor-contents {
    z-index: 1;
  }
  div.toastui-editor-popup {
    z-index: 2;
  }
`;

export default GlobalStyle;
