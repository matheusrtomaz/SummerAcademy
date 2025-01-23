import React from "react";
import { PhoneStyles } from "./styles";
import { Calculator } from "../calculator";
import { Time } from "../time";
import { Batery } from "../batery";
import { Wifi } from "../wifi";

export function Phone() {
    return (
        <PhoneStyles>
            
            <div className="phone">
            {/* <div className='icons'></div> */}
                <Time />
                <Wifi />
                <Batery/>
                <Calculator />
                <div className='bar'>
                    <div className="barra"></div>
                </div>
            </div>
        </PhoneStyles>
    );
}
