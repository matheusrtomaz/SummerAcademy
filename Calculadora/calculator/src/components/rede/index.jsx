import React from "react";
// import { BiSignal4 } from "react-icons/bi";
import { FaSignal } from "react-icons/fa";
// import { LuEllipsis, LuSignal, LuSignalHigh, LuSignalLow, LuSignalMedium, LuSignalZero } from "react-icons/lu";
// import { PiCellSignalFullBold, PiCellSignalHighBold } from "react-icons/pi";

export function Rede() {
    const [redeSignal, setRedeSignal] = React.useState(null);

    React.useEffect(() => {
        function updateRedeSignal() {
            const signalStrength = Math.floor(Math.random() * 100);
            setRedeSignal(signalStrength);
        }

        const interval = setInterval(updateRedeSignal, 5000);
        updateRedeSignal();

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            {redeSignal !== null ? (
                <div>
                    <span>
                        {redeSignal > 80 ? (
                            <FaSignal />
                        ) : redeSignal > 60 ? (
                            <FaSignal />
                        ) : redeSignal > 40 ? (
                            <FaSignal />
                        ) : redeSignal > 20 ? (
                            <FaSignal />
                        ) : (
                            <FaSignal />
                        )}
                    </span>
                </div>
            ) : (
                <FaSignal />
            )}
        </div>
    );
}
