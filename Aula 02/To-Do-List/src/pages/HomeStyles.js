import styled from "styled-components";

const HomeStyles = styled.div`
    div.home {
        display: grid;
        justify-items: center;
        text-align: start;
        height: 550px;
        margin-top: 50px;
        padding: 25px;
        background: linear-gradient(
            to bottom,
            rgb(108, 210, 224),
            rgb(208, 133, 218)
        );
        color: #0d1117;
        border-radius: 15px;
        box-shadow: 0px 0px 10px 2px rgba(182, 184, 187, 0.22);
        h1 {
            font-size: 1.7rem;
        }
    }

    @media (max-width: 1920px) {
        div.home {
            min-width: 400px;
            max-width: 600px;
        }
    }

    @media (max-width: 480px) {
        div.home {
            max-width: 500px;
            min-width: 300px;
        }
    }
`;

export default HomeStyles;
