import React from "react";
import { LuEllipsis, LuSignal, LuSignalHigh, LuSignalLow, LuSignalMedium, LuSignalZero } from "react-icons/lu";

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
                            <LuSignal />
                        ) : redeSignal > 60 ? (
                            <LuSignalHigh />
                        ) : redeSignal > 40 ? (
                            <LuSignalMedium />
                        ) : redeSignal > 20 ? (
                            <LuSignalLow />
                        ) : (
                            <LuSignalZero />
                        )}
                    </span>
                </div>
            ) : (
                <LuEllipsis />
            )}
        </div>
    );
}
