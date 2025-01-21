import styled from "styled-components";

export const InputStyles = styled.div`
    input.itext {
        width: 80%;
        height: 40px;
        margin-top: 20px;
        padding: 10px 10px 10px 10px;
        border: 3px solid #F0F6FC;
        border-radius: 15px;
        font-size: 1rem;
        background-color: rgb(195, 220, 245);
        color: rgba(13, 17, 23, 0.5);
        &:focus {
            color: #0d1117;
        }
        &::placeholder {
            color: rgba(13, 17, 23, 0.5);
        }
    }
    input.ibutton {
        width: 40px;
        height: 40px;
        margin-top: 20px;
        margin-left: 10px;
        border: 3px solid #F0F6FC;
        border-radius: 15px;
        font-size: 1rem;
        background-color: rgb(23, 25, 27);
        color: #f0f6fc;
        cursor: pointer;
    }
    .input-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
