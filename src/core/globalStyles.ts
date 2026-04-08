import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  
  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body {
    background: #06061a;
    font-family: "Inter", sans-serif;
    overflow-x: hidden;
  }
`;