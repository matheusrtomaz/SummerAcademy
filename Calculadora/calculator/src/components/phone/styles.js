import styled from "styled-components";

export const PhoneStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5%;

    div.phone {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 18vw;
        height: calc(18vw * (200 / 100)); /* Ajusta a altura conforme a largura */
        background-color: black;
        border-radius: 30px;
        position: relative;
    }

    .bar {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 15px;
    }

    .barra {
        display: flex;
        width: 6rem;
        height: 0.2rem;
        background-color: white;
        border-radius: 20px;
    }

    /* Adicionando media queries para ajustar o layout */
    @media (max-width: 768px) {
        div.phone {
            width: 40vw;  /* Ajusta o tamanho para telas menores */
            height: calc(40vw * (200 / 100));
        }
    }

    @media (max-width: 480px) {
        div.phone {
            width: 60vw;  /* Ajusta ainda mais para telas muito pequenas */
            height: calc(60vw * (200 / 100));
        }
    }
`;
