import React from "react";
import { FinishStyles } from "./styles";

export function Finish({ toggleList }) {
    return (
        <FinishStyles>
            <button type="button" onClick={toggleList}>
                Finalizadas
            </button>
        </FinishStyles>
    );
}
