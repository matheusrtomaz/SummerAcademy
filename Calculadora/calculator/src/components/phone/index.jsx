import React from "react";
import { PhoneStyles } from "./styles";
import { Calculator } from "../calculator";
import { Time } from "../time";
import { Batery } from "../batery";
import { Wifi } from "../wifi";
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
