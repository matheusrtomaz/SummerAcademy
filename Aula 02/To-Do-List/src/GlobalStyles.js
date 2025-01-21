import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        outline: none;
    }

    body {
        font-family: 'Nunito', sans-serif;
        background-color: #0D1117;
        color: #F0F6FC;
    }

    html {
        display: flex;
        justify-content: center;
        text-align: center;
    }
`;
