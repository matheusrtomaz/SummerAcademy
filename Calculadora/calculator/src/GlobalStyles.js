import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

/* @font-face {
    font-family: 'SFPRODISPLAYREGULAR';
    src: url('/assets/fonts/SFPRODISPLAYREGULAR.otf') format('opentype');
} */
/* @font-face {
    font-family: 'SFPRODISPLAYMEDIUM';
    src: url('/assets/fonts/SFPRODISPLAYMEDIUM.otf') format('opentype');
} */

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
