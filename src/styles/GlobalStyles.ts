import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }

 

  body {
    background:lightgoldenrodyellow;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
    
  }

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
`;

export default GlobalStyles;
