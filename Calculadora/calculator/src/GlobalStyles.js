import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

/* @font-face {
    font-family: 'SFUIText';
    src: url('/assets/fonts/SFUIText-Regular.otf') format('opentype');
} */

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        outline: none;
        font-family: sans-serif;
        font-weight: lighter;
    }

    body {
        
        background-color:rgb(44, 71, 112);
        color: #F0F6FC;
    }

    /* html {
        display: flex;
        justify-content: center;
        text-align: center;
    } */
`;
