import styled from "styled-components";

export const ItemsStyles = styled.ul`
    li {
        list-style: none;
        width: 260px;
        height: 40px;
        margin-top: 20px;
        padding: 10px;
        border: 3px solid #f0f6fc;
        border-radius: 15px;
        font-size: 1rem;
        background-color: rgb(88, 158, 255);
        color: #f0f6fc;
        justify-content: space-between;
        align-items: center;
        display: flex;
        div {
            display: flex;
            justify-content: space-between;
        }
        i.bx {
            display: flex;
            align-items: center;
            margin-right: 5px;
            padding-left: 7px;
            font-size: 1.3rem;
            cursor: pointer;
        }
        i#check:hover {
            color: green;
        }
        i#remove:hover {
            color: red;
        }
    }
`;
