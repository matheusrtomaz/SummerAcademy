import styled from "styled-components";

export const ButtonsStyles = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    /* padding: ; */
    .esq {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 7px 20px;
        font-size: 0.7rem;
    }
    .dir {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 7px 20px;
        font-size: 1rem;
    }
`;

export const RedeStyles = styled.div`
    /* padding: 5px; */
    font-size: 0.6rem;
`;

export const WifiStykes = styled.div`
    padding-left: 3px;
    font-size: 0.7rem;
`;

export const BateryStyles = styled.div`
    padding-left: 3px;
    padding-top: 2px;
`;