import React from "react";
import { LuWifi, LuWifiHigh, LuWifiLow, LuWifiOff, LuWifiZero } from "react-icons/lu";

export function Wifi() {
    const [wifiSignal, setWifiSignal] = React.useState(null);

    React.useEffect(() => {
        function updateWifiSignal() {
            // Simulating WiFi signal strength for demonstration purposes
            const signalStrength = Math.floor(Math.random() * 100);
            setWifiSignal(signalStrength);
        }

        const interval = setInterval(updateWifiSignal, 5000);
        updateWifiSignal();

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            {wifiSignal !== null ? (
                <div>
                    <span>
                        {wifiSignal > 75 ? (
                            <LuWifi />
                        ) : wifiSignal > 50 ? (
                            <LuWifiHigh />
                        ) : wifiSignal > 25 ? (
                            <LuWifiLow />
                        ) : (
                            <LuWifiZero />
                        )}
                    </span>
                    {/* <span>{`${wifiSignal}%`}</span> */}
                </div>
            ) : (
                <LuWifiOff />
            )}
        </div>
    );
}
