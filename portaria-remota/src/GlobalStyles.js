import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        outline: none;
        font-family: "Inter", sans-serif;
        font-weight: 400;
        /* font-weight: lighter; */
    }

    html {
        
        background-color:rgb(44, 71, 112);
        color: #F0F6FC;
        display: flex;
  justify-content: center;
  align-items: center;
  }
    
`;
