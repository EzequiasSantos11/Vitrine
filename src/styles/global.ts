import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    input, textarea, button{
      outline: none;
    }
    section{
      margin-top: 20px;
    }
  }
`;