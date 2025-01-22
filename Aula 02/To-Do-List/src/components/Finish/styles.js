import styled, { keyframes } from "styled-components";

// Animação para a aba aparecer de baixo para cima
const slideUp = keyframes`
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
`;

export const FinishStyles = styled.div`
    position: relative;
    button {
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
    }
`;

export const SlideUpContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1);
    border-top: 1px solid #ddd;
    animation: ${slideUp} 0.3s ease-out;
    z-index: 1000;

    ul {
        list-style: none;
        margin: 0;
        padding: 20px;
    }

    li {
        padding: 10px 0;
        border-bottom: 1px solid #ddd;
    }
`;
