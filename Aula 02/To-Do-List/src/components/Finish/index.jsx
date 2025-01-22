import React, { useState } from "react";
import { FinishStyles, SlideUpContainer } from "./styles";

export function Finish() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleList = () => {
        setIsOpen(!isOpen);
    };

    return (
        <FinishStyles>
            <button type="button" onClick={toggleList}>
                Finalizadas
            </button>
            {isOpen && (
                <SlideUpContainer>
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </SlideUpContainer>
            )}
        </FinishStyles>
    );
}
