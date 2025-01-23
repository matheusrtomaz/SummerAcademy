import React from "react";
import { Time } from "../time";
import { Batery } from "../batery";
import { Wifi } from "../wifi";
import { BateryStyles, ButtonsStyles, RedeStyles, WifiStykes } from "./styles";
import { Rede } from "../rede";

export function Buttons() {
    return(
        <ButtonsStyles>
            <div className="esq">
                <Time />
            </div>
            <div className="dir">
                <RedeStyles>
                    <Rede />
                </RedeStyles>
                <WifiStykes>
                    <Wifi />
                </WifiStykes>
                <BateryStyles>
                    <Batery />
                </BateryStyles>
            </div>
        </ButtonsStyles>
        
    ) 
}