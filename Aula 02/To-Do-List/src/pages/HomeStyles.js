import styled from "styled-components";

const HomeStyles = styled.div`
    div.home {
        display: grid;
        justify-items: center;
        text-align: start;
        height: 550px;
        margin-top: 50px;
        padding: 25px;
        border: 7px solid rgb(255, 255, 255);
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
    .completed-container li {
        list-style: none;
        width: 260px;
        height: 40px;
        margin-top: 20px;
        padding: 10px;
        border: 3px solid #f0f6fc;
        border-radius: 15px;
        font-size: 1rem;
        background-color: rgb(96, 191, 100);
        color: #f0f6fc;
        justify-content: space-between;
        align-items: center;
        display: flex;
        button {
            color: #f0f6fc;
            background-color: transparent;
            border: none;
            font-size: 1.3rem;
            display: flex;
            align-items: center;
            margin-right: 5px;
            padding-left: 7px;
            cursor: pointer;
            transition: color 0.2s ease-in-out;
        }
        button:active {
            transform: scale(0.8);
            transition: transform 0.2s ease-in-out;
        }
        button:hover {
            color: red;
            transition: color 0.2s ease-in-out;
        }
    }
`;

export default HomeStyles;
