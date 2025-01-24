import React from "react";
import { PhoneStyles } from "./styles";
import { Calculator } from "../calculator";
import { Buttons } from "../buttons";

export function Phone() {
    return (
        <PhoneStyles>
            
            <div className="phone">
                <Buttons />
                <Calculator />
                <div className='bar'>
                    <div className="barra"></div>
                </div>
            </div>
        </PhoneStyles>
    );
}
